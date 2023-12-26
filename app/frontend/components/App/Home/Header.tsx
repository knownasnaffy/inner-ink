import { BookmarkSlashIcon } from '@heroicons/react/20/solid'
import { addDays, format, isSameDay, subDays } from 'date-fns'
import dateStore from '../../../hooks/dateStore'
import { isHotkeyPressed } from 'react-hotkeys-hook'
import { getSettings } from '../../../utils/settings'

export default function Header() {
	const selectedDay = dateStore((state) => state.selectedDay)
	const setSelectedDay = dateStore((state) => state.setSelectedDay)
	const currentDate = format(selectedDay, 'PPPP')

	const handleDateSelect = () => {
		if (isHotkeyPressed('shift')) {
			setSelectedDay(subDays(selectedDay, 1))
		} else if (isHotkeyPressed('ctrl')) {
			if (
				getSettings().disableFutureEntry &&
				isSameDay(selectedDay, new Date())
			) {
				return
			} else {
				setSelectedDay(addDays(selectedDay, 1))
			}
		} else {
			;(
				document.querySelector(
					'#dateSelectorModal',
				) as HTMLDialogElement
			).showModal()
		}
	}
	return (
		<div className='flex justify-between'>
			<button
				className='btn btn-ghost text-lg capitalize'
				onClick={handleDateSelect}
			>
				{currentDate}
			</button>
			<div className='flex h-fit w-fit flex-row gap-1'>
				<button className='btn btn-ghost btn-square'>
					<BookmarkSlashIcon className='h-6' />
				</button>
				<MoreItems />
			</div>
		</div>
	)
}

import MoreItems from './MoreItems'
