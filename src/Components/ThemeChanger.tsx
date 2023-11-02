import { themes } from './themes'

const ThemeChanger = () => {
	return (
		<div className='dropdown dropdown-top dropdown-end fixed z-50 bottom-8 right-6'>
			<label tabIndex={0} className='btn shadow-md'>
				Themes
			</label>
			{/* <div className='dropdown-content z-[1] p-2 mb-2 shadow-md w-52 h-64 rounded-box bg-base-200 overflow-y-scroll'> */}
				<ul tabIndex={0} className='dropdown-content z-[1] p-2 mb-2 shadow-md w-fit h-64 rounded-box bg-base-200 overflow-y-scroll menu flex-row gap-2'>
					{ThemeList}
				</ul>
			{/* </div> */}
		</div>
	)
}

export default ThemeChanger

const ThemeListItem = ({ themeName }: { themeName?: string }) => {
	return (
		<li>
			<button
				data-set-theme={themeName || ''}
				data-act-class='active'
				data-theme={themeName || ''}
				className='btn-wide capitalize'>
				{themeName || 'System'}
			</button>
		</li>
	)
}

const ThemeList = themes.map((theme, index) => {
	return <ThemeListItem key={index} themeName={theme} />
})
