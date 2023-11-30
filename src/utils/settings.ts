import { typeOfThemes } from '../data/themes'

// Define the structure of settings
type AppSettings = {
	general: {
		theme?: typeOfThemes
		runAtStartup?: boolean
		language?: 'en' | 'fr'
	}
	datepicker: {
		disableFutureEntry?: boolean
		weekStart?: 0 | 1 | 2 | 3 | 4 | 5 | 6
	}
}

// Default settings
const defaultSettings: AppSettings = {
	general: {
		theme: '',
		runAtStartup: false,
		language: 'en',
	},
	datepicker: {
		disableFutureEntry: true,
		weekStart: 0,
	},
}

// Function to retrieve settings from localStorage
export function getSettings(): AppSettings {
	const storedSettings = localStorage.getItem('appSettings')
	if (storedSettings) {
		return { ...defaultSettings, ...JSON.parse(storedSettings) }
	}
	return defaultSettings
}

// Function to save settings to localStorage
export function updateSettings(settings: Partial<AppSettings>): void {
	const currentSettings = getSettings()
	const newSettings = { ...defaultSettings, ...currentSettings, ...settings }
	localStorage.setItem('appSettings', JSON.stringify(newSettings))
}
