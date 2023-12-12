import { Outlet } from 'react-router-dom'
import TitleBar from '../components/TitleBar'

const Root = () => {
	return (
		<>
			<TitleBar />
			<Outlet />
		</>
	)
}

export default Root
