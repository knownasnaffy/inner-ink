import { create } from 'zustand'

type EditorStoreState = {
	title: string
	setTitle: (newTitle: string) => void
}

const editorStore = create<EditorStoreState>((set) => ({
	title: '',
	setTitle: (newTitle) => set(() => ({ title: newTitle })),
}))

export default editorStore
