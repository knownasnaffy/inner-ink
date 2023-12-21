import clsx from 'clsx'
import { NavLink } from 'react-router-dom'

interface NavButtonProperties {
	targetPage: string
	iconOutline: React.ReactNode
	iconSolid: React.ReactNode
}

const NavButton = ({
	targetPage,
	iconOutline,
	iconSolid,
}: NavButtonProperties) => {
	return (
		<NavLink
			to={targetPage}
			className={({ isActive }) =>
				clsx(
					'btn btn-square transition-colors duration-300',
					isActive ? 'btn-primary' : 'btn-ghost',
					'[data-theme="valentine"]:rounded-none',
				)
			}
			end
			aria-current
		>
			{({ isActive }) => (isActive ? iconSolid : iconOutline)}
		</NavLink>
	)
}

export default NavButton
