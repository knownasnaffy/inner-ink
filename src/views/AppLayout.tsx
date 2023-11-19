import Sidebar from '../components/Sidebar'

const AppLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='h-[calc(100vh-32px)] flex bg-base-300'>
			<Sidebar />
			<div className='grow py-5 px-8 md:px-10 lg:px-12 bg-base-100 rounded-tl-[var(--rounded-box)] overflow-auto'>
				{children}
			</div>
		</div>
	)
}

export default AppLayout
