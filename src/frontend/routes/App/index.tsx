import { Navigate, Outlet, useLocation } from 'react-router-dom'
import Sidebar from '../../components/App/Sidebar'
import { useAuth } from '../../hooks/authStore'
import { getUser } from '../../utils/database'
import { useEffect, useRef } from 'react'

const AppLayout = () => {
	const newUser = useRef<boolean>()
	useEffect(() => {
		;async () => {
			newUser.current = (await getUser()) ? true : false
		}
	})
	const auth = useAuth()
	const location = useLocation()
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
