import { clearEntries } from '../../../utils/database'

const BackupAndRestore = () => {
	return (
		<>
			<h3 className='mt-4 mb-2 text-lg font-semibold'>
				Backup and Reset
			</h3>
			{/* Reset */}
			<div className='flex flex-row items-center justify-between rounded-btn pr-4 collapse-title bg-base-200 text-md border-t-2 border-base-100'>
				<div className='flex flex-row items-center font-semibold gap-2'>
					<div>
						Reset
						<p className='text-sm text-base-content/50'>
							Revert to first install
						</p>
					</div>
				</div>
				<div className='flex flex-row gap-2'>
					<button
						className='capitalize btn btn-error btn-sm'
						onClick={clearEntries}
					>
						Reset Entries
					</button>
					{/* <button className='capitalize btn btn-error btn-sm'>
						Reset App Data
					</button> */}
				</div>
			</div>
		</>
	)
}

export default BackupAndRestore
