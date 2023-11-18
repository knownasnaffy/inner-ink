import { typeOfThemes } from '../data/themes'

const theme = localStorage.getItem('theme') || ''
document.documentElement.setAttribute('data-theme', theme)

export function setTheme(newTheme: typeOfThemes | '') {
	localStorage.setItem('theme', newTheme)
	document.documentElement.setAttribute('data-theme', newTheme)
}
