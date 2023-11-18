import clsx from 'clsx'

export const ThemeButton = ({ themeName }: { themeName: string }) => {
	// const currentTheme = localStorage.getItem('theme') || '';
	const themeChange = () => {
		document.documentElement.setAttribute('data-theme', themeName)
		localStorage.setItem('theme', themeName)
	}
	return (
		<div
			data-set-theme={themeName}
			data-act-class='active'
			data-theme={themeName}
			className={clsx('bg-base-100 p-2 card gap-1')}
			onClick={themeChange}
		>
			<span className='bg-primary card p-1.5 w-full'></span>
			<span className='bg-secondary card p-1.5 w-3/4'></span>
			<span className='bg-accent card p-1.5 w-1/2'></span>
			<p className='text-sm capitalize'>{themeName}</p>
		</div>
	)
}
