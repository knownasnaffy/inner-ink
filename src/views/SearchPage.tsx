import React, { useState } from 'react'
import { fetchEntries } from '../utils/db'

const SearchPage = () => {
	const [query, setQuery] = useState<string>()
	const [result, setResult] = useState<JSX.Element>(<NoSearch />)
	const handleSearchClick: React.MouseEventHandler = (e) => {
		e.preventDefault()
		if (query) {
			const fetchedEntries = fetchEntries()
			if (fetchedEntries.length === 0) {
				setResult(<NoResults />)
			} else {
				setResult(<Results />)
			}
		}
	}
	return (
		<div className='flex flex-col h-full px-8 py-4 overflow-auto md:px-10 lg:px-14 gutter-stable animate-in slide-in-from-right'>
			<div className='flex flex-row justify-between h-fit'>
				<h2 className='table text-2xl font-semibold rounded-none'>
					Search
				</h2>
				<div className='justify-end w-full join'>
					<input
						type='search'
						placeholder='Search here'
						value={query}
						onChange={(e) => {
							e.preventDefault()
							setQuery(e.target.value)
						}}
						className='w-full max-w-md input input-sm input-bordered join-item'
					/>
					<button
						className='btn btn-primary btn-square btn-sm join-item'
						onClick={handleSearchClick}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={2}
							stroke='currentColor'
							className='w-5 h-5'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
							/>
						</svg>
					</button>
				</div>
			</div>
			{result}
		</div>
	)
}

export default SearchPage

const NoSearch = () => {
	return (
		<div className='flex flex-col text-center justify-center grow mt-4 fallback-response bg-base-200 rounded-box text-base-content/70'>
			<p className='text-4xl font-extrabold'>( ﾉ ﾟｰﾟ)ﾉ</p>
			<p className='text-2xl px-4'>
				Nothing here. Maybe type something in that field up there?
			</p>
		</div>
	)
}

const NoResults = () => {
	return (
		<div className='flex flex-col text-center justify-center grow mt-4 fallback-response bg-base-200 rounded-box text-base-content/70'>
			<p className='text-4xl font-extrabold'>＞﹏＜</p>
			<p className='text-2xl px-4'>
				No matching results. Did you ever write this?
			</p>
		</div>
	)
}

const Results = () => {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
			<div className='bg-base-200 p-4'></div>
		</div>
	)
}
