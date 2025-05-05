export default function Preview() {
	return (
		<div className='relative pb-20'>
			<div className='rounded-box border-base-200 bg-base-200 container mx-auto min-h-12 max-w-5xl border-8 shadow-2xl shadow-black'>
				<img
					src={`${import.meta.env.BASE_URL}/preview-dark.png`}
					alt='Inner Ink Preview'
					className='rounded-box'
				/>
				<div className='bg-base-300 absolute inset-x-0 -bottom-12 -z-10 h-1/2'></div>
			</div>
		</div>
	)
}
