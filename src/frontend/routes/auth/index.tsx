import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
	return (
		<div className='h-[calc(100vh-32px)] flex flex-col justify-center bg-base-200'>
			<div className='relative py-3 sm:max-w-xl sm:mx-auto'>
				<div className='absolute inset-0 transform -skew-y-6 shadow-lg bg-gradient-to-r from-primary to-secondary sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl'></div>
				<div className='relative shadow-lg sm:rounded-3xl'>
					<Outlet />
				</div>
			</div>
		</div>
	)
}

export default AuthLayout
