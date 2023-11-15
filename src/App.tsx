import { useEffect, useState } from 'react'
import viewsList from './data/viewsList'
import navigationStore from './hooks/navigationStore'
import { themeChange } from 'theme-change'
import ThemeChanger from './components/ThemeChanger'
import { initDB } from './utils/db'
import TitleBar from './components/Titlebar'

const App = () => {
	const [isDBReady, setIsDBReady] = useState(false)

	const startInit = async () => {
		const status = await initDB()
		setIsDBReady(status)
	}

	useEffect(() => {
		startInit()
		themeChange(false)
	})
	return (
		<>
			<div className='flex flex-col h-screen'>
				<TitleBar />
				<CurrentView />
			</div>
			<ThemeChanger />
			{!isDBReady && <>DB Discontinued</>}
		</>
	)
}

function CurrentView() {
	const { route } = navigationStore()
	let view

	for (let i = 0; i < viewsList.length; i++) {
		if (viewsList[i].path === route) {
			view = viewsList[i].element
			break
		} else
			view = (
				<>
					<h1>404 - View not found</h1>
					<p>Stop messing with the state</p>
				</>
			)
	}

	return view
}

export default App
