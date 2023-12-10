// import navButtonList from './navButtonList'
import NavButton from './NavButton'
import viewsList, { viewsListType } from '../../data/viewsList'

const getNavButtons = () => {
	const topNavButtons: viewsListType = []
	const bottomNavButtons: viewsListType = []

	for (const element of viewsList) {
		if (element.sidebar) {
			const position = element.sidebar?.position
			if (position === 'top') {
				topNavButtons.push(element)
			} else bottomNavButtons.push(element)
		}
	}
	return { topNavButtons, bottomNavButtons }
}

const Sidebar = () => {
	const { topNavButtons, bottomNavButtons } = getNavButtons()
	return (
		<div className='w-fit grow-0 bg-base-300 flex flex-col justify-between px-1.5 py-2'>
			{/* Upper Buttons */}
			<div className='flex flex-col gap-2'>
				{topNavButtons.map(({ path, sidebar }, index) => {
					return (
						<NavButton
							// name={name}
							key={index}
							targetPage={path}
							iconOutline={sidebar?.iconOutline}
							iconSolid={sidebar?.iconSolid}
						/>
					)
				})}
			</div>
			{/* Lower Buttons */}
			<div className='flex flex-col gap-2'>
				{bottomNavButtons.map(({ path, sidebar }, index) => {
					return (
						<NavButton
							// name={name}
							key={index}
							targetPage={path}
							iconOutline={sidebar?.iconOutline}
							iconSolid={sidebar?.iconSolid}
						/>
					)
				})}
			</div>
		</div>
	)
}

export default Sidebar
