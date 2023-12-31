import DateSelector from './DateSelector'
import MoreItems from './MoreItems'

export default function Header() {
	return (
		<div className='flex justify-between'>
			<DateSelector />
			<div className='flex h-fit w-fit flex-row gap-1'>
				<button className='btn btn-ghost btn-square'>
					<svg
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
						className='h-6 w-6 fill-current'
					>
						<path d='M6.19 21.854a.75.75 0 0 1-1.188-.61V6.25a3.25 3.25 0 0 1 3.25-3.25h7.499A3.25 3.25 0 0 1 19 6.249v14.996a.75.75 0 0 1-1.188.609l-5.811-4.181-5.812 4.18ZM17.5 6.249a1.75 1.75 0 0 0-1.75-1.75H8.253a1.75 1.75 0 0 0-1.75 1.75v13.532l5.062-3.64a.75.75 0 0 1 .876 0l5.06 3.64V6.25Z' />
					</svg>
				</button>
				<MoreItems />
			</div>
		</div>
	)
}
