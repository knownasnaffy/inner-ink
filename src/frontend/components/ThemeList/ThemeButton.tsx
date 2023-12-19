import clsx from 'clsx'
import themeStore from '../../hooks/themeStore'
import { typeOfThemes } from '../../config/themes'

export const ThemeButton = ({ themeName }: { themeName: typeOfThemes }) => {
	// const currentTheme = localStorage.getItem('theme') || '';
	const theme = themeStore((state) => state.theme)
	const setTheme = themeStore((state) => state.setTheme)
	return (
		<div
			role='button'
			tabIndex={0}
			onKeyDown={(event) => {
				if ([' ', 'Enter'].includes(event.key)) {
					event.preventDefault()
					setTheme(themeName)
				}
			}}
			className={clsx(
				'bg-base-100 p-2 card gap-1 select-none hover:cursor-pointer',
				'focus:outline focus:outline-primary hover:opacity-90 focus:outline-[3px]',
				theme === themeName &&
					'outline-dashed outline-primary outline-offset-1',
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
