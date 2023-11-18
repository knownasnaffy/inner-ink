import { create } from 'zustand'
import { typeOfThemes } from '../data/themes'

type ThemeStoreState = {
	theme: typeOfThemes | ''
	setTheme(newTheme: typeOfThemes | ''): void
}

const themeStore = create<ThemeStoreState>((set) => ({
	theme: localStorage.getItem('theme') as typeOfThemes,
	setTheme(newTheme) {
		set(() => ({ theme: newTheme }))
		localStorage.setItem('theme', newTheme)
		document.documentElement.setAttribute('data-theme', newTheme)
	},
}))

export default themeStore
