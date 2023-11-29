import { Suspense, lazy } from 'react'
import TitleBar from './components/TitleBar'
import Loader from './components/Loader'

const CurrentView = lazy(() => import('./components/CurrentView'))

const App = () => {
	return (
		<>
			<Suspense fallback={<Loader />}>
				<div className='h-screen'>
					<TitleBar />
					<CurrentView />
				</div>
			</Suspense>
		</>
	)
}

export default App
