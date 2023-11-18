import clsx from 'clsx'
import useRouter, { ValidRoute } from '../../hooks/navigationStore'

interface NavButtonProps {
	targetPage: ValidRoute
	iconOutline: React.ReactNode
	iconSolid: React.ReactNode
}

const NavButton = ({ targetPage, iconOutline, iconSolid }: NavButtonProps) => {
	const { route, navigate } = useRouter()
	const isActive = route === targetPage
	return (
		<button
			onClick={() => {
				navigate(targetPage)
			}}
			className={clsx(
				'btn btn-square transition-colors duration-300',
				isActive ? 'btn-primary' : 'btn-ghost',
				'[data-theme="valentine"]:rounded-none',
			)}
		>
			{isActive ? iconSolid : iconOutline}
		</button>
	)
}

export default NavButton
