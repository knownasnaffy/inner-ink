mod functions;
use functions::greet;

mod auth;
mod state;
mod recovery;

use auth::{clear_password, get_password, is_authenticated, on_board, store_password};
use state::AppState;
use recovery::{setup_recovery, authenticate_with_password, authenticate_with_recovery, update_password, update_recovery_answers};

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .manage(AppState::new())
        .plugin(tauri_plugin_stronghold::Builder::new(|_pass| todo!()).build())
        .plugin(tauri_plugin_sql::Builder::new().build())
        .plugin(tauri_plugin_store::Builder::new().build())
        .plugin(tauri_plugin_log::Builder::new().build())
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![
            greet,
            store_password,
            get_password,
            clear_password,
            is_authenticated,
            on_board,
            setup_recovery,
            authenticate_with_password,
            authenticate_with_recovery,
            update_password,
            update_recovery_answers
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
