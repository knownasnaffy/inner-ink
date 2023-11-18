import { themes } from '../../data/themes'
import { ThemeButton } from './ThemeButton'

export const ThemeList = themes.map((theme, index) => {
	return <ThemeButton key={index} themeName={theme} />
})
