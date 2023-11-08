import { create } from 'zustand'

type DateStoreState = {
	selectedDay: Date
	setSelectedDay: (day: Date) => void
}

const dateStore = create<DateStoreState>((set) => ({
	selectedDay: new Date(),
	setSelectedDay: (day) => set(() => ({selectedDay: day }))
}))

export default dateStore
