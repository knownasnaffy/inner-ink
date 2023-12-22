import { CaptionProps, useNavigation } from 'react-day-picker'
import { format } from 'date-fns'
import dateStore from '../../../../hooks/dateStore'

const CustomCaption = (properties: CaptionProps) => {
	const { goToMonth, nextMonth, previousMonth, isDateDisplayed } =
		useNavigation()
	const setVisibleMonth = dateStore((state) => state.setVisibleMonth)

	return (
		<div className='text-primary flex justify-between items-center pb-2'>
			<p className='font-bold text-2xl pl-2.5'>
				{format(properties.displayMonth, 'MMMM yyyy')}
			</p>
			<div className='w-fit flex gap-1'>
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
						className='w-6 h-6'
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
						className='w-6 h-6'
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
						className='w-6 h-6'
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
