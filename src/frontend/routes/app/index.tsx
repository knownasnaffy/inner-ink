import { Navigate, Outlet, useLocation } from 'react-router-dom'
import Sidebar from '../../components/Sidebar'
import { useAuth } from '../../hooks/authStore'
import { exists, BaseDirectory } from '@tauri-apps/api/fs'

// Check if the `$APPDATA/avatar.png` file exists
const newUser = await exists('database.db', { dir: BaseDirectory.AppData })

const AppLayout = () => {
	const auth = useAuth()
	const location = useLocation()
	// const user = localStorage.getItem('user')
	if (!auth.user) {
		// Redirect them to the /login page, but save the current location they were
		// trying to go to when they were redirected. This allows us to send them
		// along to that page after they login, which is a nicer user experience
		// than dropping them off on the home page.
		// console.log(filepath)
		return newUser ? (
			<Navigate to='/auth/login' state={{ from: location }} replace />
		) : (
			<Navigate to='/auth/register' replace />
		)
	}
	return (
		<div className='h-[calc(100vh-32px)] flex bg-base-300'>
			<Sidebar />
			<div className='grow bg-base-100 rounded-tl-box'>
				<Outlet />
			</div>
		</div>
	)
}

export default AppLayout
