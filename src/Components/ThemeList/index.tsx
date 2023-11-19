import clsx from 'clsx'
import { themes } from '../../data/themes'
import themeStore from '../../hooks/themeStore'
import { ThemeButton } from './ThemeButton'

export const ThemeList = () => {
	const theme = themeStore((state) => state.theme)
	const setTheme = themeStore((state) => state.setTheme)
	return (
		<>
			<div
				className={clsx(
					'bg-base-100 p-2 card gap-1',
					theme === '' && 'outline-dashed outline-offset-1',
				)}
				onClick={() => setTheme('')}
			>
				<span className='bg-primary card p-1.5'></span>
				<span className='bg-secondary card p-1.5 w-3/4'></span>
				<span className='bg-accent card p-1.5 w-1/2'></span>
				<p className='text-sm'>System Default</p>
			</div>
			{themes.map((theme, index) => {
				return <ThemeButton key={index} themeName={theme} />
			})}
		</>
	)
}
