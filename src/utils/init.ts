import { getSettings } from './settings'

// Get current theme from settings and apply it
const theme = getSettings().general.theme!
document.documentElement.setAttribute('data-theme', theme)
