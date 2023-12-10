import viewsList from '../data/viewsList'
import navigationStore from '../hooks/navigationStore'

export default function CurrentView() {
	const { route } = navigationStore()
	let view

	for (const element of viewsList) {
		if (element.path === route) {
			view = element.element
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
