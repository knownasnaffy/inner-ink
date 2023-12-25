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
		<div className='absolute z-20 bottom-[1px] right-[1px] flex flex-row text-base-content/60 bg-base-300 rounded-tl-btn rounded-br-btn text-sm py-1.5 px-2 gap-1.5'>
			<span>
				{/* Combined word count of title and content */}
				{contentWordCount + (title.match(/\S+/g) || []).length} words
			</span>
		</div>
	)
}
