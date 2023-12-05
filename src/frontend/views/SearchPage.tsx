import { searchEntries } from '../utils/database'
import { SearchForm } from '../components/Search/SearchForm'
import {
	ResultNotFound,
	EmptySearchResult,
	SearchResult,
} from '../components/Search/SearchResults'
import searchStore from '../hooks/searchStore'

const SearchPage = () => {
	const searchResult = searchStore((state) => state.searchResult)
	const setSearchResult = searchStore((state) => state.setSearchResult)
	const searchQuery = searchStore((state) => state.searchQuery)

	const handleSubmit = async () => {
		if (searchQuery && searchQuery?.trim().length !== 0) {
			const searchResult = await searchEntries(searchQuery)
			if (!searchResult) {
				setSearchResult(<ResultNotFound />)
			} else {
				setSearchResult(<SearchResult entries={searchResult} />)
			}
		} else setSearchResult(<EmptySearchResult />)
	}

	return (
		<div className='flex flex-col h-full px-8 py-4 overflow-auto md:px-10 lg:px-14 gutter-stable animate-in slide-in-from-right'>
			<div className='flex flex-row justify-between h-fit'>
				<h2 className='table text-2xl font-semibold rounded-none'>
					Search
				</h2>
				<SearchForm onSubmit={handleSubmit} />
			</div>
			{searchResult}
		</div>
	)
}

export default SearchPage
