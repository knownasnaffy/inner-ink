# Inner Ink v3

## Architecture

**Tauri Store (unencrypted, but contains encrypted data):**
```json
{
  "encrypted_master_password": "...", // Master password encrypted with recovery key
  "encrypted_recovery_answers": "...", // Recovery answers encrypted with master password
  "recovery_questions": ["What was your first pet?", "..."] // Plain text
}
```

**Stronghold Vault (encrypted with master password):**
```json
{
  "salts": {
    "2024-01-15": "random_salt_1",
    "2024-01-16": "random_salt_2"
  },
  "app_keys": {
    // Any other encryption keys you might need
  }
}
```

**SQLite Database (unencrypted database with encrypted entries):**
```sql
CREATE TABLE entries (
    date DATE PRIMARY KEY,
    title_encrypted BLOB NOT NULL,
    content_encrypted BLOB NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

## Login Flows

**Normal login:**
1. User enters master password
2. Open Stronghold vault with master password
3. Retrieve salts for decrypting entries

**Recovery login:**
1. User answers recovery questions
2. Derive recovery key from answers
3. Decrypt master password from Tauri Store
4. Open Stronghold vault with recovered master password
5. Retrieve salts normally

## Why This Works Well

- ✅ **Single source of truth**: Master password is always the Stronghold key
- ✅ **Recovery possible**: Can recover master password from questions
- ✅ **Simple implementation**: Clear separation of concerns
- ✅ **Secure**: Salts protected in Stronghold, recovery data encrypted

**This architecture gives you both security and recoverability.**
