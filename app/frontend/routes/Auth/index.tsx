import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
	return (
		<div className='h-[calc(100vh-32px)] flex flex-col justify-center'>
			<div className='relative py-3 max-w-sm self-center w-full'>
				<div className='absolute inset-0 transform shadow-lg bg-gradient-to-r from-primary to-secondary skew-y-0 -rotate-6 rounded-box'></div>
				<div className='relative shadow-lg rounded-box'>
					<Outlet />
				</div>
			</div>
		</div>
	)
}

export default AuthLayout
