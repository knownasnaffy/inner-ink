import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
	return (
		<div className='flex h-[calc(100vh-32px)] flex-col justify-center'>
			<div className='relative w-full max-w-sm self-center py-3'>
				<div className='from-primary to-secondary rounded-box absolute inset-0 -rotate-6 skew-y-0 transform bg-gradient-to-r shadow-lg'></div>
				<div className='rounded-box relative shadow-lg'>
					<Outlet />
				</div>
			</div>
		</div>
	)
}

export default AuthLayout
