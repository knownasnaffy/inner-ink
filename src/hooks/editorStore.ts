import { create } from 'zustand'

type DateStoreState = {
	content: string
	setContent: (newContent: string) => void
}

const editorStore = create<DateStoreState>((set) => ({
	content: '',
	setContent: (newContent) => set(() => ({ content: newContent })),
}))

export default editorStore
