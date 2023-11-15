const TitleBar = () => {
	return (
		<div
			data-tauri-drag-region
			className='h-fit px-4 py-2 select-none bg-base-300'
		>
			<span className='text-lg'>Inner Ink</span>
		</div>
	)
}

export default TitleBar
