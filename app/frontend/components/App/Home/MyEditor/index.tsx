import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary'
import MyAutoFocusPlugin from './MyAutoFocusPlugin'
import MyWordCountPlugin from './MyWordCountPlugin'
import TitleComponent from './TitleComponent'
import editorTheme from '../../../../config/editorTheme'
import MyAutoRefreshPlugin from './MyAutoRefreshPlugin'
import MyAutoSavePlugin from './MyAutoSavePlugin'

const MyEditor = () => {
	return (
		<div className='flex flex-col h-full'>
			<TitleComponent />
			<div className='relative h-full'>
				<LexicalComposer
					initialConfig={{
						namespace: 'MyEditor',
						theme: editorTheme,
						onError: (error: Error) => console.error(error),
					}}
				>
					<RichTextPlugin
						contentEditable={
							<ContentEditable className='textarea bg-base-200 rounded-t-none box-border h-full' />
						}
						placeholder={
							<div className='absolute top-2.5 left-4 select-none pointer-events-none text-black/20'>
								Enter some text...
							</div>
						}
						ErrorBoundary={LexicalErrorBoundary}
					/>
					<HistoryPlugin />
					<MyAutoFocusPlugin />
					<MyWordCountPlugin />
					<MyAutoSavePlugin />
					<MyAutoRefreshPlugin />
				</LexicalComposer>
			</div>
		</div>
	)
}
export default MyEditor
