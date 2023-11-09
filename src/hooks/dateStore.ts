import { create } from 'zustand'

type DateStoreState = {
	selectedDay: Date
	setSelectedDay: (day: Date) => void
	visibleMonth: Date
	setVisibleMonth: (month: Date) => void
}

const dateStore = create<DateStoreState>((set) => ({
	selectedDay: new Date(),
	setSelectedDay: (day) => set(() => ({ selectedDay: day })),
	visibleMonth: new Date(),
	setVisibleMonth: (month) => set(() => ({ visibleMonth: month })),
}))

export default dateStore
