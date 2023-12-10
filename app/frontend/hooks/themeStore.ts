import { create } from 'zustand'
import { typeOfThemes } from '../data/themes'
import { getSettings, updateSettings } from '../utils/settings'

type ThemeStoreState = {
	theme?: typeOfThemes | ''
	setTheme(newTheme: typeOfThemes): void
}

const themeStore = create<ThemeStoreState>((set) => ({
	theme: getSettings().theme,
	setTheme(newTheme) {
		set(() => ({ theme: newTheme }))
		updateSettings({ theme: newTheme })
		document.documentElement.dataset.theme = newTheme
	},
}))

export default themeStore
