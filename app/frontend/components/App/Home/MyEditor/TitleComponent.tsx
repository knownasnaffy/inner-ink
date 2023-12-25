import { useEffect, useRef } from 'react'
import editorStore from '../../../../hooks/editorStore'
import { getEntry, setEntryTitle } from '../../../../utils/database'
import dateStore from '../../../../hooks/dateStore'

export default function TitleComponent() {
	const title = editorStore((state) => state.title)
	const setTitle = editorStore((state) => state.setTitle)
	const selectedDay = dateStore((state) => state.selectedDay)

	const autoSaveTitleTimeout = useRef<number | null>(null)

	const triggerTitleSave = (date: Date, newTitle: string) => {
		if (autoSaveTitleTimeout.current) {
			clearTimeout(autoSaveTitleTimeout.current)
		}

		autoSaveTitleTimeout.current = window.setTimeout(() => {
			setEntryTitle(date, newTitle)
		}, 700)
	}

	useEffect(() => {
		const fetchSavedData = async () => {
			try {
				// Fetch saved data and set title if it exists
				const entry = await getEntry(selectedDay)
				setTitle(entry?.title || '')
			} catch (error) {
				console.error('Failed to fetch saved data', error)
			}
		}

		fetchSavedData()
	}, [selectedDay, setTitle])

	return (
		<input
			type='text'
			value={title}
			onChange={(event) => {
				setTitle(event.target.value)
				// save if inactive for 700 ms
				triggerTitleSave(selectedDay, event.target.value)
			}}
			placeholder='Have a title in mind?'
			className='w-full max-w-full text-lg font-semibold border-b-2 rounded-b-none input border-base-100 bg-base-200'
		/>
	)
}
