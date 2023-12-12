// import navButtonList from './navButtonList'
import sidebarItems, { SidebarItem } from '../../config/sidebar'
import NavButton from './NavButton'
// import viewsList, { viewsListType } from '../../data/viewsList'

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
