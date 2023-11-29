import { create } from 'zustand'

type EditorStoreState = {
	content: string
	setContent: (newContent: string) => void
}

const editorStore = create<EditorStoreState>((set) => ({
	content: '',
	setContent: (newContent) => set(() => ({ content: newContent })),
}))

export default editorStore
