use std::sync::Mutex;

pub struct AppState {
    pub master_password: Mutex<Option<String>>,
}

impl AppState {
    pub fn new() -> Self {
        Self {
            master_password: Mutex::new(None),
        }
    }
}
