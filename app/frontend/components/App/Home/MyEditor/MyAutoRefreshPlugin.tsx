import { useEffect } from 'react'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import dateStore from '../../../../hooks/dateStore'
import { getEntry } from '../../../../utils/database'

const emptyStateString =
	'{"root":{"children":[{"children":[],"direction":null,"format":"","indent":0,"type":"paragraph","version":1}],"direction":null,"format":"","indent":0,"type":"root","version":1}}'

export default function MyAutoRefreshPlugin() {
	const [editor] = useLexicalComposerContext()
	const selectedDay = dateStore((state) => state.selectedDay)
	useEffect(() => {
		const fetchSavedData = async () => {
			try {
				// Fetch saved data
				const entry = await getEntry(selectedDay)
				if (entry?.content) {
					// Load editorState if data exists
					const editorState = editor.parseEditorState(entry.content)
					// Passing `null` as a selection value to prevent focusing the editor
					// eslint-disable-next-line unicorn/no-null
					editor.setEditorState(editorState.clone(null))
				} else {
					// Create empty editorState and pass it to editor
					const editorState =
						editor.parseEditorState(emptyStateString)
					editor.setEditorState(editorState)
				}
			} catch (error) {
				console.error('Failed to fetch saved data', error)
			}
		}

		fetchSavedData()
	}, [editor, selectedDay])

	return undefined!
}
