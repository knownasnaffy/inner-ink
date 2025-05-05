export default function CTA() {
	return (
		<div className=''>
			<div className='py-30 container mx-auto flex max-w-5xl flex-col items-center justify-center gap-2 text-center max-lg:px-4 lg:py-40'>
				<div className='prose prose-lg'>
					<h2 className='mb-2'>Begin Your Journey Today</h2>
					<p className='px-2'>
						Download Inner Ink and transform your thoughts into a
						beautifully
						<br className='hidden lg:block' />
						crafted digital diary.
					</p>
				</div>
				<div className='mt-2 flex w-full flex-col items-center justify-center gap-4 max-md:max-w-xs md:flex-row'>
					<a
						href='https://github.com/knownasnaffy/inner-ink/releases/latest'
						className='btn btn-primary max-md:btn-block'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
							className='size-5'
						>
							<path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' />
							<polyline points='7 10 12 15 17 10' />
							<line x1='12' x2='12' y1='15' y2='3' />
						</svg>
						Download now
					</a>
					<a
						href='https://github.com/knownasnaffy/inner-ink'
						className='btn btn-neutral max-md:btn-block md:scale-105'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
							className='size-5'
						>
							<path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4' />
							<path d='M9 18c-4.51 2-5-2-7-2' />
						</svg>
						View on Github
					</a>
				</div>
			</div>
		</div>
	)
}
