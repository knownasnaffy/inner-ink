// lib.rs
mod functions;
use functions::greet; // import the command

mod auth;
mod state;

use auth::{clear_password, get_password, is_authenticated, store_password};
use state::AppState;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .manage(AppState::new()) // Now this works!
        .plugin(tauri_plugin_stronghold::Builder::new(|pass| todo!()).build())
        .plugin(tauri_plugin_sql::Builder::new().build())
        .plugin(tauri_plugin_store::Builder::new().build())
        .plugin(tauri_plugin_log::Builder::new().build())
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![
            greet,
            store_password,
            get_password,
            clear_password,
            is_authenticated
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
