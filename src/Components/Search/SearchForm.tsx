import React from 'react'
import searchStore from '../../hooks/searchStore'

interface SearchFormProps {
	onSubmit: () => void
}

export const SearchForm = ({ onSubmit }: SearchFormProps) => {
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
				className='join-item input input-bordered input-sm max-w-md w-full'
			/>
			<button type='submit' className='join-item btn btn-primary btn-sm'>
				Search
			</button>
		</form>
	)
}
