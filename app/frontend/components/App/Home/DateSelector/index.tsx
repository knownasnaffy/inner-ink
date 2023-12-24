import { ClassNames, DayClickEventHandler, DayPicker } from 'react-day-picker'
import { useHotkeys } from 'react-hotkeys-hook'
import { addDays, isSameDay, subDays } from 'date-fns'

import dateStore from '../../../../hooks/dateStore'
import CustomCaption from './CustomCaption'
import { useEffect, useState } from 'react'
import { getEditedDates } from '../../../../utils/database'

const classNames: ClassNames = {
	button: 'dp-btn',
	table: 'dp-table',
}

const closeDateSelector = () =>
	(document.querySelector('#dateSelectorModal') as HTMLDialogElement).close()

const DateSelector = () => {
	const selectedDay = dateStore((state) => state.selectedDay)
	const setSelectedDay = dateStore((state) => state.setSelectedDay)
	const visibleMonth = dateStore((state) => state.visibleMonth)
	const setVisibleMonth = dateStore((state) => state.setVisibleMonth)

	const disableFutureEntry = dateStore((state) => state.disableFutureEntry)
	const weekStart = dateStore((state) => state.weekStart)

	const [editedDates, setEditedDates] = useState<Date[]>([])

	useEffect(() => {
		const fetchEditedDays = async () => {
			try {
				const dates = await getEditedDates()
				setEditedDates(dates)
			} catch (error) {
				// Handle errors if needed
				console.error('Error fetching edited days:', error)
			}
		}

		fetchEditedDays()
	}, [selectedDay])

	const handleDayClick: DayClickEventHandler = (day: Date) => {
		setSelectedDay(day)
		setVisibleMonth(day)
		setTimeout(() => {
			closeDateSelector()
		}, 300)
	}

	useHotkeys('ctrl+d', () =>
		(
			document.querySelector('#dateSelectorModal') as HTMLDialogElement
		).showModal(),
	)

	useHotkeys('ctrl+tab', () => {
		if (disableFutureEntry && isSameDay(selectedDay, new Date())) {
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
					toDate={disableFutureEntry ? new Date() : undefined} // Disable future selection
					month={visibleMonth}
					onMonthChange={setVisibleMonth} // Month displayed changes when an outside day is selected
					showOutsideDays // Display days of next and previous months
					fixedWeeks // Display 6 weeks at a time
					weekStartsOn={weekStart} // Start of the week
					modifiers={{ edited: editedDates }}
					modifiersClassNames={{
						selected: 'dp-selected-day',
						today: 'dp-today',
						edited: 'dp-edited',
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
