import { create } from 'zustand'

type DateStoreState = {
	content: string
	setContent: (newContent: string) => void
	lastSave?: Date
	setLastSave: (time: Date) => void
}

const editorStore = create<DateStoreState>((set) => ({
	content: '',
	setContent: (newContent) => set(() => ({ content: newContent })),
	lastSave: undefined,
	setLastSave: (time) => set(() => ({ lastSave: time })),
}))

export default editorStore
