import { initDB } from './database'
import { getSettings } from './settings'

// Get current theme from settings and apply it
const theme = getSettings().theme
document.documentElement.setAttribute('data-theme', theme)

await initDB()
