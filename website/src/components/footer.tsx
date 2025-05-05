export default function Footer() {
	return (
		<div className='bg-base-300 py-10'>
			<div className='container mx-auto flex max-w-5xl items-center justify-between'>
				<p className='text-base-content/70'>
					© 2025 Inner Ink. All rights reserved.
				</p>
				<div className='decoration-base-content/20 flex items-center gap-6 underline decoration-1 underline-offset-4'>
					<a
						href='https://github.com/knownasnaffy/inner-ink/blob/main/LICENSE'
						className='text-base-content/70 hover:text-base-content'
					>
						License
					</a>
					<a
						href='https://github.com/knownasnaffy/inner-ink/blob/main/CONTRIBUTING.md'
						className='text-base-content/70 hover:text-base-content'
					>
						Contribute
					</a>
					<a
						href='https://github.com/knownasnaffy/inner-ink/issues'
						className='text-base-content/70 hover:text-base-content'
					>
						Support
					</a>
				</div>
			</div>
		</div>
	)
}
