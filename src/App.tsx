import { Route, Routes } from 'react-router-dom'
import Sidebar from './Components/Sidebar'
import { BookmarksPage, HomePage, SearchPage, SettingsPage } from './Routes'

const App = () => (
	<div className='h-screen w-full flex flex-row'>
		<Sidebar />
		<div className="grow flex flex-col py-6 px-12 gap-6">
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/search' element={<SearchPage />} />
				<Route path='/bookmarks' element={<BookmarksPage />} />
				<Route path='/settings' element={<SettingsPage />} />
			</Routes>
		</div>
	</div>
)

export default App
