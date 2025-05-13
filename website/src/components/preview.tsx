import { useEffect, useState } from 'react'

export default function Preview() {
	const [height, setHeight] = useState(30) // in vh (50vh = h-1/2)

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY
			// Clamp height between 50 and 100 (you can adjust the multiplier)
			const newHeight = Math.min(100, 30 + scrollY * 0.05)
			setHeight(newHeight)
			console.log(newHeight)
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])
	return (
		<div className='relative max-lg:px-4'>
			<div className='rounded-box border-base-200 bg-base-200 shadow-neutral/50 container mx-auto min-h-12 max-w-5xl shadow-2xl md:border-8'>
				<img
					src={`/preview-dark.png`}
					alt='Inner Ink Preview'
					className='rounded-box'
				/>
				<div
					className='bg-base-300 absolute inset-x-0 -bottom-12 -z-10 h-1/2'
					style={{ height: `${height}%` }}
				></div>
			</div>
		</div>
	)
}
