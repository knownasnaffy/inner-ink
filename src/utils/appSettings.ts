import defaultSettings, { defaultSettingsTypes } from '../data/defaultSettings'

const getAppSettings: () => defaultSettingsTypes = () => {
	let settingsAsString = localStorage.getItem('settings')
	if (settingsAsString) return JSON.parse(settingsAsString)

	// settingsAsString = JSON.stringify(defaultSettings)
	// localStorage.setItem('settings', settingsAsString)

	return defaultSettings
}

const appSettings = getAppSettings()

export default appSettings
