import navButtonList from './navButtonList'
import NavButton from './NavButton'

const Sidebar = () => {
	return (
		<div className='w-fit bg-base-300 flex flex-col pr-2 py-6'>
			{/* Upper Buttons */}
			<div className='flex flex-col gap-2 grow'>
				{navButtonList.upper.map(({ target, icon }, index) => {
					return (
						<NavButton
							// name={name}
							key={index}
							targetPage={target}
							iconOutline={icon.outline}
							iconSolid={icon.solid}
						/>
					)
				})}
			</div>
			{/* Lower Buttons */}
			<div className='flex flex-col gap-2'>
				{navButtonList.lower.map(({ target, icon }, index) => {
					return (
						<NavButton
							// name={name}
							key={index}
							targetPage={target}
							iconOutline={icon.outline}
							iconSolid={icon.solid}
						/>
					)
				})}
			</div>
		</div>
	)
}

export default Sidebar
