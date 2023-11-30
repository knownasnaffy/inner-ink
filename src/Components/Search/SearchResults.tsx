export const SearchResult = () => {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 animate-in slide-in-from-bottom duration-300'>
			<div className='bg-base-200 p-4'></div>
		</div>
	)
}

export const ResultNotFound = () => {
	return (
		<div className='flex flex-col text-center justify-center grow mt-4 fallback-response bg-base-200 rounded-box text-base-content/70 animate-in slide-in-from-bottom duration-300'>
			<p className='text-4xl font-extrabold'>＞﹏＜</p>
			<p className='text-2xl px-4'>
				No matching results. Did you ever write this?
			</p>
		</div>
	)
}

export const EmptySearchResult = () => {
	return (
		<div className='flex flex-col text-center justify-center grow mt-4 fallback-response bg-base-200 rounded-box text-base-content/70 animate-in slide-in-from-bottom duration-300'>
			<p className='text-4xl font-extrabold'>( ﾉ ﾟｰﾟ)ﾉ</p>
			<p className='text-2xl px-4'>
				Nothing here. Maybe type something in that field up there?
			</p>
		</div>
	)
}
