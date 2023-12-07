import BooleanSettings from '../components/Settings/BooleanSetting'
import { ThemeList } from '../components/ThemeList'

const SettingsPage = () => {
	return (
		<div className='h-full py-4 px-8 md:px-10 lg:px-14 overflow-auto gutter-stable animate-in slide-in-from-right'>
			<h2 className='text-2xl font-semibold table rounded-none'>
				Settings
			</h2>
			{/* ## Version */}
			<h3 className='mt-4 mb-2 text-lg font-semibold'>Version</h3>
			{/* ### Update check */}
			<div className='flex flex-row items-center justify-between pr-4 rounded-t-btn collapse-title bg-base-200 text-md'>
				<div className='flex flex-row items-center gap-2 font-semibold'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-6 h-6 shrink-0'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99'
						/>
					</svg>
					<div>
						v0.1.0
						<p className='text-sm text-base-content/50'>
							Last checked: 18-11-2023
						</p>
					</div>
				</div>
				<button className='capitalize btn btn-primary btn-sm'>
					Check for updates
				</button>
			</div>
			{/* ### Download updates automatically */}
			<BooleanSettings
				title='Download updates automatically'
				description='Except on metered connections'
				position='bottom'
			/>
			{/* ## Appearance and behavior */}
			<h3 className='mt-4 mb-2 text-lg font-semibold'>
				Appearance & Behaviour
			</h3>
			{/* ### Application theme */}
			<div className='rounded-b-none rounded-t-btn collapse collapse-arrow bg-base-200'>
				<input type='checkbox' />
				<div className='font-semibold collapse-title text-md'>
					<div className='flex flex-row items-center gap-2'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-6 h-6 shrink-0'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z'
							/>
						</svg>
						Application Theme
					</div>
				</div>
				<div className='collapse-content'>
					<div className='grid w-full grid-cols-4 gap-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8'>
						<ThemeList />
					</div>
				</div>
			</div>
			{/* ### Run at startup */}
			<BooleanSettings
				icon={
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-6 h-6 shrink-0'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z'
						/>
					</svg>
				}
				title='Run at startup'
				description='Start when windows starts'
				position='middle'
			/>
			{/* ### Language */}
			<div className='flex flex-row items-center justify-between gap-4 pr-4 border-t-2 border-base-100 rounded-b-btn collapse-title bg-base-200 text-md'>
				<div className='flex flex-row items-center gap-2 font-semibold'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-6 h-6 shrink-0'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802'
						/>
					</svg>
					<div>
						Language
						<p className='text-sm text-base-content/50'>
							Select a display language fpr this app. Overides
							default Windows interface language
						</p>
					</div>
				</div>
				<select
					className='w-full select select-bordered select-sm max-w-fit'
					defaultValue='System Default'
				>
					<option>System Default</option>
					<option>English</option>
					<option>French</option>
				</select>
			</div>
			{/* ## Date picker */}
			<h3 className='mt-4 mb-2 text-lg font-semibold'>Date Picker</h3>
			{/* ### Disable Entry in Future */}
			{/* TODO: Change disableFutureEntry to enableFutureEntry everywhere */}
			<BooleanSettings
				title='Disable entry in future'
				description='Permission to write for future days'
				position='top'
			/>
			{/* ### First day of the week */}
			<div className='flex flex-row items-center justify-between gap-4 pr-4 border-t-2 border-base-100 rounded-b-btn collapse-title bg-base-200 text-md'>
				<div className='flex flex-row items-center gap-2 font-semibold'>
					<div>
						First day of the week
						{/* <p className='text-sm text-base-content/50'>
							Select a display language fpr this app. Overides
							default Windows interface language
						</p> */}
					</div>
				</div>
				<select
					className='w-full select select-bordered select-sm max-w-fit'
					defaultValue='System Default'
				>
					<option>System Default</option>
					<option>English</option>
					<option>French</option>
				</select>
			</div>
		</div>
	)
}

export default SettingsPage
