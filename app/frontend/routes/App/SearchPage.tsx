import { searchEntries } from '../../utils/database'
import { SearchForm } from '../../components/App/Search/SearchForm'
import {
	ResultNotFound,
	EmptySearchResult,
	SearchResult,
} from '../../components/App/Search/SearchResults'
import searchStore from '../../hooks/searchStore'

const SearchPage = () => {
	const searchResult = searchStore((state) => state.searchResult)
	const setSearchResult = searchStore((state) => state.setSearchResult)
	const searchQuery = searchStore((state) => state.searchQuery)

	const handleSubmit = async () => {
		if (searchQuery && searchQuery?.trim().length !== 0) {
			const searchResult = await searchEntries(searchQuery)
			if (searchResult) {
				setSearchResult(<SearchResult entries={searchResult} />)
			} else {
				setSearchResult(<ResultNotFound />)
			}
		} else setSearchResult(<EmptySearchResult />)
	}

	return (
		<div className='gutter-stable animate-in slide-in-from-right flex h-full flex-col overflow-auto px-8 py-4 md:px-10 lg:px-14'>
			<div className='flex h-fit flex-row justify-between'>
				<h2 className='table rounded-none text-2xl font-semibold'>
					Search
				</h2>
				<SearchForm onSubmit={handleSubmit} />
			</div>
			{searchResult}
		</div>
	)
}

export default SearchPage
