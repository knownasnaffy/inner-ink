import { useEffect } from 'react'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { setIsEntryContentEmpty } from '../../../../utils/database'
import dateStore from '../../../../hooks/dateStore'

export default function MyEmptyCheckPlugin() {
	const [editor] = useLexicalComposerContext()
	const selectedDay = dateStore((state) => state.selectedDay)
	useEffect(() => {
		return editor.registerTextContentListener((textContent) => {
			setIsEntryContentEmpty(selectedDay, textContent.trim() === '')
			console.log(selectedDay, textContent.trim() === '')
		})
	}, [editor, selectedDay])

	return undefined!
}
