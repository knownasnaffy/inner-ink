// import navButtonList from './navButtonList'
import NavButton from './NavButton'
import viewsList, { viewsListType } from '../../data/viewsList'

const getNavButtons = () => {
	let topNavButtons: viewsListType = []
	let bottomNavButtons: viewsListType = []

	for (let i = 0; i < viewsList.length; i++) {
		if (viewsList[i].sidebar) {
			let position = viewsList[i].sidebar?.position
			if (position === 'top') {
				topNavButtons.push(viewsList[i])
			} else bottomNavButtons.push(viewsList[i])
		}
	}
	return { topNavButtons, bottomNavButtons }
}

const Sidebar = () => {
	const { topNavButtons, bottomNavButtons } = getNavButtons()
	return (
		<div className='w-fit bg-base-300 flex flex-col px-2 py-6'>
			{/* Upper Buttons */}
			<div className='flex flex-col gap-2 grow'>
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
