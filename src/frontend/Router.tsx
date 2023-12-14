import {
	Navigate,
	Outlet,
	RouterProvider,
	createBrowserRouter,
} from 'react-router-dom'
import AuthProvider from './AuthProvider'
import AppLayout from './routes/app'
import HomePage from './routes/app/homePage'
import SearchPage from './routes/app/searchPage'
import TitleBar from './components/TitleBar'
import SettingsPage from './routes/app/settingsPage'
import AuthLayout from './routes/auth'
import LoginPage from './routes/auth/loginPage'

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
				],
			},
		],
	},
])

const RouterComponent = () => {
	return (
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	)
}

export default RouterComponent
