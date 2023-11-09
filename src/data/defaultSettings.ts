export type defaultSettingsTypes = {
	datePicker: {
		disableFutureEntry: boolean
		weekStart: 0 | 1 | 2 | 3 | 4 | 5 | 6
	}
}

const defaultSettings: defaultSettingsTypes = {
	datePicker: {
		disableFutureEntry: true,
		weekStart: 1,
	},
}

export default defaultSettings
