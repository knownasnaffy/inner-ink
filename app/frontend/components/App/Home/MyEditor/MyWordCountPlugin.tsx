import { useEffect, useState } from 'react'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import editorStore from '../../../../hooks/editorStore'

export default function MyWordCountPlugin() {
	const [editor] = useLexicalComposerContext()
	const [contentWordCount, setContentWordCount] = useState<number>(0)
	const title = editorStore((state) => state.title)

	useEffect(() => {
		return editor.registerTextContentListener((textContent) => {
			setContentWordCount((textContent.match(/\S+/g) || []).length)
		})
	}, [editor, setContentWordCount])

	return (
		<div className='text-base-content/60 bg-base-300 rounded-tl-btn rounded-br-btn flex flex-row items-center gap-1.5 px-2 text-sm'>
			<span>
				{/* Combined word count of title and content */}
				{contentWordCount + (title.match(/\S+/g) || []).length} words
			</span>
		</div>
	)
}
