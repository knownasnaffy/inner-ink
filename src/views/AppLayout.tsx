import Sidebar from '../components/Sidebar'

const AppLayout = ({children}: {children: React.ReactNode}) => {
	return (
		<>
			<div className='h-screen w-full flex flex-row'>
				<Sidebar />
				<div className='grow flex flex-col py-6 px-12 gap-6'>
					{children}
				</div>
			</div>
		</>
	)
}

export default AppLayout
