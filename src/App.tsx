import { useEffect } from 'react'
import viewsList from './data/viewsList'
import navigationStore from './hooks/navigationStore'
import { themeChange } from 'theme-change'
import ThemeChanger from './components/ThemeChanger'

const App = () => {
	useEffect(() => {
		themeChange(false)
	})
	return (
		<>
			<CurrentView />
			<ThemeChanger />
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
