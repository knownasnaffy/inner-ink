import {
	Navigate,
	Outlet,
	RouterProvider,
	createBrowserRouter,
} from 'react-router-dom'
import AuthProvider from './components/Auth'
import AppLayout from './routes/App'
import HomePage from './routes/App/HomePage'
import SearchPage from './routes/App/SearchPage'
import TitleBar from './components/TitleBar'
import SettingsPage from './routes/App/SettingsPage'
import AuthLayout from './routes/Auth'
import LoginPage from './routes/Auth/LoginPage'
import RegisterPage from './routes/Auth/RegisterPage'
import { useEffect } from 'react'
import { getSettings } from './utils/settings'

const router = createBrowserRouter([
	{
		element: (
			<>
				<TitleBar />
				<Outlet />
			</>
		),
		children: [
			{
				path: '/',
				element: <Navigate to='/app' />,
			},
			{
				path: '/app',
				element: <AppLayout />,
				children: [
					{
						index: true,
						element: <HomePage />,
					},
					{
						path: 'search',
						element: <SearchPage />,
					},
					{
						path: 'settings',
						element: <SettingsPage />,
					},
				],
			},
			{
				path: '/auth',
				element: <AuthLayout />,
				children: [
					{
						path: 'login',
						element: <LoginPage />,
					},
					{
						path: 'register',
						element: <RegisterPage />,
					},
				],
			},
		],
	},
])

const RouterComponent = () => {
	useEffect(() => {
		// Get current theme from settings and apply it
		const theme = getSettings().theme
		document.documentElement.dataset.theme = theme
	})
	return (
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	)
}

export default RouterComponent
