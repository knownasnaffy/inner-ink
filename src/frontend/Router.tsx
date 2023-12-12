// import { Suspense, lazy } from 'react'
// import TitleBar from './components/TitleBar'
// import Loader from './components/Loader'
import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom'
import { jsxRoutes } from './config/routes'

// const CurrentView = lazy(() => import('./components/CurrentView'))

const router = createBrowserRouter(createRoutesFromElements(jsxRoutes))

const Router = () => {
	return <RouterProvider router={router} />
}

export default Router
