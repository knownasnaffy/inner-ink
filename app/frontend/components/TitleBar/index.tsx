import { ShellButtons } from './ShellButtons'

const TitleBar = () => {
	return (
		<div className='bg-base-300 h-fit py-1'>
			<div
				data-tauri-drag-region
				className='ml-1 mr-1 flex h-6 flex-row items-center justify-between pl-3'
			>
				<span className='text-base-content/60 pointer-events-none flex items-center'>
					Inner Ink
					<span className='badge badge-sm badge-secondary ml-2'>
						Preview
					</span>
				</span>
				<ShellButtons />
			</div>
		</div>
	)
}

export default TitleBar
