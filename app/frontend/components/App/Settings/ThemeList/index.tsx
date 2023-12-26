import clsx from 'clsx'
import { themes } from '../../../../config/themes'
import themeStore from '../../../../hooks/themeStore'
import { ThemeButton } from './ThemeButton'

export const ThemeList = () => {
	const theme = themeStore((state) => state.theme)
	const setTheme = themeStore((state) => state.setTheme)
	return (
		<>
			<div
				role='button'
				tabIndex={0}
				onKeyDown={(event) => {
					if ([' ', 'Enter'].includes(event.key)) {
						event.preventDefault()
						setTheme('')
					}
				}}
				className={clsx(
					'relative select-none overflow-hidden rounded-2xl hover:cursor-pointer',
					'focus:outline-primary hover:opacity-90 focus:outline focus:outline-[3px] focus:outline-offset-1',
					theme === '' &&
						'outline-primary outline-dashed outline-offset-1',
				)}
				onClick={() => setTheme('')}
			>
				<div
					className='clip-path-left absolute left-0 top-0 flex w-full flex-col gap-1 py-2 pl-2'
					data-theme='light'
				>
					<span className='bg-primary rounded-l-box p-1.5'></span>
					<span className='bg-secondary rounded-l-box w-3/4 p-1.5'></span>
					<span className='bg-accent rounded-l-box w-1/2 p-1.5'></span>
					<p className='self-end text-sm'>Default</p>
				</div>
				<div
					className='clip-path-right absolute left-0 top-0 flex w-full flex-col gap-1 py-2 pr-2'
					data-theme='dark'
				>
					<span className='bg-primary card w-full p-1.5'></span>
					<span className='bg-secondary card w-full p-1.5'></span>
					<span className='bg-accent card w-full p-1.5'></span>
					<p className='self-end text-sm'>Default</p>
				</div>
			</div>
			{themes.map((theme, index) => {
				return <ThemeButton key={index} themeName={theme} />
			})}
		</>
	)
}
