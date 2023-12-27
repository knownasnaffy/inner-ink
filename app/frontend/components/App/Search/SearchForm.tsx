import React from 'react'
import searchStore from '../../../hooks/searchStore'

interface SearchFormProperties {
	onSubmit: () => void
}

export const SearchForm = ({ onSubmit }: SearchFormProperties) => {
	const searchQuery = searchStore((state) => state.searchQuery)
	const setSearchQuery = searchStore((state) => state.setSearchQuery)

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		onSubmit()
	}

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(event.target.value)
	}

	return (
		<form onSubmit={handleSubmit} className='join w-full justify-end'>
			<input
				type='text'
				value={searchQuery}
				onChange={handleChange}
				className='join-item input input-bordered input-sm w-full max-w-md'
			/>
			<button type='submit' className='join-item btn btn-primary btn-sm'>
				<svg
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'
					className='h-4 w-4 fill-current stroke-current'
				>
					<path d='M10 2.75a7.25 7.25 0 0 1 5.63 11.819l4.9 4.9a.75.75 0 0 1-.976 1.134l-.084-.073-4.901-4.9A7.25 7.25 0 1 1 10 2.75Zm0 1.5a5.75 5.75 0 1 0 0 11.5 5.75 5.75 0 0 0 0-11.5Z' />
				</svg>
			</button>
		</form>
	)
}
