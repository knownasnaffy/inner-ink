import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin'
import { EditorState } from 'lexical'
import { useRef } from 'react'
import dateStore from '../../../../hooks/dateStore'
import { setEntryContent } from '../../../../utils/database'

export default function MyAutoSavePlugin() {
	const autoSaveContentTimeout = useRef<number | null>(null)
	const selectedDay = dateStore((state) => state.selectedDay)

	const triggerContentSave = (date: Date, newContent: string) => {
		if (autoSaveContentTimeout.current) {
			clearTimeout(autoSaveContentTimeout.current)
		}
		autoSaveContentTimeout.current = globalThis.setTimeout(() => {
			setEntryContent(date, newContent)
		}, 700)
	}

	const onChange = (editorState: EditorState) => {
		// Convert to serialized JSON
		const editorStateJson = editorState.toJSON()
		// Convert to JSON string
		const editorStateString = JSON.stringify(editorStateJson)
		// Save if inactive for 700 ms
		triggerContentSave(selectedDay, editorStateString)
	}

	return <OnChangePlugin onChange={onChange} ignoreSelectionChange />
}
