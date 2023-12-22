import { create } from 'zustand'
import { getSettings, updateSettings } from '../utils/settings'

export type WeekStart = 0 | 1 | 2 | 3 | 4 | 5 | 6

type DateStoreState = {
	selectedDay: Date
	setSelectedDay: (day: Date) => void
	visibleMonth: Date
	setVisibleMonth: (month: Date) => void
	disableFutureEntry: boolean
	setDisableFutureEntry(newValue: boolean): void
	weekStart: WeekStart
	setWeekStart(newValue: WeekStart): void
}

const dateStore = create<DateStoreState>((set) => ({
	selectedDay: new Date(),
	setSelectedDay: (day) => set(() => ({ selectedDay: day })),
	visibleMonth: new Date(),
	setVisibleMonth: (month) => set(() => ({ visibleMonth: month })),
	disableFutureEntry: getSettings().disableFutureEntry,
	setDisableFutureEntry(newValue) {
		updateSettings({ disableFutureEntry: newValue })
		set(() => ({ disableFutureEntry: newValue }))
	},
	weekStart: getSettings().weekStart,
	setWeekStart(newValue) {
		updateSettings({ weekStart: newValue })
		set(() => ({ weekStart: newValue }))
	},
}))

export default dateStore
