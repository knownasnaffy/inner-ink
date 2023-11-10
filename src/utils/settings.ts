import defaultSettings from '../data/defaultSettings'
import * as defaultTypes from '../data/defaultSettings'

function getOption(optionName: string, defaultOption: any) {
	const option = localStorage.getItem(optionName)
	if (option) return JSON.parse(option)
	if (defaultOption !== undefined) return defaultOption
	else console.error('Default option provided probably does not exist.')
}

export const datePickerSettings = {
	disableFutureEntryLabel: 'disable-future-entry',
	get disableFutureEntry() {
		return getOption(
			this.disableFutureEntryLabel,
			defaultSettings.datePicker.disableFutureEntry
		)
	},
	set setDisableFutureEntry(value: defaultTypes.TypeOfDisableFutureEntry) {
		localStorage.setItem(
			this.disableFutureEntryLabel,
			JSON.stringify(value)
		)
	},

	weekStartLabel: 'week-start',
	get weekStart() {
		return getOption(
			this.weekStartLabel,
			defaultSettings.datePicker.weekStart
		)
	},
	set setWeekStart(value: defaultTypes.TypeOfWeekStart) {
		localStorage.setItem(this.weekStart, JSON.stringify(value))
	},
}
