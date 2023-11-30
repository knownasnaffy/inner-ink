import { create } from 'zustand'
import { typeOfThemes } from '../data/themes'
import { getSettings, updateSettings } from '../utils/settings'

type ThemeStoreState = {
	theme?: typeOfThemes | ''
	setTheme(newTheme: typeOfThemes): void
}

const themeStore = create<ThemeStoreState>((set) => ({
	theme: getSettings().general.theme,
	setTheme(newTheme) {
		set(() => ({ theme: newTheme }))
		updateSettings({ general: { theme: newTheme } })
		document.documentElement.setAttribute('data-theme', newTheme)
	},
}))

export default themeStore
