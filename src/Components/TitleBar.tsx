import { appWindow } from '@tauri-apps/api/window'
import { useState } from 'react'

const TitleBar = () => {
	return (
		<div
			data-tauri-drag-region
			className='h-fit px-2 py-1.5 select-none bg-base-300 flex flex-row justify-between items-center'
		>
			<span></span>
			<span className='text-lg text-base-content/60 flex items-center'>
				Inner Ink
				<span className='badge badge-secondary ml-2'>Preview</span>
			</span>
			<ShellButtons />
		</div>
	)
}

export default TitleBar

const ShellButtons = () => {
	const [maximized, setMaximized] = useState(!!appWindow.isMaximized())
	function close() {
		appWindow.close
	}
	function minimize() {
		appWindow.minimize()
	}
	function toggleMaximize() {
		appWindow.toggleMaximize()
		setMaximized(!maximized)
	}
	appWindow.onResized(() => {
		setMaximized(!!appWindow.isMaximized())
	})
	return (
		<div className='flex flex-row w-fit'>
			<button
				className='btn btn-circle btn-sm btn-warning text-warning hover:text-warning-content scale-75'
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
				className='btn btn-circle btn-sm btn-info text-info hover:text-info-content scale-75'
				onClick={toggleMaximize}
			>
				{!maximized ? (
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
				className='btn btn-circle btn-sm btn-error text-error hover:text-error-content scale-75'
				onClick={close}
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
