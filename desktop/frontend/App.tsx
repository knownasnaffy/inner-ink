import TitleBar from './components/Global/TitleBar'

function App() {
	return (
		<>
			<div className='flex flex-col w-full h-screen'>
				<TitleBar />
				<div className='grow p-4'>This works! {'>_<'}</div>
			</div>
		</>
	)
}

export default App
