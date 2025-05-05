export default function Features() {
	return (
		<div className='bg-base-300 max-lg:pb-30 max-lg:px-6 max-lg:pt-40 lg:py-40'>
			<div className='container mx-auto flex max-w-5xl flex-col items-center gap-10'>
				<div className='prose prose-lg flex flex-col items-center text-center'>
					<h2 className='mb-2'>Your Digital Sanctury</h2>
					<p>
						Indulge in the art of journaling reimagined — where your
						thoughts, dreams, and experiences seamlessly converge.
					</p>
				</div>
				<div className='grid gap-10 lg:grid-cols-3 lg:grid-rows-2 lg:gap-6'>
					<FeatureItemWrapper>
						<div className='mb-2 flex flex-col items-center gap-3 lg:flex-row'>
							{bookIcon}
							<h3 className='mb-0 mt-0'>Intuitive Interface</h3>
						</div>
						<p className='mt-0 max-lg:pl-1 max-lg:text-center'>
							Simple and user-friendly interface for easy
							navigation and journaling.
						</p>
					</FeatureItemWrapper>
					<FeatureItemWrapper>
						<div className='mb-2 flex flex-col items-center gap-3 lg:flex-row'>
							{searchIcon}
							<h3 className='mb-0 mt-0'>Organization & Search</h3>
						</div>
						<p className='mt-0 max-lg:pl-1 max-lg:text-center'>
							Effortlessly organize entries by date. Search
							feature for quick access.
						</p>
					</FeatureItemWrapper>
					<div className='prose lg:bg-base-100 md:rounded-box border-b-base-200 row-span-2 flex h-full flex-col gap-6 md:border-b-4 md:shadow-lg lg:px-6 lg:py-5'>
						<div
							className='rounded-box hidden grow bg-cover lg:block'
							style={{
								backgroundImage: `url('${import.meta.env.BASE_URL}/themes.png')`,
							}}
						></div>
						<div className='h-fit'>
							<div className='mb-2 flex flex-col items-center gap-3 lg:flex-row'>
								{moonIcon}
								<h3 className='mb-0 mt-0'>Customizable UI</h3>
							</div>
							<p className='mb-0 mt-0 max-lg:pl-1 max-lg:text-center'>
								Change themes and more visible features to match
								your personal style.
							</p>
						</div>
					</div>
					<FeatureItemWrapper>
						<div className='mb-2 flex flex-col items-center gap-3 lg:flex-row'>
							{textIcon}
							<h3 className='mb-0 mt-0'>Rich-Text Entries</h3>
						</div>
						<p className='mt-0 max-lg:pl-1 max-lg:text-center'>
							Personalize your entries with rich-text formatting,
							bold, italics, and more.
						</p>
					</FeatureItemWrapper>
					<FeatureItemWrapper>
						<div className='mb-2 flex flex-col items-center gap-3 lg:flex-row'>
							{keyboardIcon}
							<h3 className='mb-0 mt-0'>Accessibility</h3>
						</div>
						<p className='mt-0 max-lg:pl-1 max-lg:text-center'>
							Keyboard-friendly interface designed with
							accessibility in mind for all users.
						</p>
					</FeatureItemWrapper>
				</div>
			</div>
		</div>
	)
}

function FeatureItemWrapper({ children }: { children: React.ReactNode }) {
	return (
		<div className='prose lg:bg-base-100 md:rounded-box border-b-base-200 md:border-b-4 md:shadow-lg lg:px-6 lg:py-5'>
			{children}
		</div>
	)
}

const featureItemSvgClassName = 'size-5 translate-y-px'

const bookIcon = (
	<span className='bg-base-100 max-lg:rounded-full max-lg:p-2.5'>
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
			className={featureItemSvgClassName}
		>
			<path d='M12 7v14' />
			<path d='M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z' />
		</svg>
	</span>
)

const keyboardIcon = (
	<span className='bg-base-100 max-lg:rounded-full max-lg:p-2.5'>
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
			className={featureItemSvgClassName}
		>
			<path d='M10 8h.01' />
			<path d='M12 12h.01' />
			<path d='M14 8h.01' />
			<path d='M16 12h.01' />
			<path d='M18 8h.01' />
			<path d='M6 8h.01' />
			<path d='M7 16h10' />
			<path d='M8 12h.01' />
			<rect width='20' height='16' x='2' y='4' rx='2' />
		</svg>
	</span>
)

const textIcon = (
	<span className='bg-base-100 max-lg:rounded-full max-lg:p-2.5'>
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
			className={featureItemSvgClassName}
		>
			<polyline points='4 7 4 4 20 4 20 7' />
			<line x1='9' x2='15' y1='20' y2='20' />
			<line x1='12' x2='12' y1='4' y2='20' />
		</svg>
	</span>
)

const moonIcon = (
	<span className='bg-base-100 max-lg:rounded-full max-lg:p-2.5'>
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
			className={featureItemSvgClassName}
		>
			<path d='M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z' />
		</svg>
	</span>
)

const searchIcon = (
	<span className='bg-base-100 max-lg:rounded-full max-lg:p-2.5'>
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
			className={featureItemSvgClassName}
		>
			<path d='m21 21-4.34-4.34' />
			<circle cx='11' cy='11' r='8' />
		</svg>
	</span>
)
