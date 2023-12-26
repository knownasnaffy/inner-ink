import { clearEntries } from '../../../utils/database'

const BackupAndRestore = () => {
	return (
		<>
			<h3 className='mb-2 mt-4 text-lg font-semibold'>
				Backup and Reset
			</h3>
			{/* Reset */}
			<div className='rounded-btn collapse-title bg-base-200 text-md border-base-100 flex flex-row items-center justify-between border-t-2 pr-4'>
				<div className='flex flex-row items-center gap-2 font-semibold'>
					<div>
						Reset
						<p className='text-base-content/50 text-sm'>
							Revert to first install
						</p>
					</div>
				</div>
				<div className='flex flex-row gap-2'>
					<button
						className='btn btn-error btn-sm capitalize'
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
