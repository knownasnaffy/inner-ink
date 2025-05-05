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
		<div className='flex w-fit scale-75 flex-row'>
			<button
				className='btn btn-circle btn-sm btn-warning text-warning hover:text-warning-content focus:focus-visible:text-warning-content scale-75 cursor-default'
				onClick={minimize}
			>
				<svg
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'
					className='h-5 w-5 fill-current'
				>
					<path d='M3.755 12.5h16.492a.75.75 0 0 0 0-1.5H3.755a.75.75 0 0 0 0 1.5Z' />
				</svg>
			</button>
			<button
				className='btn btn-circle btn-sm btn-success text-success hover:text-success-content focus:focus-visible:text-success-content scale-75 cursor-default'
				onClick={toggleMaximize}
			>
				{isWindowMaximized ? (
					<svg
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
						className='h-5 w-5 fill-current'
					>
						<path d='M7.518 5H6.009a3.25 3.25 0 0 1 3.24-3h8.001A4.75 4.75 0 0 1 22 6.75v8a3.25 3.25 0 0 1-3 3.24v-1.508a1.75 1.75 0 0 0 1.5-1.732v-8a3.25 3.25 0 0 0-3.25-3.25h-8A1.75 1.75 0 0 0 7.518 5ZM5.25 6A3.25 3.25 0 0 0 2 9.25v9.5A3.25 3.25 0 0 0 5.25 22h9.5A3.25 3.25 0 0 0 18 18.75v-9.5A3.25 3.25 0 0 0 14.75 6h-9.5ZM3.5 9.25c0-.966.784-1.75 1.75-1.75h9.5c.967 0 1.75.784 1.75 1.75v9.5a1.75 1.75 0 0 1-1.75 1.75h-9.5a1.75 1.75 0 0 1-1.75-1.75v-9.5Z' />
					</svg>
				) : (
					<svg
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
						className='h-5 w-5 fill-current'
					>
						<path d='M5.75 3h12.5A2.75 2.75 0 0 1 21 5.75v12.5A2.75 2.75 0 0 1 18.25 21H5.75A2.75 2.75 0 0 1 3 18.25V5.75A2.75 2.75 0 0 1 5.75 3Zm0 1.5c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25h12.5c.69 0 1.25-.56 1.25-1.25V5.75c0-.69-.56-1.25-1.25-1.25H5.75Z' />
					</svg>
				)}
			</button>
			<button
				className='btn btn-circle btn-sm btn-error text-error hover:text-error-content focus:focus-visible:text-error-content scale-75 cursor-default'
				onClick={closeWindow}
			>
				<svg
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'
					className='h-5 w-5 fill-current'
				>
					<path d='m4.397 4.554.073-.084a.75.75 0 0 1 .976-.073l.084.073L12 10.939l6.47-6.47a.75.75 0 1 1 1.06 1.061L13.061 12l6.47 6.47a.75.75 0 0 1 .072.976l-.073.084a.75.75 0 0 1-.976.073l-.084-.073L12 13.061l-6.47 6.47a.75.75 0 0 1-1.06-1.061L10.939 12l-6.47-6.47a.75.75 0 0 1-.072-.976l.073-.084-.073.084Z' />
				</svg>
			</button>
		</div>
	)
}
