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
						width='24'
						height='24'
						fill='currentColor'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path d='M15.53 4.22a.75.75 0 0 1 0 1.06L8.81 12l6.72 6.72a.75.75 0 1 1-1.06 1.06l-7.25-7.25a.75.75 0 0 1 0-1.06l7.25-7.25a.75.75 0 0 1 1.06 0Z' />
					</svg>
				</button>
				<button
					className='btn btn-circle btn-ghost'
					disabled={!nextMonth}
					onClick={() => nextMonth && goToMonth(nextMonth)}
				>
					<svg
						width='24'
						height='24'
						fill='currentColor'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path d='M8.47 4.22a.75.75 0 0 0 0 1.06L15.19 12l-6.72 6.72a.75.75 0 1 0 1.06 1.06l7.25-7.25a.75.75 0 0 0 0-1.06L9.53 4.22a.75.75 0 0 0-1.06 0Z' />
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
						width='24'
						height='24'
						fill='currentColor'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path d='M2.75 4.5a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-1.5 0v-13a.75.75 0 0 1 .75-.75Zm18.5 0a.75.75 0 0 1 .75.75v.867a.75.75 0 0 1-1.5 0V5.25a.75.75 0 0 1 .75-.75Zm0 3.467a.75.75 0 0 1 .75.75v1.733a.75.75 0 0 1-1.5 0V8.717a.75.75 0 0 1 .75-.75Zm0 4.333a.75.75 0 0 1 .75.75v1.733a.75.75 0 0 1-1.5 0V13.05a.75.75 0 0 1 .75-.75Zm0 4.333a.75.75 0 0 1 .75.75v.867a.75.75 0 0 1-1.5 0v-.867a.75.75 0 0 1 .75-.75Zm-2.47-4.353a.75.75 0 0 0 0-1.06l-5-5a.75.75 0 1 0-1.06 1.06L16.44 11H5.75a.75.75 0 0 0 0 1.5h10.69l-3.72 3.72a.75.75 0 1 0 1.06 1.06l5-5Z' />
					</svg>
				</button>
			</div>
		</div>
	)
}

export default CustomCaption
