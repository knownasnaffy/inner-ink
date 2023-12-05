import clsx from 'clsx'

interface BooleanSettingsProps
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
	...props
}: BooleanSettingsProps) => {
	return (
		<div
			className={clsx(
				'flex flex-row items-center justify-between pr-4 border-t-2 border-base-100 collapse-title bg-base-200 text-md',
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
					<p className='text-sm text-base-content/50'>
						{description}
					</p>
				</div>
			</div>
			<input
				type='checkbox'
				className='toggle toggle-primary'
				{...props}
			/>
		</div>
	)
}

export default BooleanSettings
