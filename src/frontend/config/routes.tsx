import { Navigate, Route, RouteObject } from 'react-router-dom'
import Root from '../routes/root'
import ErrorPage from '../routes/error'
import HomePage from '../routes/app/homePage'
import SearchPage from '../routes/app/searchPage'
import SettingsPage from '../routes/app/settingsPage'
import AppLayout from '../routes/app'
import AuthLayout from '../routes/auth'
import LoginPage from '../routes/auth/loginPage'
import RegisterPage from '../routes/auth/registerPage'

const routes: RouteObject[] = [
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				Component() {
					const loggedIn = true
					if (loggedIn) return <Navigate to='/app' />
				},
			},
			{
				path: 'app',
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
				path: 'auth',
				children: [],
			},
		],
	},
]

export default routes

export const jsxRoutes = (
	<Route path='/' element={<Root />} errorElement={<ErrorPage />}>
		<Route errorElement={<ErrorPage />}>
			<Route index element={<Navigate to={'/app'} />} />
			<Route path='app' element={<AppLayout />}>
				<Route index element={<HomePage />} />
				<Route path='search' element={<SearchPage />} />
				<Route path='settings' element={<SettingsPage />} />
			</Route>
			<Route path='auth' element={<AuthLayout />}>
				<Route path='login' element={<LoginPage />} />
				<Route path='register' element={<RegisterPage />} />
			</Route>
		</Route>
	</Route>
)
