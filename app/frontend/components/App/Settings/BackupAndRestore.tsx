const BackupAndRestore = () => {
	return (
		<>
			<h3 className='mt-4 mb-2 text-lg font-semibold'>
				Backup and Reset
			</h3>
			{/* Reset */}
			<div className='rounded-btn collapse collapse-arrow bg-base-200'>
				<input type='checkbox' />
				<div className='font-semibold collapse-title text-md'>
					<div className='flex flex-row items-center gap-2'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-6 h-6'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99'
							/>
						</svg>
						Reset
					</div>
				</div>
				<div className='collapse-content'>
					<div className='flex flex-row items-center justify-between pr-4 collapse-title bg-base-200 text-md border-t-2 border-base-100'>
						<div className='flex flex-row items-center gap-2 font-medium text-sm pl-4'>
							<div>
								Reset Settings
								<p className='text-sm text-base-content/50'>
									Revert settings to default
								</p>
							</div>
						</div>
						<button className='capitalize btn bg-base-100 focus:outline-base-100 btn-sm'>
							Reset
						</button>
					</div>
					<div className='flex flex-row items-center justify-between pr-4 collapse-title bg-base-200 text-md border-t-2 border-base-100'>
						<div className='flex flex-row items-center gap-2 font-medium text-sm pl-4'>
							<div>
								Reset Entries
								<p className='text-sm text-base-content/50'>
									Clear all saved entries
								</p>
							</div>
						</div>
						<button className='capitalize btn bg-base-100 focus:outline-base-100 btn-sm'>
							Reset
						</button>
					</div>
					<div className='flex flex-row items-center justify-between pr-4 collapse-title bg-base-200 text-md border-t-2 border-base-100 pb-0'>
						<div className='flex flex-row items-center gap-2 font-medium text-sm pl-4'>
							<div>
								Reset App Data
								<p className='text-sm text-base-content/50'>
									Revert to first install state
								</p>
							</div>
						</div>
						<button className='capitalize btn btn-error btn-sm'>
							Reset
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default BackupAndRestore
