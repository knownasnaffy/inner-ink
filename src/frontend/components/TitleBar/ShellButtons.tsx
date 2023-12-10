import { appWindow } from '@tauri-apps/api/window'
import { useCallback, useEffect, useState } from 'react'

const closeWindow = async () => {
	await appWindow.close()
}
const minimize = async () => {
	await appWindow.minimize()
}

// TODO: Add a setting to change shell buttons to default OS buttons (Probably only on windows)
export const ShellButtons = () => {
	const [isWindowMaximized, setIsWindowMaximized] = useState(false)

	const updateIsWindowMaximized = useCallback(async () => {
		const resolvedPromise = await appWindow.isMaximized()
		setIsWindowMaximized(resolvedPromise)
	}, [])

	useEffect(() => {
		updateIsWindowMaximized()

		let unlisten: () => void

		const listen = async () => {
			unlisten = await appWindow.onResized(() => {
				updateIsWindowMaximized()
			})
		}

		listen()

		return () => unlisten && unlisten()
	}, [updateIsWindowMaximized])
	const toggleMaximize = async () => {
		await appWindow.toggleMaximize()
		setIsWindowMaximized(!isWindowMaximized)
	}
	return (
		<div className='flex flex-row scale-90 w-fit'>
			<button
				className='scale-75 cursor-default btn btn-circle btn-sm btn-success text-success hover:text-success-content focus:focus-visible:text-success-content'
				onClick={toggleMaximize}
			>
				{isWindowMaximized ? (
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
							d='M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6'
						/>
					</svg>
				) : (
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
							d='M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z'
						/>
					</svg>
				)}
			</button>
			<button
				className='scale-75 cursor-default btn btn-circle btn-sm btn-warning text-warning hover:text-warning-content focus:focus-visible:text-warning-content'
				onClick={minimize}
			>
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
						d='M19.5 12h-15'
					/>
				</svg>
			</button>
			<button
				className='scale-75 cursor-default btn btn-circle btn-sm btn-error text-error hover:text-error-content focus:focus-visible:text-error-content'
				onClick={closeWindow}
			>
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
						d='M6 18L18 6M6 6l12 12'
					/>
				</svg>
			</button>
		</div>
	)
}
