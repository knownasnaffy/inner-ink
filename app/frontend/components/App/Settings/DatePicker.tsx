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
			<h3 className='mb-2 mt-4 text-lg font-semibold'>Date Picker</h3>
			<div className='join join-vertical w-full'>
				{/* ### Disable Entry in Future */}
				{/* TODO: Change disableFutureEntry to enableFutureEntry everywhere */}
				<BooleanSettings
					title='Disable entry in future'
					description='Permission to write for future days'
					checked={disableFutureEntry}
					onChange={(event) =>
						setDisableFutureEntry(event.target.checked)
					}
				/>
				{/* ### First day of the week */}
				<div className='border-base-100 rounded-btn collapse-title bg-base-200 text-md join-item flex flex-row items-center justify-between gap-4 border-t-2 pr-4'>
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
						className='select select-bordered select-sm w-full max-w-fit'
						value={weekStart}
						onChange={(event) =>
							setWeekStart(
								Number(event.target.value) as WeekStart,
							)
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
			</div>
		</>
	)
}

export default DatePicker
