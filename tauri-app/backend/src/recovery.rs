/*
 * Stored Values in Recovery System:
 * 
 * 1. user_salt: 32-byte salt for password-based key derivation (stored as base64)
 * 2. recovery_salt: 32-byte salt for recovery answers key derivation (stored as base64)
 * 3. encrypted_recovery_key: Recovery key encrypted with master key (stored as base64)
 * 4. encrypted_master_key: Master key encrypted with recovery key (stored as base64)
 * 
 * These values enable dual recovery paths:
 * - Primary: Password → Master Key → Decrypt Recovery Key
 * - Recovery: Answers → Recovery Key → Decrypt Master Key
 */

use aes_gcm::{Aes256Gcm, Key, Nonce};
use aes_gcm::aead::{Aead, KeyInit};
use argon2::{Argon2, Algorithm, Params, Version};
use rand::{rngs::OsRng, RngCore};
use base64::{engine::general_purpose, Engine as _};
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct UserMetadata {
    pub user_salt: String,
    pub recovery_salt: String,
    pub encrypted_recovery_key: String,
    pub encrypted_master_key: String,
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct RecoverySetupResult {
    pub user_metadata: UserMetadata,
    pub master_key: Vec<u8>, // For immediate use in memory
}

/// Derive a 256-bit key using Argon2id with secure parameters
fn derive_key_argon2(input: &str, salt: &[u8]) -> Result<[u8; 32], String> {
    // Create Argon2 instance with secure parameters
    let params = Params::new(
        65536, // 64 MB memory cost
        3,     // 3 iterations
        4,     // 4 lanes (parallelism)
        Some(32), // 32 byte output length
    ).map_err(|e| format!("Invalid Argon2 parameters: {}", e))?;
    
    let argon2 = Argon2::new(Algorithm::Argon2id, Version::V0x13, params);
    
    // Use hash_password_into to get raw bytes
    let mut output = [0u8; 32];
    argon2
        .hash_password_into(input.as_bytes(), salt, &mut output)
        .map_err(|e| format!("Argon2 derivation failed: {}", e))?;
    
    Ok(output)
}

/// Generate a cryptographically secure random salt
fn generate_salt() -> [u8; 32] {
    let mut salt = [0u8; 32];
    OsRng.fill_bytes(&mut salt);
    salt
}

/// Encrypt data using AES-256-GCM with the provided key
fn encrypt_with_key(key: &[u8; 32], plaintext: &[u8]) -> Result<String, String> {
    let cipher = Aes256Gcm::new(&Key::<Aes256Gcm>::from_slice(key));
    
    let mut nonce_bytes = [0u8; 12];
    OsRng.fill_bytes(&mut nonce_bytes);
    let nonce = Nonce::from_slice(&nonce_bytes);
    
    let ciphertext = cipher
        .encrypt(nonce, plaintext)
        .map_err(|e| format!("Encryption failed: {}", e))?;
    
    let mut combined = nonce_bytes.to_vec();
    combined.extend_from_slice(&ciphertext);
    Ok(general_purpose::STANDARD.encode(combined))
}

/// Decrypt data using AES-256-GCM with the provided key
fn decrypt_with_key(key: &[u8; 32], data: &str) -> Result<Vec<u8>, String> {
    let combined = general_purpose::STANDARD
        .decode(data)
        .map_err(|e| format!("Base64 decode failed: {}", e))?;
    
    if combined.len() < 12 {
        return Err("Encrypted data too short".into());
    }
    
    let (nonce_bytes, ciphertext) = combined.split_at(12);
    let nonce = Nonce::from_slice(nonce_bytes);
    
    let cipher = Aes256Gcm::new(&Key::<Aes256Gcm>::from_slice(key));
    
    let plaintext = cipher
        .decrypt(nonce, ciphertext)
        .map_err(|e| format!("Decryption failed: {}", e))?;
    
    Ok(plaintext)
}

/// Setup initial recovery system during account creation
#[tauri::command]
pub fn setup_recovery(
    password: String,
    recovery_answers: Vec<String>,
) -> Result<RecoverySetupResult, String> {
    if recovery_answers.is_empty() {
        return Err("At least one recovery answer is required".into());
    }
    
    // Generate salts
    let user_salt = generate_salt();
    let recovery_salt = generate_salt();
    
    // Derive master key from password
    let master_key = derive_key_argon2(&password, &user_salt)?;
    
    // Derive recovery key from answers
    let combined_answers = recovery_answers.join("|");
    let recovery_key = derive_key_argon2(&combined_answers, &recovery_salt)?;
    
    // Cross-encrypt: master key encrypts recovery key, recovery key encrypts master key
    let encrypted_recovery_key = encrypt_with_key(&master_key, &recovery_key)?;
    let encrypted_master_key = encrypt_with_key(&recovery_key, &master_key)?;
    
    let user_metadata = UserMetadata {
        user_salt: general_purpose::STANDARD.encode(user_salt),
        recovery_salt: general_purpose::STANDARD.encode(recovery_salt),
        encrypted_recovery_key,
        encrypted_master_key,
    };
    
    // TODO: Save user_metadata to persistent storage
    // save_user_metadata(&user_metadata)?;
    
    Ok(RecoverySetupResult {
        user_metadata,
        master_key: master_key.to_vec(),
    })
}

/// Authenticate user with password and return master key
#[tauri::command]
pub fn authenticate_with_password(password: String) -> Result<Vec<u8>, String> {
    // TODO: Load user_metadata from persistent storage
    // let user_metadata = load_user_metadata()?;
    let user_metadata = dummy_load_user_metadata()?;
    
    // Derive master key from password
    let user_salt = general_purpose::STANDARD
        .decode(&user_metadata.user_salt)
        .map_err(|e| format!("Invalid user salt: {}", e))?;
    
    let master_key = derive_key_argon2(&password, &user_salt)?;
    
    // Verify by attempting to decrypt recovery key
    let _recovery_key_bytes = decrypt_with_key(&master_key, &user_metadata.encrypted_recovery_key)
        .map_err(|_| "Invalid password")?;
    
    Ok(master_key.to_vec())
}

/// Authenticate user with recovery answers and return master key
#[tauri::command]
pub fn authenticate_with_recovery(recovery_answers: Vec<String>) -> Result<Vec<u8>, String> {
    if recovery_answers.is_empty() {
        return Err("Recovery answers are required".into());
    }
    
    // TODO: Load user_metadata from persistent storage
    // let user_metadata = load_user_metadata()?;
    let user_metadata = dummy_load_user_metadata()?;
    
    // Derive recovery key from answers
    let recovery_salt = general_purpose::STANDARD
        .decode(&user_metadata.recovery_salt)
        .map_err(|e| format!("Invalid recovery salt: {}", e))?;
    
    let combined_answers = recovery_answers.join("|");
    let recovery_key = derive_key_argon2(&combined_answers, &recovery_salt)?;
    
    // Decrypt master key using recovery key
    let master_key_bytes = decrypt_with_key(&recovery_key, &user_metadata.encrypted_master_key)
        .map_err(|_| "Invalid recovery answers")?;
    
    if master_key_bytes.len() != 32 {
        return Err("Invalid master key length".into());
    }
    
    Ok(master_key_bytes)
}

/// Update password while preserving recovery mechanism
#[tauri::command]
pub fn update_password(
    current_master_key: Vec<u8>,
    new_password: String,
) -> Result<UserMetadata, String> {
    if current_master_key.len() != 32 {
        return Err("Invalid master key length".into());
    }
    
    // TODO: Load current user_metadata from persistent storage
    // let current_metadata = load_user_metadata()?;
    let current_metadata = dummy_load_user_metadata()?;
    
    // Generate new salt for new password
    let new_user_salt = generate_salt();
    
    // Derive new master key from new password
    let new_master_key = derive_key_argon2(&new_password, &new_user_salt)?;
    
    // Decrypt current recovery key
    let current_master_key_array: [u8; 32] = current_master_key.try_into()
        .map_err(|_| "Invalid master key format")?;
    
    let recovery_key_bytes = decrypt_with_key(&current_master_key_array, &current_metadata.encrypted_recovery_key)?;
    
    if recovery_key_bytes.len() != 32 {
        return Err("Invalid recovery key length".into());
    }
    
    let recovery_key: [u8; 32] = recovery_key_bytes.try_into()
        .map_err(|_| "Invalid recovery key format")?;
    
    // Re-encrypt with new master key
    let new_encrypted_recovery_key = encrypt_with_key(&new_master_key, &recovery_key)?;
    let new_encrypted_master_key = encrypt_with_key(&recovery_key, &new_master_key)?;
    
    let new_metadata = UserMetadata {
        user_salt: general_purpose::STANDARD.encode(new_user_salt),
        recovery_salt: current_metadata.recovery_salt, // Keep same recovery salt
        encrypted_recovery_key: new_encrypted_recovery_key,
        encrypted_master_key: new_encrypted_master_key,
    };
    
    // TODO: Save updated user_metadata to persistent storage
    // save_user_metadata(&new_metadata)?;
    
    Ok(new_metadata)
}

/// Update recovery answers while preserving password authentication
#[tauri::command]
pub fn update_recovery_answers(
    current_master_key: Vec<u8>,
    new_recovery_answers: Vec<String>,
) -> Result<UserMetadata, String> {
    if current_master_key.len() != 32 {
        return Err("Invalid master key length".into());
    }
    
    if new_recovery_answers.is_empty() {
        return Err("At least one recovery answer is required".into());
    }
    
    // TODO: Load current user_metadata from persistent storage
    // let current_metadata = load_user_metadata()?;
    let current_metadata = dummy_load_user_metadata()?;
    
    let current_master_key_array: [u8; 32] = current_master_key.try_into()
        .map_err(|_| "Invalid master key format")?;
    
    // Generate new recovery salt
    let new_recovery_salt = generate_salt();
    
    // Derive new recovery key from new answers
    let combined_new_answers = new_recovery_answers.join("|");
    let new_recovery_key = derive_key_argon2(&combined_new_answers, &new_recovery_salt)?;
    
    // Re-encrypt with new recovery key
    let new_encrypted_recovery_key = encrypt_with_key(&current_master_key_array, &new_recovery_key)?;
    let new_encrypted_master_key = encrypt_with_key(&new_recovery_key, &current_master_key_array)?;
    
    let new_metadata = UserMetadata {
        user_salt: current_metadata.user_salt, // Keep same user salt
        recovery_salt: general_purpose::STANDARD.encode(new_recovery_salt),
        encrypted_recovery_key: new_encrypted_recovery_key,
        encrypted_master_key: new_encrypted_master_key,
    };
    
    // TODO: Save updated user_metadata to persistent storage
    // save_user_metadata(&new_metadata)?;
    
    Ok(new_metadata)
}

// TODO: Implement persistent storage functions
fn dummy_load_user_metadata() -> Result<UserMetadata, String> {
    // This is a placeholder - replace with actual storage loading
    Err("User metadata storage not implemented yet".into())
}

// TODO: Implement this function to save user metadata to persistent storage
// fn save_user_metadata(metadata: &UserMetadata) -> Result<(), String> {
//     // Implementation depends on chosen storage backend (file, database, etc.)
//     Ok(())
// }

// TODO: Implement this function to load user metadata from persistent storage  
// fn load_user_metadata() -> Result<UserMetadata, String> {
//     // Implementation depends on chosen storage backend (file, database, etc.)
//     Ok(UserMetadata { ... })
// }
