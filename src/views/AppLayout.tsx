import Sidebar from '../components/Sidebar'

const AppLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='grow flex flex-row bg-base-300'>
			<Sidebar />
			<div className='grow py-5 px-8 md:px-10 lg:px-12 bg-base-100 rounded-tl-md'>
				{children}
			</div>
		</div>
	)
}

export default AppLayout
