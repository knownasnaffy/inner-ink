import { ShellButtons } from './ShellButtons'

const TitleBar = () => {
	return (
		<div className='h-fit py-1 bg-base-300'>
			<div
				data-tauri-drag-region
				className='h-6 ml-1 pl-3 mr-1 pr-1 flex flex-row justify-between items-center'
			>
				<span className='flex items-center text-base-content/60 pointer-events-none'>
					Inner Ink
					<span className='ml-2 badge badge-sm badge-secondary'>
						Preview
					</span>
				</span>
				<ShellButtons />
			</div>
		</div>
	)
}

export default TitleBar
