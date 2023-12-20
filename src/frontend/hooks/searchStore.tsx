import { create } from 'zustand'
import { EmptySearchResult } from '../components/App/Search/SearchResults'

type SearchStoreState = {
	searchResult: JSX.Element
	setSearchResult(newResult: JSX.Element): void
	searchQuery: string
	setSearchQuery(newQuery: string): void
}

const searchStore = create<SearchStoreState>((set) => ({
	searchResult: <EmptySearchResult />,
	setSearchResult(newResult) {
		set(() => ({ searchResult: newResult }))
	},
	searchQuery: '',
	setSearchQuery(newQuery) {
		set(() => ({ searchQuery: newQuery }))
	},
}))

export default searchStore
