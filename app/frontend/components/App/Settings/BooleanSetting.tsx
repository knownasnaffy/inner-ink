import clsx from 'clsx'

interface BooleanSettingsProperties
	extends React.InputHTMLAttributes<HTMLInputElement> {
	title: string
	description?: string
	icon?: React.ReactNode
}

const BooleanSettings = ({
	title,
	description,
	icon,
	...properties
}: BooleanSettingsProperties) => {
	return (
		<div
			className={clsx(
				'border-base-100 collapse-title bg-base-200 text-md rounded-btn join-item flex flex-row items-center justify-between border-t-2 pr-4',
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
