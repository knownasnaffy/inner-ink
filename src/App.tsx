import { Suspense, lazy, useEffect, useState } from 'react'
import { initDB } from './utils/db'
import TitleBar from './components/TitleBar'
import Loader from './components/Loader'

const CurrentView = lazy(() => import('./components/CurrentView'))

const App = () => {
	const [isDBReady, setIsDBReady] = useState(false)

	const startInit = async () => {
		const status = await initDB()
		setIsDBReady(status)
	}

	useEffect(() => {
		startInit()
	})
	return (
		<>
			<Suspense fallback={<Loader />}>
				<div className='h-screen'>
					<TitleBar />
					<CurrentView />
				</div>
			</Suspense>
			{!isDBReady && <>DB Discontinued</>}
		</>
	)
}

export default App
