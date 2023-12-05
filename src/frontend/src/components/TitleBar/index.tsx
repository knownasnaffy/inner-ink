import { ShellButtons } from './ShellButtons'

const TitleBar = () => {
	return (
		<div
			data-tauri-drag-region
			className='h-8 pl-4 pr-2 bg-base-300 flex flex-row justify-between items-center'
		>
			<span className='flex items-center text-base-content/60 pointer-events-none'>
				Inner Ink
				<span className='ml-2 badge badge-sm badge-secondary'>
					Preview
				</span>
			</span>
			<ShellButtons />
		</div>
	)
}

export default TitleBar
