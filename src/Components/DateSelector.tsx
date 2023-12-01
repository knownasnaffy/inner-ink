import {
	CaptionProps,
	ClassNames,
	DayClickEventHandler,
	DayPicker,
	useNavigation,
} from 'react-day-picker'
import { useHotkeys } from 'react-hotkeys-hook'
import { addDays, format, isSameDay, subDays } from 'date-fns'

import dateStore from '../hooks/dateStore'
import { getSettings } from '../utils/settings'

const bookmarkedDays = [new Date(2023, 10, 1), new Date(2023, 10, 4)]

function CustomCaption(props: CaptionProps) {
	const { goToMonth, nextMonth, previousMonth, isDateDisplayed } =
		useNavigation()
	const setVisibleMonth = dateStore((state) => state.setVisibleMonth)

	return (
		<div className='text-primary flex justify-between items-center pb-2'>
			<p className='font-bold text-2xl pl-2.5'>
				{format(props.displayMonth, 'MMMM yyyy')}
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

const classNames: ClassNames = {
	button: 'dp-btn',
	table: 'dp-table',
}

const DateSelector = () => {
	const closeDateSelector = () =>
		(
			document.getElementById('dateSelectorModal') as HTMLDialogElement
		).close()

	const selectedDay = dateStore((state) => state.selectedDay)
	const setSelectedDay = dateStore((state) => state.setSelectedDay)
	const visibleMonth = dateStore((state) => state.visibleMonth)
	const setVisibleMonth = dateStore((state) => state.setVisibleMonth)

	const handleDayClick: DayClickEventHandler = (day) => {
		setSelectedDay(day)
		setVisibleMonth(day)
		setTimeout(() => {
			closeDateSelector()
		}, 300)
	}

	useHotkeys('ctrl+d', () =>
		(
			document.getElementById('dateSelectorModal') as HTMLDialogElement
		).showModal(),
	)

	useHotkeys('ctrl+tab', () => {
		if (
			getSettings().disableFutureEntry &&
			isSameDay(selectedDay, new Date())
		) {
			return
		} else {
			setSelectedDay(addDays(selectedDay, 1))
		}
	})

	useHotkeys('ctrl+shift+tab', () => {
		setSelectedDay(subDays(selectedDay, 1))
	})

	return (
		<dialog id='dateSelectorModal' className='align-top modal'>
			<div className='flex flex-col justify-between modal-box max-w-fit'>
				<DayPicker
					id='datePicker'
					mode='single' // Allow only a single day to be selected
					selected={selectedDay}
					onDayClick={handleDayClick} // Perform other functions as well when day is selected
					toDate={
						getSettings().disableFutureEntry
							? new Date()
							: undefined
					} // Disable future selection
					month={visibleMonth}
					onMonthChange={setVisibleMonth} // Month displayed changes when an outside day is selected
					showOutsideDays // Display days of next and previous months
					fixedWeeks // Display 6 weeks at a time
					weekStartsOn={getSettings().weekStart} // Start of the week
					modifiers={{ bookmarked: bookmarkedDays }}
					modifiersClassNames={{
						selected: 'dp-selected-day',
						today: 'dp-today',
						bookmarked: 'dp-bookmarked',
						outside: 'dp-outside-day',
						disabled: 'dp-disabled-day',
					}}
					classNames={classNames}
					components={{
						Caption: CustomCaption,
					}}
				/>
			</div>
			<form method='dialog' className='modal-backdrop'>
				<button>close</button>
			</form>
		</dialog>
	)
}

export default DateSelector
