import clsx from 'clsx'
import { NavLink } from 'react-router-dom'

interface NavButtonProps {
	targetPage: string
	iconOutline: React.ReactNode
	iconSolid: React.ReactNode
}

const NavButton = ({
	targetPage, iconOutline, iconSolid
}: NavButtonProps) => {
	return (
			<NavLink
				to={targetPage}
				className={({ isActive }) => clsx(
					'btn btn-square rounded-l-none transition-colors duration-300',
					isActive ? 'btn-primary' : 'btn-ghost'
				)}>
				{({ isActive }) => {
					return isActive ? iconSolid : iconOutline
				} }
			</NavLink>
	)
}

export default NavButton