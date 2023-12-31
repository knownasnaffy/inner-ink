import dateStore from '../../../hooks/dateStore'
import BooleanSettings from './BooleanSetting'
import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import clsx from 'clsx'

const DatePicker = () => {
	const disableFutureEntry = dateStore((state) => state.disableFutureEntry)
	const setDisableFutureEntry = dateStore(
		(state) => state.setDisableFutureEntry,
	)
	const setWeekStart = dateStore((state) => state.setWeekStart)
	const weekStart = dateStore((state) => state.weekStart)
	const days = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	]
	return (
		<>
			<h3 className='mb-2 mt-4 text-lg font-semibold'>Date Picker</h3>
			<div className='join join-vertical w-full'>
				{/* ### Disable Entry in Future */}
				<BooleanSettings
					icon={
						<svg
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6 shrink-0 fill-current'
						>
							<path d='M17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm-2.476 3.024a.5.5 0 0 0 0 .707l1.769 1.77-1.767 1.766a.5.5 0 1 0 .707.708l1.767-1.767 1.77 1.769a.5.5 0 1 0 .707-.707L18.208 17.5l1.771-1.77a.5.5 0 0 0-.707-.707l-1.771 1.77-1.77-1.77a.5.5 0 0 0-.707 0ZM17.75 3A3.25 3.25 0 0 1 21 6.25l.001 5.773a6.469 6.469 0 0 0-1.5-.71L19.5 8.5h-15v9.25c0 .966.784 1.75 1.75 1.75h5.064c.172.534.412 1.038.709 1.501L6.25 21A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3h11.5Zm0 1.5H6.25A1.75 1.75 0 0 0 4.5 6.25V7h15v-.75a1.75 1.75 0 0 0-1.75-1.75Z' />
						</svg>
					}
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
						<svg
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6 shrink-0 fill-current'
						>
							<path d='M17.75 3A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3h11.5Zm0 1.5H6.25A1.75 1.75 0 0 0 4.5 6.25v11.5c0 .966.784 1.75 1.75 1.75h11.5a1.75 1.75 0 0 0 1.75-1.75V6.25a1.75 1.75 0 0 0-1.75-1.75ZM7.75 7a.75.75 0 0 1 .743.648l.007.102v8.5a.75.75 0 0 1-1.493.102L7 16.25v-8.5A.75.75 0 0 1 7.75 7Z' />
						</svg>
						<div>First day of the week</div>
					</div>
					<Listbox
						value={weekStart}
						onChange={(value) => setWeekStart(value)}
						as='div'
						className='relative w-fit'
					>
						<Listbox.Button className='select select-bordered select-sm w-full max-w-sm'>
							{days[weekStart]}
						</Listbox.Button>
						<Transition
							as={Fragment}
							leave='transition ease-in duration-100'
							leaveFrom='opacity-100'
							leaveTo='opacity-0'
						>
							<Listbox.Options
								className='menu menu-sm rounded-btn bg-base-100 absolute bottom-9 right-0 z-20 shadow-md focus:outline-none'
								as='div'
							>
								{[
									'Sunday',
									'Monday',
									'Tuesday',
									'Wednesday',
									'Thursday',
									'Friday',
									'Saturday',
								].map((day, index) => (
									<li key={index}>
										<Listbox.Option
											className={({ active, selected }) =>
												clsx(
													'transition-none',
													active && 'active',
													selected && 'font-bold',
												)
											}
											value={index}
											as='a'
										>
											{day}
											{/* {({ selected }) => (
												<>
													<span
													className={`block truncate ${
														selected
														? 'font-medium'
														: 'font-normal'
													}`}
													>
													{day}
													</span>
													</>
												)} */}
										</Listbox.Option>
									</li>
								))}
							</Listbox.Options>
						</Transition>
					</Listbox>
				</div>
			</div>
		</>
	)
}

export default DatePicker
