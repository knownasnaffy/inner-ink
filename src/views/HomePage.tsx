import {
	BookmarkSlashIcon,
	EyeIcon,
	Bars3Icon,
} from '@heroicons/react/20/solid'
import DateSelector from '../components/DateSelector'

const HomePage = () => {
	const openDateSelector = () =>
		(
			document.getElementById('dateSelectorModal') as HTMLDialogElement
		).showModal()

	return (
		<>
			<div className='flex justify-between'>
				<button
					className='btn btn-ghost text-lg capitalize'
					onClick={openDateSelector}
				>
					12 November 2344
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
				<textarea
					className='textarea resize-none box-border h-full w-full bg-base-200'
					placeholder='How was your day?'
				></textarea>
			</div>
			<DateSelector />
		</>
	)
}

export default HomePage
