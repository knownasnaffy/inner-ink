import { useEffect } from 'react'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'

export default function MyAutoFocusPlugin() {
	const [editor] = useLexicalComposerContext()

	useEffect(() => {
		// Focus editor on first load
		editor.focus()
	}, [editor])

	return undefined!
}
