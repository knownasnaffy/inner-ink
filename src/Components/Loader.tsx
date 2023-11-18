import './loader.css'

const Loader = () => {
	return (
		<div
			className='loader-wrapper'
			style={{
				height: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<span className='loader'></span>
		</div>
	)
}

export default Loader
