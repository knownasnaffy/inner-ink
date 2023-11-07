import viewsList from './data/viewsList'
import useNavigation from './hooks/useNavigation'

const App = () => {
	return (
		<>
			<CurrentView />
		</>
	)
}

function CurrentView() {
	//
	const { route } = useNavigation()
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
