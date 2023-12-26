import clsx from 'clsx'
import themeStore from '../../../../hooks/themeStore'
import { typeOfThemes } from '../../../../config/themes'

export const ThemeButton = ({ themeName }: { themeName: typeOfThemes }) => {
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
				'bg-base-100 card select-none gap-1 p-2 hover:cursor-pointer',
				'focus:outline-primary hover:opacity-90 focus:outline focus:outline-[3px]',
				theme === themeName &&
					'outline-primary outline-dashed outline-offset-1',
			)}
			onClick={() => setTheme(themeName)}
			data-theme={themeName}
		>
			<span className='bg-primary card w-full p-1.5'></span>
			<span className='bg-secondary card w-3/4 p-1.5'></span>
			<span className='bg-accent card w-1/2 p-1.5'></span>
			<p className='text-sm capitalize'>{themeName}</p>
		</div>
	)
}
