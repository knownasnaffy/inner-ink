// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::Manager;
use window_shadows::set_shadow;

use tauri::Window;
// Create the command:
// This command must be async so that it doesn't run on the main thread.
#[tauri::command]
async fn close_splashscreen(window: Window) {
    // Close splashscreen
    window
        .get_window("splashscreen")
        .expect("no window labeled 'splashscreen' found")
        .close()
        .unwrap();
    // Show main window
    window
        .get_window("main")
        .expect("no window labeled 'main' found")
        .show()
        .unwrap();
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![close_splashscreen])
        .setup(|app| {
            let main_window = app.get_window("main").unwrap();
            set_shadow(&main_window, true).expect("Unsupported platform!");
            let splash_window = app.get_window("splashscreen").unwrap();
            set_shadow(&splash_window, true).expect("Unsupported platform!");
            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
