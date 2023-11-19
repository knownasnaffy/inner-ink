const TestPage = () => {
	return (
		<>
			<div className='relative'>
				<div
					className='absolute top-0 left-0 flex flex-col gap-1 rounded-box py-2 pl-2 clip-path-left'
					data-theme='dark'
				>
					<span className='bg-primary rounded-l-box p-1.5'></span>
					<span className='bg-secondary rounded-l-box p-1.5 w-3/4'></span>
					<span className='bg-accent rounded-l-box p-1.5 w-1/2'></span>
					<p className='text-sm'>System Default</p>
				</div>
				<div
					className='absolute top-0 left-0 flex flex-col gap-1 rounded-box py-2 pr-2 clip-path-right'
					data-theme='light'
				>
					<span className='bg-primary card p-1.5 w-full'></span>
					<span className='bg-secondary card p-1.5 w-full'></span>
					<span className='bg-accent card p-1.5 w-full'></span>
					<p className='text-sm'>System Default</p>
				</div>
			</div>
		</>
	)
}

export default TestPage
