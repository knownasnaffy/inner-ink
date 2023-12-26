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
import MyEmptyCheckPlugin from './MyEmptyCheckPlugin'

const MyEditor = () => {
	return (
		<div className='flex h-full flex-col'>
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
							<ContentEditable className='textarea bg-base-200 box-border h-full rounded-t-none' />
						}
						placeholder={
							<div className='pointer-events-none absolute left-4 top-2.5 select-none text-black/20'>
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
					<MyEmptyCheckPlugin />
				</LexicalComposer>
			</div>
		</div>
	)
}
export default MyEditor
