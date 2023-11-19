import editorStore from '../hooks/editorStore'

const MyEditor = () => {
	const content = editorStore((state) => state.content)
	const setContent = editorStore((state) => state.setContent)
	const lastSave = editorStore((state) => state.lastSave)
	const setLastSave = editorStore((state) => state.setLastSave)

	const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		e.preventDefault()
		setContent(e.target.value)

		if (!lastSave) {
			setLastSave(new Date())
			return console.log('First save initiated.')
		}
		if (new Date().getSeconds() - lastSave.getSeconds() >= 2) {
			console.log('Content Save event')
			return setLastSave(new Date())
		}
		console.log('No save required')
	}

	return (
		<textarea
			className='box-border w-full h-full resize-none textarea bg-base-200'
			placeholder='How was your day?'
			value={content}
			onChange={handleContentChange}
		></textarea>
	)
}

export default MyEditor
