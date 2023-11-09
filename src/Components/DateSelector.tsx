import { ClassNames, DayClickEventHandler, DayPicker } from 'react-day-picker'
// import 'react-day-picker/dist/style.css'

import { format } from 'date-fns'
import dateStore from '../hooks/dateStore'
import appSettings from '../utils/appSettings'

// import styles from 'react-day-picker/dist/style.module.css';

const bookmarkedDays = [new Date(2023, 10, 1), new Date(2023, 10, 4)]
// const bookmarkStyle = { border: '2px solid currentColor' }

const DateSelector = () => {
	const closeDateSelector = () =>
		(
			document.getElementById('dateSelectorModal') as HTMLDialogElement
		).close()
	const selectedDay = dateStore((state) => state.selectedDay)
	const setSelectedDay = dateStore((state) => state.setSelectedDay)
	const handleDayClick: DayClickEventHandler = (day) => {
		setSelectedDay(day)
		closeDateSelector()
	}
	let footer = <p>Please pick a day.</p>
	if (selectedDay) {
		footer = <p>You picked {format(selectedDay, 'PP')}.</p>
	}

	const classNames: ClassNames = {
    // ...styles,
    // head: 'custom-head'
		vhidden: 'hidden',
		button: 'dp-btn',
		caption: 'dp-caption',
		caption_label: 'dp-caption-label',
		nav: 'dp-nav',
		nav_button: 'dp-nav-button',
		table: 'dp-tabel',
  };
	
	const datePickerSettings = appSettings.datePicker
	return (
		<dialog id='dateSelectorModal' className='modal'>
			<div className='modal-box max-w-fit px-8 h-[28rem] flex items-center'>
				<DayPicker
					id='datePicker'
					mode='single'
					selected={selectedDay}
					onDayClick={handleDayClick}
					// footer={footer} // Footer displayed below calendar
					toDate={datePickerSettings.disableFutureEntry ? new Date() : undefined} // Disable future selection
					// showOutsideDays // Display days of next and previous months
					fixedWeeks // Display 6 weeks at a time
					weekStartsOn={datePickerSettings.weekStart} // Start of the week
					modifiers={{ booked: bookmarkedDays }}
          modifiersClassNames={{
            selected: 'dp-selected',
            today: 'dp-today',
            bookmarked: 'dp-bookmarked',
            outside: 'outside-day',
            disabled: 'disabled-day',
          }}
					classNames={classNames}
				/>
				{/* <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click outside to close</p> */}
				{/* <div className="modal-action"> */}
				{/* <form method="dialog"> */}
				{/* if there is a button in form, it will close the modal */}
				{/* <button className="btn">Close</button>
      </form> */}
				{/* </div> */}
			</div>
			<form method='dialog' className='modal-backdrop'>
				<button>close</button>
			</form>
		</dialog>
	)
}

export default DateSelector
