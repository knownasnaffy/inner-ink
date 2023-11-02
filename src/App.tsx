import { BrowserRouter } from 'react-router-dom'
import ThemeChanger from './Components/ThemeChanger.tsx'
import Layout from './Components/Layout.tsx'
import { useEffect, useState } from 'react'
import { themeChange } from 'theme-change'
import ReloadPrompt from './Components/ReloadPrompt.tsx'

function App() {
	// Init theme-change functions
	useEffect(() => {
		themeChange(false)
	}, [])

	const [loggedIn, setLoggedIn] = useState(false)
	
	return (
		<>
		<BrowserRouter>
		{loggedIn ? 
			<Layout />
			: <button className="btn btn-primary m-10" onClick={() => setLoggedIn(true)}>Log In</button>}
		</BrowserRouter>
			<ThemeChanger />
			{/* Service worker reload prompt */}
			<ReloadPrompt />
		</>
	)
}

export default App