import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { themeChange } from 'theme-change'

import {
	BookmarksPage,
	HomePage,
	SearchPage,
	SettingsPage,
	LoginPage,
	SignUpPage,
} from './Routes'

import Sidebar from './Components/Sidebar'
import ThemeChanger from './Components/ThemeChanger.tsx'
// import ReloadPrompt from './Components/ReloadPrompt.tsx'

const AppLayout = () => (
	<div className='h-screen w-full flex flex-row'>
		<Sidebar />
		<div className='grow flex flex-col py-6 px-12 gap-6'>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/search' element={<SearchPage />} />
				<Route path='bookmarks' element={<BookmarksPage />} />
				<Route path='settings' element={<SettingsPage />} />
			</Routes>
		</div>
	</div>
)

const App = () => {
	// Init theme-change functions
	useEffect(() => {
		themeChange(false)
	}, [])
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/*' element={<AppLayout />} />
					<Route path='/login' element={<LoginPage />} />
					<Route path='/signup' element={<SignUpPage />} />
				</Routes>
			</BrowserRouter>
			<ThemeChanger />
			{/* Service worker reload prompt */}
			{/* <ReloadPrompt /> */}
		</>
	)
}

export default App
