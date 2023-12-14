import { useNavigate } from 'react-router-dom'
import sidebarItems, { SidebarItem } from '../../config/sidebar'
import NavButton from './NavButton'
import clsx from 'clsx'
import { useAuth } from '../../hooks/authStore'

const getNavButtons = () => {
	const topNavButtons: SidebarItem[] = []
	const bottomNavButtons: SidebarItem[] = []

	for (const sidebarButton of sidebarItems) {
		const position = sidebarButton.position
		if (position === 'top') {
			topNavButtons.push(sidebarButton)
		} else bottomNavButtons.push(sidebarButton)
	}
	return { topNavButtons, bottomNavButtons }
}

const Sidebar = () => {
	const auth = useAuth()
	const navigate = useNavigate()
	const { topNavButtons, bottomNavButtons } = getNavButtons()
	return (
		<div className='w-fit grow-0 bg-base-300 flex flex-col justify-between px-1.5 py-2'>
			{/* Upper Buttons */}
			<div className='flex flex-col gap-2'>
				{topNavButtons.map(
					({ path, iconOutline, iconSolid }, index) => {
						return (
							<NavButton
								// name={name}
								key={index}
								targetPage={path}
								iconOutline={iconOutline}
								iconSolid={iconSolid}
							/>
						)
					},
				)}
			</div>
			{/* Lower Buttons */}
			<div className='flex flex-col gap-2'>
				<button
					onClick={() => {
						auth.signout(() => navigate('/'))
					}}
					className={clsx(
						'btn btn-square transition-colors duration-300',
						'btn-ghost',
						'[data-theme="valentine"]:rounded-none',
					)}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-6 h-6'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9'
						/>
					</svg>
				</button>
				{bottomNavButtons.map(
					({ path, iconOutline, iconSolid }, index) => {
						return (
							<NavButton
								// name={name}
								key={index}
								targetPage={path}
								iconOutline={iconOutline}
								iconSolid={iconSolid}
							/>
						)
					},
				)}
			</div>
		</div>
	)
}

export default Sidebar
