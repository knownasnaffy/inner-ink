import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/Sidebar'

const AppLayout = () => {
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
