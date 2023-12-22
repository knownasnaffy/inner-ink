import dateStore, { WeekStart } from '../../../hooks/dateStore'
import BooleanSettings from './BooleanSetting'

const DatePicker = () => {
	const disableFutureEntry = dateStore((state) => state.disableFutureEntry)
	const setDisableFutureEntry = dateStore(
		(state) => state.setDisableFutureEntry,
	)
	const setWeekStart = dateStore((state) => state.setWeekStart)
	const weekStart = dateStore((state) => state.weekStart)

	return (
		<>
			<h3 className='mt-4 mb-2 text-lg font-semibold'>Date Picker</h3>
			{/* ### Disable Entry in Future */}
			{/* TODO: Change disableFutureEntry to enableFutureEntry everywhere */}
			<BooleanSettings
				title='Disable entry in future'
				description='Permission to write for future days'
				position='top'
				checked={disableFutureEntry}
				onChange={(event) =>
					setDisableFutureEntry(event.target.checked)
				}
			/>
			{/* ### First day of the week */}
			<div className='flex flex-row items-center justify-between gap-4 pr-4 border-t-2 border-base-100 rounded-b-btn collapse-title bg-base-200 text-md'>
				<div className='flex flex-row items-center gap-2 font-semibold'>
					<div>
						First day of the week
						{/* <p className='text-sm text-base-content/50'>
							Select a display language fpr this app. Overides
							default Windows interface language
						</p> */}
					</div>
				</div>
				<select
					className='w-full select select-bordered select-sm max-w-fit'
					value={weekStart}
					onChange={(event) =>
						setWeekStart(Number(event.target.value) as WeekStart)
					}
				>
					{[
						'Sunday',
						'Monday',
						'Tuesday',
						'Wednesday',
						'Thursday',
						'Friday',
						'Saturday',
					].map((day, index) => {
						return (
							<option key={index} value={index}>
								{day}
							</option>
						)
					})}
				</select>
			</div>
		</>
	)
}

export default DatePicker
