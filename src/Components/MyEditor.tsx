import { useEffect, useRef } from 'react'
import editorStore from '../hooks/editorStore'
import { getEntry, saveEntry } from '../utils/database'
import dateStore from '../hooks/dateStore'

const MyEditor = () => {
	const content = editorStore((state) => state.content)
	const setContent = editorStore((state) => state.setContent)
	const selectedDay = dateStore((state) => state.selectedDay)

	const autoSaveTimeoutRef = useRef<number | null>(null)

	const handleTextChange = (
		event: React.ChangeEvent<HTMLTextAreaElement>,
	) => {
		const newText = event.target.value
		setContent(newText)

		if (autoSaveTimeoutRef.current) {
			clearTimeout(autoSaveTimeoutRef.current)
		}

		autoSaveTimeoutRef.current = window.setTimeout(() => {
			saveEntry(selectedDay, '', newText)
			console.log('Auto-saving')
		}, 700)
	}

	useEffect(() => {
		const fetchSavedData = async () => {
			try {
				const entry = await getEntry(selectedDay)
				if (entry) {
					setContent(entry.content)
				} else setContent('')
			} catch (error) {
				console.error('Failed to fetch saved data', error)
			}
		}

		fetchSavedData()
	}, [selectedDay, setContent])
	return (
		<div className='flex flex-col h-full'>
			<input
				type='text'
				placeholder='Have a title in mind?'
				className='w-full max-w-full text-lg font-semibold border-b-2 rounded-b-none input border-base-100 bg-base-200'
			/>
			<textarea
				className='box-border w-full h-full rounded-t-none resize-none textarea bg-base-200'
				placeholder='How was your day?'
				value={content}
				onChange={handleTextChange}
			></textarea>
		</div>
	)
}

export default MyEditor
