import { CaptionProps, useNavigation } from 'react-day-picker'
import { format } from 'date-fns'
import dateStore from '../../../../hooks/dateStore'

const CustomCaption = (properties: CaptionProps) => {
	const { goToMonth, nextMonth, previousMonth, isDateDisplayed } =
		useNavigation()
	const setVisibleMonth = dateStore((state) => state.setVisibleMonth)

	return (
		<div className='text-primary flex items-center justify-between pb-2'>
			<p className='pl-2.5 text-2xl font-bold'>
				{format(properties.displayMonth, 'MMMM yyyy')}
			</p>
			<div className='flex w-fit gap-1'>
				<button
					className='btn btn-circle btn-ghost'
					disabled={!previousMonth}
					onClick={() => previousMonth && goToMonth(previousMonth)}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={2.5}
						stroke='currentColor'
						className='h-6 w-6'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M15.75 19.5L8.25 12l7.5-7.5'
						/>
					</svg>
				</button>
				<button
					className='btn btn-circle btn-ghost'
					disabled={!nextMonth}
					onClick={() => nextMonth && goToMonth(nextMonth)}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={2.5}
						stroke='currentColor'
						className='h-6 w-6'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M8.25 4.5l7.5 7.5-7.5 7.5'
						/>
					</svg>
				</button>
				<button
					className='btn btn-circle btn-ghost'
					disabled={isDateDisplayed(new Date())}
					onClick={() => {
						setVisibleMonth(new Date())
					}}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={2.5}
						stroke='currentColor'
						className='h-6 w-6'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5'
						/>
					</svg>
				</button>
			</div>
		</div>
	)
}

export default CustomCaption
