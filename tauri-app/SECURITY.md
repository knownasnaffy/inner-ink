# Diary App Encryption Architecture - Hybrid Approach

## Overview

This document outlines the encryption architecture for a diary application using a hybrid approach that combines password-derived master keys with randomly generated per-entry encryption keys. This design provides maximum security while maintaining usability and recovery capabilities.

## Security Model

### Two-Tier Encryption System

1. **Master Key Layer**: Derived from user password, controls access to entry keys
2. **Entry Key Layer**: Cryptographically random keys for actual content encryption

### Key Benefits

- **Pattern Elimination**: Each entry uses truly random keys, preventing cross-entry cryptanalysis
- **Defense in Depth**: Compromise requires breaking both master password and individual entry keys
- **Forward Security**: Individual entry compromise doesn't affect other entries
- **Performance Optimized**: Minimal computational overhead during normal operation

## Application Flow

### First Login (Account Creation)

```
User Input:
├── Master Password
└── Recovery Answers (multiple security questions)

Process:
1. Generate salt for password derivation
2. Derive master key from password using Argon2
3. Generate salt for recovery derivation  
4. Derive recovery key from answers using Argon2
5. Cross-encrypt and store:
   ├── Encrypted(master_key, recovery_key) → stored on disk
   └── Encrypted(recovery_key, master_key) → stored on disk

Storage Structure:
├── user_salt (password derivation)
├── recovery_salt (recovery questions derivation)
├── encrypted_recovery_key (encrypted with master key)
└── encrypted_master_key (encrypted with recovery key)
```

### Subsequent Logins

```
User Input: Master Password

Process:
1. Load user_salt from disk
2. Derive master key from password + salt using Argon2
3. Decrypt stored recovery key using master key
4. Verify successful decryption (authentication)
5. Store master key in application memory
6. Clear password from memory

Result: Authenticated session with master key in memory
```

### Recovery Process

```
User Input: Recovery Answers

Process:
1. Load recovery_salt from disk  
2. Derive recovery key from answers + salt using Argon2
3. Decrypt stored master key using recovery key
4. Use decrypted master key for session
5. Store master key in application memory

Result: Authenticated session via recovery path
```

## Entry Encryption Process

### Creating New Entry

```
User Action: Create/Edit entry for specific date

Process:
1. Generate cryptographically random entry key (256-bit)
2. Generate unique salt for content encryption
3. Encrypt entry content using entry key + salt (AES-256-GCM)
4. Encrypt entry key using master key (AES-256-GCM)
5. Store encrypted bundle

Storage Structure:
├── date (plaintext identifier)
├── content_salt (for content encryption)
├── encrypted_entry_key (entry key encrypted with master key)
└── encrypted_content (content encrypted with entry key)
```

### Reading Existing Entry

```
User Action: View entry for specific date

Process:
1. Load encrypted entry bundle from storage
2. Decrypt entry key using master key
3. Decrypt content using decrypted entry key + stored salt
4. Display plaintext content to user
5. Clear decrypted entry key from memory
```

## Key Derivation Specifications

### Password-Based Key Derivation

```
Algorithm: Argon2id
Parameters:
├── Memory: 64 MB (65536 KB)
├── Iterations: 3
├── Parallelism: 4 threads
├── Salt: 32 bytes (cryptographically random)
└── Output: 32 bytes (256-bit key)

Usage:
├── Master key derivation from password
└── Recovery key derivation from answers
```

### Content Encryption

```
Algorithm: AES-256-GCM
Key Size: 256 bits (cryptographically random per entry)
Nonce: 96 bits (unique per encryption operation)
Authentication: Built-in AEAD (Authenticated Encryption with Associated Data)
```

## Security Properties

### Threat Resistance

- **Password Attacks**: Argon2id parameters make brute force computationally expensive
- **Pattern Analysis**: Random entry keys eliminate cross-entry correlation
- **Partial Compromise**: Individual entry breach doesn't affect other entries
- **Known Plaintext**: Random keys prevent known plaintext attacks across entries
- **Recovery Attacks**: Recovery mechanism provides fallback without weakening primary security

### Memory Security

- Master password cleared from memory after key derivation
- Master key stored in application memory only (cleared on exit)
- Entry keys decrypted on-demand and immediately cleared
- No persistent storage of plaintext keys or passwords

## Implementation Considerations

### Performance Characteristics

- **Initial Authentication**: ~200-300ms (Argon2 derivation)
- **Entry Access**: <1ms per entry (AES operations)
- **Storage Overhead**: ~64 bytes per entry (salts + encrypted key)

### Error Handling

- **Invalid Password**: Decryption of recovery key fails → authentication error
- **Corrupted Data**: GCM authentication prevents silent corruption
- **Missing Entries**: Graceful handling of missing entry files

### Backup and Recovery

- **Full Backup**: All encrypted data + salts can be safely backed up
- **Recovery Process**: Recovery answers provide independent access path
- **Password Change**: Re-encrypt all entry keys with new master key
- **Recovery Change**: Re-derive and re-encrypt recovery components

## Storage Format Example

```json
{
  "user_metadata": {
    "user_salt": "base64_encoded_32_bytes",
    "recovery_salt": "base64_encoded_32_bytes", 
    "encrypted_recovery_key": "base64_encoded_encrypted_data",
    "encrypted_master_key": "base64_encoded_encrypted_data"
  },
  "entries": {
    "2024-01-15": {
      "content_salt": "base64_encoded_32_bytes",
      "encrypted_entry_key": "base64_encoded_encrypted_key", 
      "encrypted_content": "base64_encoded_encrypted_content"
    }
  }
}
```

## Security Analysis

### Attack Scenarios

1. **Offline Password Attack**: Requires breaking Argon2 with configured parameters
2. **Entry-Level Attack**: Requires master key + breaking AES-256-GCM
3. **Recovery Attack**: Requires breaking recovery answers + Argon2
4. **Storage Compromise**: All data encrypted, no plaintext exposure

### Cryptographic Assumptions

- AES-256 remains secure against classical and quantum attacks (within reasonable timeframe)
- Argon2id provides adequate password-based key derivation security
- System random number generator provides cryptographically secure entropy
- GCM provides authenticated encryption preventing tampering

## Conclusion

This hybrid approach provides robust security for diary applications by combining the usability of password-based authentication with the security benefits of random per-entry encryption keys. The dual recovery mechanism ensures users can regain access while maintaining strong cryptographic properties throughout the system.
