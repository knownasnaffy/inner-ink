import { Navigate, Route, Routes } from 'react-router-dom'
import AuthProvider from './AuthProvider'
import AppLayout from './routes/app'
import HomePage from './routes/app/homePage'
import SearchPage from './routes/app/searchPage'
import TitleBar from './components/TitleBar'
import SettingsPage from './routes/app/settingsPage'
import AuthLayout from './routes/auth'
import LoginPage from './routes/auth/loginPage'

const Router = () => {
	return (
		<>
			<AuthProvider>
				<TitleBar />
				<Routes>
					<Route path='/' element={<Navigate to='/app' />}></Route>
					<Route path='/auth' element={<AuthLayout />}>
						<Route path='login' element={<LoginPage />}></Route>
					</Route>

					<Route path='/app' element={<AppLayout />}>
						<Route index element={<HomePage />} />
						<Route path='search' element={<SearchPage />} />
						<Route path='settings' element={<SettingsPage />} />
					</Route>
				</Routes>
			</AuthProvider>
		</>
	)
}

export default Router
