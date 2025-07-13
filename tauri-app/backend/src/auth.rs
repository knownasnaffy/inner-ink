// src-tauri/src/auth.rs
use crate::state::AppState;
use std::sync::Mutex;
use tauri::State; // Import your state

#[tauri::command]
pub fn store_password(password: String, state: State<AppState>) -> Result<(), String> {
    let mut stored_password = state.master_password.lock().map_err(|e| e.to_string())?;
    *stored_password = Some(password);
    Ok(())
}

#[tauri::command]
pub fn get_password(state: State<AppState>) -> Result<Option<String>, String> {
    let stored_password = state.master_password.lock().map_err(|e| e.to_string())?;
    Ok(stored_password.clone())
}

#[tauri::command]
pub fn clear_password(state: State<AppState>) -> Result<(), String> {
    let mut stored_password = state.master_password.lock().map_err(|e| e.to_string())?;
    *stored_password = None;
    Ok(())
}

#[tauri::command]
pub fn is_authenticated(state: State<AppState>) -> Result<bool, String> {
    let stored_password = state.master_password.lock().map_err(|e| e.to_string())?;
    Ok(stored_password.is_some())
}
