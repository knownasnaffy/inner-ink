import Sidebar from '../components/Sidebar'

const AppLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='h-[calc(100vh-32px)] flex bg-base-300'>
			<Sidebar />
			<div className='grow bg-base-100 rounded-tl-box'>{children}</div>
		</div>
	)
}

export default AppLayout
