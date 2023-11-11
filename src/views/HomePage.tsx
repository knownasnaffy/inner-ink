import {
	BookmarkSlashIcon,
	EyeIcon,
	Bars3Icon,
} from '@heroicons/react/20/solid'
import DateSelector from '../components/DateSelector'
import { format } from 'date-fns'
import dateStore from '../hooks/dateStore'
import MyEditor from '../components/MyEditor'

const HomePage = () => {
	const openDateSelector = () =>
		(
			document.getElementById('dateSelectorModal') as HTMLDialogElement
		).showModal()
	const selectedDay = dateStore((state) => state.selectedDay)
	const currentDate = format(selectedDay, 'PPPP')
	return (
		<>
			<div className='flex justify-between'>
				<button
					className='btn btn-ghost text-lg capitalize'
					onClick={openDateSelector}
				>
					{currentDate}
				</button>
				<div className='flex flex-row w-fit h-fit'>
					<button className='btn btn-ghost btn-square'>
						<BookmarkSlashIcon className='h-6' />
					</button>
					<button className='btn btn-ghost btn-square'>
						<EyeIcon className='h-6' />
					</button>
					<button className='btn btn-ghost btn-square'>
						<Bars3Icon className='h-6' />
					</button>
				</div>
			</div>
			<div className='grow'>
				<MyEditor />
			</div>
			<DateSelector />
		</>
	)
}

export default HomePage
