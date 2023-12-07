import { create } from 'zustand'

type EditorStoreState = {
	content: string
	setContent: (newContent: string) => void
	title: string
	setTitle: (newTitle: string) => void
}

const editorStore = create<EditorStoreState>((set) => ({
	content: '',
	setContent: (newContent) => set(() => ({ content: newContent })),
	title: '',
	setTitle: (newTitle) => set(() => ({ title: newTitle })),
}))

export default editorStore
