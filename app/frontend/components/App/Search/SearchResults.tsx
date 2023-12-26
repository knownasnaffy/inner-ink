import { format, parse } from 'date-fns'
import { Entry } from '../../../utils/database'
import clsx from 'clsx'
import dateStore from '../../../hooks/dateStore'
// import navigationStore from '../../hooks/navigationStore'

export const SearchResult = ({ entries }: { entries: Entry[] }) => {
	const setSelectedDay = dateStore((state) => state.setSelectedDay)
	// const navigate = navigationStore((state) => state.navigate)

	const selectEntry = (date: Date) => {
		setSelectedDay(date)
		// navigate('/')
	}
	return (
		<div className='animate-in fade-in mt-4 grid grid-cols-1 gap-3 duration-300 md:grid-cols-2 lg:grid-cols-3'>
			{entries.map((entry, index) => {
				return (
					<button
						key={index}
						className='card card-compact bg-base-200 shadow-sm transition duration-300 hover:cursor-pointer hover:shadow-md'
						onClick={() =>
							selectEntry(
								parse(entry.date, 'dd-MM-yyyy', new Date()),
							)
						}
					>
						<div className='card-body gap-0'>
							<div
								className={clsx(
									'card-title',
									entry.title.trim().length === 0 &&
										'text-base-content/80',
								)}
							>
								{entry.title.trim().length > 0
									? entry.title
									: 'No Title'}
							</div>
							<p className='max-h-20 truncate'>{entry.content}</p>
							<div className='card-actions text-base-content/80 mt-2 justify-end'>
								{format(
									parse(entry.date, 'dd-MM-yyyy', new Date()),
									'PPPP',
								)}
							</div>
						</div>
					</button>
				)
			})}
		</div>
	)
}

export const ResultNotFound = () => {
	return (
		<div className='bg-base-200 rounded-box text-base-content/70 animate-in fade-in mt-4 flex grow flex-col justify-center text-center duration-300'>
			<p className='text-4xl font-extrabold'>＞﹏＜</p>
			<p className='px-4 text-2xl'>
				No matching results. Did you ever write this?
			</p>
		</div>
	)
}

export const EmptySearchResult = () => {
	return (
		<div className='bg-base-200 rounded-box text-base-content/70 animate-in fade-in mt-4 flex grow flex-col justify-center text-center duration-300'>
			<p className='text-4xl font-extrabold'>( ﾉ ﾟｰﾟ)ﾉ</p>
			<p className='px-4 text-2xl'>
				Nothing here. Maybe type something in that field up there?
			</p>
		</div>
	)
}
