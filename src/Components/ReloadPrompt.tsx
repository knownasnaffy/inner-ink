import { useRegisterSW } from 'virtual:pwa-register/react'

function ReloadPrompt() {
	// const intervalMS = 2 * 60 * 1000

	const {
		offlineReady: [offlineReady, setOfflineReady],
		needRefresh: [needRefresh, setNeedRefresh],
		updateServiceWorker,
	} = useRegisterSW({
		onRegistered(r) {
			// eslint-disable-next-line prefer-template
			console.info('SW Registered: ' + r)
			// r &&
			// 	setInterval(() => {
			// 		r.update()
			// 		console.log('Periodic Check after 2 minutes')
			// 	}, intervalMS)
		},
		onRegisterError(error) {
			console.error('SW registration error', error)
		},
	})

	const close = () => {
		setOfflineReady(false)
		setNeedRefresh(false)
	}

	offlineReady && console.log('App is ready to run offline')
	needRefresh && console.log('App needs refresh')

	return (
		<>
			{(offlineReady || needRefresh) && (
				<div className='alert alert-info w-fit fixed z-50 bottom-2 right-2'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						className='stroke-current shrink-0 w-6 h-6'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'></path>
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
						{needRefresh && (
							<button
								className='btn btn-sm'
								onClick={() => updateServiceWorker(true)}>
								Reload
							</button>
						)}
						<button
							className='btn btn-sm ml-2'
							onClick={() => close()}>
							Close
						</button>
					</div>
				</div>
			)}
		</>
	)
}

export default ReloadPrompt
