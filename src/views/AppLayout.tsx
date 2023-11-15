import Sidebar from '../components/Sidebar'

const AppLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='grow flex flex-row bg-base-300'>
			<Sidebar />
			<div className='grow flex flex-col py-6 px-12 gap-6 bg-base-100 rounded-tl-md'>
				{children}
			</div>
		</div>
	)
}

export default AppLayout
