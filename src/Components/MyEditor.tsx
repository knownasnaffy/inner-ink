import { useRef } from 'react'
import editorStore from '../hooks/editorStore'

const MyEditor = () => {
	const content = editorStore((state) => state.content)
	const setContent = editorStore((state) => state.setContent)
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
			localStorage.setItem('autoSavedText', newText)
		}, 700)
	}

	return (
		<textarea
			className='box-border w-full h-full resize-none textarea bg-base-200'
			placeholder='How was your day?'
			value={content}
			onChange={handleTextChange}
		></textarea>
	)
}

export default MyEditor
