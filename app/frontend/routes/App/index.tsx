import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/App/Sidebar'

const AppLayout = () => {
	// const [newUser, setNewUser] = useState<boolean>()
	// const auth = useAuth()
	// const location = useLocation()

	// useEffect(() => {
	// 	;async () => {
	// 		setNewUser((await getUser()) ? true : false)
	// 	}
	// }, [auth.user])

	// if (!auth.user) {
	// 	// Redirect them to the /login page, but save the current location they were
	// 	// trying to go to when they were redirected. This allows us to send them
	// 	// along to that page after they login, which is a nicer user experience
	// 	// than dropping them off on the home page.
	// 	// console.log(filepath)
	// 	return newUser ? (
	// 		<Navigate to='/auth/login' state={{ from: location }} replace />
	// 	) : (
	// 		<Navigate to='/auth/register' replace />
	// 	)
	// }

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
