import { create } from 'zustand'

type DateStoreState = {
	content: string
	setContent: (newContent: string) => void
}

const editorStore = create<DateStoreState>((set) => ({
	content: localStorage.getItem('autoSavedText') ?? '',
	setContent: (newContent) => set(() => ({ content: newContent })),
}))

export default editorStore
