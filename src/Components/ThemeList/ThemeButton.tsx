import clsx from 'clsx'
import themeStore from '../../hooks/themeStore'
import { typeOfThemes } from '../../data/themes'

export const ThemeButton = ({ themeName }: { themeName: typeOfThemes }) => {
	// const currentTheme = localStorage.getItem('theme') || '';
	const theme = themeStore((state) => state.theme)
	const setTheme = themeStore((state) => state.setTheme)
	const isActive = theme === themeName
	return (
		<div
			className={clsx(
				'bg-base-100 p-2 card gap-1',
				isActive && 'outline-dashed outline-offset-1',
			)}
			onClick={() => setTheme(themeName)}
			data-theme={themeName}
		>
			<span className='bg-primary card p-1.5 w-full'></span>
			<span className='bg-secondary card p-1.5 w-3/4'></span>
			<span className='bg-accent card p-1.5 w-1/2'></span>
			<p className='text-sm capitalize'>{themeName}</p>
		</div>
	)
}
