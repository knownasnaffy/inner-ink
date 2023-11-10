export type TypeOfDisableFutureEntry = boolean
export type TypeOfWeekStart = 0 | 1 | 2 | 3 | 4 | 5 | 6

export type defaultSettingsTypes = {
	datePicker: {
		disableFutureEntry: TypeOfDisableFutureEntry
		weekStart: TypeOfWeekStart
	}
}

const defaultSettings: defaultSettingsTypes = {
	datePicker: {
		disableFutureEntry: true,
		weekStart: 1,
	},
}

export default defaultSettings
