import { ClassNames, DayClickEventHandler, DayPicker } from 'react-day-picker'

import dateStore from '../hooks/dateStore'
import { datePickerSettings } from '../utils/settings'

const bookmarkedDays = [new Date(2023, 10, 1), new Date(2023, 10, 4)]

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

	const classNames: ClassNames = {
		button: 'dp-btn',
		caption: 'dp-caption',
		caption_label: 'dp-caption-label',
		nav: 'dp-nav',
		nav_button: 'dp-nav-btn',
		table: 'dp-table',
	}

	return (
		<dialog id='dateSelectorModal' className='modal align-top'>
			<div className='modal-box max-w-fit flex flex-col justify-between'>
				<DayPicker
					id='datePicker'
					mode='single' // Allow only a single day to be selected
					selected={selectedDay}
					onDayClick={handleDayClick} // Perform other functions as well when day is selected
					toDate={
						datePickerSettings.disableFutureEntry
							? new Date()
							: undefined
					} // Disable future selection
					month={visibleMonth}
					onMonthChange={setVisibleMonth} // Month displayed changes when an outside day is selected
					showOutsideDays // Display days of next and previous months
					fixedWeeks // Display 6 weeks at a time
					weekStartsOn={datePickerSettings.weekStart} // Start of the week
					modifiers={{ bookmarked: bookmarkedDays }}
					modifiersClassNames={{
						selected: 'dp-selected-day',
						today: 'dp-today',
						bookmarked: 'dp-bookmarked',
						outside: 'dp-outside-day',
						disabled: 'disabled-day',
					}}
					classNames={classNames}
				/>
				<div className='modal-action'>
					<form method='dialog'>
						{/* if there is a button in form, it will close the modal */}
						<button className='btn'>Cancel</button>
					</form>
				</div>
			</div>
			<form method='dialog' className='modal-backdrop'>
				<button>close</button>
			</form>
		</dialog>
	)
}

export default DateSelector
