import swStore from '../hooks/swStore'
import { updateSW } from '../utils/pwa'

function ReloadPrompt() {
	const needsRefresh = swStore((state) => state.needsRefresh)
	const offlineReady = swStore((state) => state.offlineReady)
	const setNeedsRefresh = swStore((state) => state.setOfflineReady)
	const setOfflineReady = swStore((state) => state.setOfflineReady)

	const close = () => {
		setOfflineReady(false)
		setNeedsRefresh(false)
	}

	const updateServiceWorker = () => {
		updateSW()
		close()
	}

	return (
		<>
			{(offlineReady || needsRefresh) && (
				<div className='alert alert-info w-fit fixed z-50 bottom-2 right-2'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						className='stroke-current shrink-0 w-6 h-6'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
						></path>
					</svg>
					{offlineReady ? (
						<span>App ready to work offline</span>
					) : (
						<span>
							New content available, click on reload button to
							update.
						</span>
					)}
					<div>
						{needsRefresh && (
							<button
								className='btn btn-sm'
								onClick={updateServiceWorker}
							>
								Reload
							</button>
						)}
						<button className='btn btn-sm ml-2' onClick={close}>
							Close
						</button>
					</div>
				</div>
			)}
		</>
	)
}

export default ReloadPrompt
