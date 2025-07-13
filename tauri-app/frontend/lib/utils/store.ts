import { LazyStore } from '@tauri-apps/plugin-store'

// Create a new store or load the existing one,
// note that the options will be ignored if a `Store` with that path has already been created
export const myStore = new LazyStore('store.json', { autoSave: true })
