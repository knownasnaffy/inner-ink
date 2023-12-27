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
					<svg
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
						className='h-6 w-6 shrink-0 fill-current'
					>
						<path d='M6.78 2.72a.75.75 0 0 1 0 1.06L4.56 6h8.69a7.75 7.75 0 1 1-7.75 7.75.75.75 0 0 1 1.5 0 6.25 6.25 0 1 0 6.25-6.25H4.56l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 0Z' />
					</svg>
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
