import BooleanSettings from './BooleanSetting'

const Version = () => {
	return (
		<>
			<h3 className='mt-4 mb-2 text-lg font-semibold'>Version</h3>
			{/* ### Update check */}
			<div className='flex flex-row items-center justify-between pr-4 rounded-t-btn collapse-title bg-base-200 text-md'>
				<div className='flex flex-row items-center gap-2 font-semibold'>
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
		</>
	)
}

export default Version
