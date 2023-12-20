import BooleanSettings from './BooleanSetting'

const DatePicker = () => {
	return (
		<>
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
		</>
	)
}

export default DatePicker
