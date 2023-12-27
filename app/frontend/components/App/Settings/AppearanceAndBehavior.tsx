import BooleanSettings from './BooleanSetting'
import { ThemeList } from './ThemeList'

const AppearanceAndBehavior = () => {
	return (
		<>
			<h3 className='mb-2 mt-4 text-lg font-semibold'>
				Appearance & Behaviour
			</h3>
			<div className='join join-vertical w-full'>
				{/* ### Application theme */}
				<div className='rounded-btn collapse-arrow bg-base-200 join-item collapse'>
					<input type='checkbox' />
					<div className='collapse-title text-md font-semibold'>
						<div className='flex flex-row items-center gap-2'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='h-6 w-6 shrink-0'
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
							className='h-6 w-6 shrink-0'
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
				/>
				{/* ### Language */}
				<div className='border-base-100 rounded-btn collapse-title bg-base-200 text-md join-item flex flex-row items-center justify-between gap-4 border-t-2 pr-4'>
					<div className='flex flex-row items-center gap-2 font-semibold'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='h-6 w-6 shrink-0'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802'
							/>
						</svg>
						<div>
							Language
							<p className='text-base-content/50 text-sm'>
								Select a display language fpr this app. Overides
								default Windows interface language
							</p>
						</div>
					</div>
					<select
						className='select select-bordered select-sm w-full max-w-fit'
						defaultValue='System Default'
					>
						<option>System Default</option>
						<option>English</option>
						<option>French</option>
					</select>
				</div>
			</div>
		</>
	)
}

export default AppearanceAndBehavior
