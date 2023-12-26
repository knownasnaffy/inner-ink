import clsx from 'clsx'

interface BooleanSettingsProperties
	extends React.InputHTMLAttributes<HTMLInputElement> {
	title: string
	description?: string
	position?: 'top' | 'middle' | 'bottom'
	icon?: React.ReactNode
}

const BooleanSettings = ({
	title,
	description,
	position,
	icon,
	...properties
}: BooleanSettingsProperties) => {
	return (
		<div
			className={clsx(
				'border-base-100 collapse-title bg-base-200 text-md flex flex-row items-center justify-between border-t-2 pr-4',
				position === 'top'
					? 'rounded-t-btn'
					: position === 'middle'
						? 'rounded-none'
						: position === 'bottom'
							? 'rounded-b-btn'
							: 'rounded-btn',
			)}
		>
			<div className='flex flex-row items-center gap-2 font-semibold'>
				{icon && icon}
				<div className=''>
					{title}
					<p className='text-base-content/50 text-sm'>
						{description}
					</p>
				</div>
			</div>
			<input
				type='checkbox'
				className='toggle toggle-primary'
				{...properties}
			/>
		</div>
	)
}

export default BooleanSettings
