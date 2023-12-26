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
import MyToolbarPlugin from './MyToolbarPlugin'

const MyEditor = () => {
	return (
		<div className='flex h-full flex-col gap-0.5'>
			<TitleComponent />
			<div className='relative h-full max-h-[calc(100vh-208px)]'>
				<LexicalComposer
					initialConfig={{
						namespace: 'MyEditor',
						theme: editorTheme,
						onError: (error: Error) => console.error(error),
					}}
				>
					<RichTextPlugin
						contentEditable={
							<ContentEditable className='textarea bg-base-200 peer box-border h-full max-h-[calc(100vh-208px)] overflow-auto rounded-none pb-4 focus:border-none focus:outline-none' />
						}
						placeholder={
							<div className='text-base-content/50 peer-focus:text-base-content/20 pointer-events-none absolute left-4 top-2.5 select-none'>
								How was your day?
							</div>
						}
						ErrorBoundary={LexicalErrorBoundary}
					/>
					<HistoryPlugin />
					<MyAutoFocusPlugin />
					<MyAutoSavePlugin />
					<MyAutoRefreshPlugin />
					<MyEmptyCheckPlugin />
					<div className='bg-base-200 rounded-b-btn flex justify-between'>
						<MyToolbarPlugin />
						<MyWordCountPlugin />
					</div>
				</LexicalComposer>
			</div>
		</div>
	)
}
export default MyEditor
