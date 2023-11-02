import { useEffect, useState, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { themeChange } from 'theme-change'

import ThemeChanger from './Components/ThemeChanger.tsx'
import App from './App.tsx'
import ReloadPrompt from './Components/ReloadPrompt.tsx'

import './index.css'

const AppRoot = () => {
	// Init theme-change functions
	useEffect(() => {
		themeChange(false)
	}, [])

	const [loggedIn, setLoggedIn] = useState(false)

	return (
		<>
			<BrowserRouter>
				{loggedIn ? (
					<App />
				) : (
					<button
						className='btn btn-primary m-10'
						onClick={() => setLoggedIn(true)}>
						Log In
					</button>
				)}
			</BrowserRouter>
			<ThemeChanger />
			{/* Service worker reload prompt */}
			<ReloadPrompt />
		</>
	)
}

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<AppRoot />
	</StrictMode>
)
