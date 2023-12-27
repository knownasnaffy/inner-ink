/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */

import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { useCallback, useEffect, useRef, useState } from 'react'
import {
	SELECTION_CHANGE_COMMAND,
	FORMAT_TEXT_COMMAND,
	$getSelection,
	$isRangeSelection,
	RangeSelection,
	LexicalEditor,
	BaseSelection,
} from 'lexical'
import { $isLinkNode, TOGGLE_LINK_COMMAND } from '@lexical/link'
import { $isParentElementRTL, $isAtNodeEnd } from '@lexical/selection'
import { $getNearestNodeOfType, mergeRegister } from '@lexical/utils'
import { $isListNode, ListNode } from '@lexical/list'
import { $isHeadingNode } from '@lexical/rich-text'
import { $isCodeNode, getDefaultCodeLanguage } from '@lexical/code'
import clsx from 'clsx'

const LowPriority = 1

function getSelectedNode(selection: RangeSelection) {
	const anchor = selection.anchor
	const focus = selection.focus
	const anchorNode = selection.anchor.getNode()
	const focusNode = selection.focus.getNode()
	if (anchorNode === focusNode) {
		return anchorNode
	}
	const isBackward = selection.isBackward()
	if (isBackward) {
		return $isAtNodeEnd(focus) ? anchorNode : focusNode
	} else {
		return $isAtNodeEnd(anchor) ? focusNode : anchorNode
	}
}

function positionEditorElement(editor: HTMLElement, rect: DOMRect | null) {
	if (rect === null) {
		editor.style.opacity = '0'
		editor.style.top = '-1000px'
		editor.style.left = '-1000px'
	} else {
		editor.style.opacity = '1'
		editor.style.top = `${
			rect.top + rect.height + window.pageYOffset + 10
		}px`
		editor.style.left = `${
			rect.left +
			window.pageXOffset -
			editor.offsetWidth / 2 +
			rect.width / 2
		}px`
	}
}

function FloatingLinkEditor({ editor }: { editor: LexicalEditor }) {
	const editorRef = useRef(null)
	const inputRef = useRef(null)
	const mouseDownRef = useRef(false)
	const [linkUrl, setLinkUrl] = useState('')
	const [isEditMode, setEditMode] = useState(false)
	const [lastSelection, setLastSelection] = useState<BaseSelection>()

	const updateLinkEditor = useCallback(() => {
		const selection = $getSelection()
		if ($isRangeSelection(selection)) {
			const node = getSelectedNode(selection)
			const parent = node.getParent()
			if ($isLinkNode(parent)) {
				setLinkUrl(parent.getURL())
			} else if ($isLinkNode(node)) {
				setLinkUrl(node.getURL())
			} else {
				setLinkUrl('')
			}
		}
		const editorElement = editorRef.current
		const nativeSelection = window.getSelection()
		const activeElement = document.activeElement

		if (editorElement === null) {
			return
		}

		const rootElement = editor.getRootElement()
		if (
			selection !== null &&
			!nativeSelection!.isCollapsed &&
			rootElement !== null &&
			rootElement.contains(nativeSelection!.anchorNode)
		) {
			const domRange = nativeSelection!.getRangeAt(0)
			let rect
			if (nativeSelection!.anchorNode === rootElement) {
				let inner = rootElement
				while (inner.firstElementChild != undefined) {
					inner = inner.firstElementChild
				}
				rect = inner.getBoundingClientRect()
			} else {
				rect = domRange.getBoundingClientRect()
			}

			if (!mouseDownRef.current) {
				positionEditorElement(editorElement, rect)
			}
			setLastSelection(selection)
		} else if (!activeElement || activeElement.className !== 'link-input') {
			positionEditorElement(editorElement, null!)
			setLastSelection(undefined!)
			setEditMode(false)
			setLinkUrl('')
		}

		return true
	}, [editor])

	useEffect(() => {
		return mergeRegister(
			editor.registerUpdateListener(({ editorState }) => {
				editorState.read(() => {
					updateLinkEditor()
				})
			}),

			editor.registerCommand(
				SELECTION_CHANGE_COMMAND,
				() => {
					updateLinkEditor()
					return true
				},
				LowPriority,
			),
		)
	}, [editor, updateLinkEditor])

	useEffect(() => {
		editor.getEditorState().read(() => {
			updateLinkEditor()
		})
	}, [editor, updateLinkEditor])

	useEffect(() => {
		if (isEditMode && inputRef.current) {
			inputRef.current.focus()
		}
	}, [isEditMode])

	return (
		<div ref={editorRef} className='link-editor'>
			{isEditMode ? (
				<input
					ref={inputRef}
					className='link-input'
					value={linkUrl}
					onChange={(event) => {
						setLinkUrl(event.target.value)
					}}
					onKeyDown={(event) => {
						if (event.key === 'Enter') {
							event.preventDefault()
							if (lastSelection !== null) {
								if (linkUrl !== '') {
									editor.dispatchCommand(
										TOGGLE_LINK_COMMAND,
										linkUrl,
									)
								}
								setEditMode(false)
							}
						} else if (event.key === 'Escape') {
							event.preventDefault()
							setEditMode(false)
						}
					}}
				/>
			) : (
				<>
					<div className='link-input'>
						<a
							href={linkUrl}
							target='_blank'
							rel='noopener noreferrer'
						>
							{linkUrl}
						</a>
						<div
							className='link-edit'
							role='button'
							onKeyDown={() => {}}
							tabIndex={0}
							onMouseDown={(event) => event.preventDefault()}
							onClick={() => {
								setEditMode(true)
							}}
						/>
					</div>
				</>
			)}
		</div>
	)
}

const MyToolbarPlugin = () => {
	const [editor] = useLexicalComposerContext()

	const [canUndo, setCanUndo] = useState(false)
	const [canRedo, setCanRedo] = useState(false)
	const [blockType, setBlockType] = useState('paragraph')
	const [selectedElementKey, setSelectedElementKey] = useState(null)
	const [showBlockOptionsDropDown, setShowBlockOptionsDropDown] =
		useState(false)
	const [codeLanguage, setCodeLanguage] = useState('')
	const [isRTL, setIsRTL] = useState(false)
	const [isLink, setIsLink] = useState(false)
	const [isBold, setIsBold] = useState(false)
	const [isItalic, setIsItalic] = useState(false)
	const [isUnderline, setIsUnderline] = useState(false)
	const [isStrikethrough, setIsStrikethrough] = useState(false)
	const [isCode, setIsCode] = useState(false)

	const updateToolbar = useCallback(() => {
		const selection = $getSelection()
		if ($isRangeSelection(selection)) {
			const anchorNode = selection.anchor.getNode()
			const element =
				anchorNode.getKey() === 'root'
					? anchorNode
					: anchorNode.getTopLevelElementOrThrow()
			const elementKey = element.getKey()
			const elementDOM = editor.getElementByKey(elementKey)
			if (elementDOM !== null) {
				setSelectedElementKey(elementKey)
				if ($isListNode(element)) {
					const parentList = $getNearestNodeOfType(
						anchorNode,
						ListNode,
					)
					const type = parentList
						? parentList.getTag()
						: element.getTag()
					setBlockType(type)
				} else {
					const type = $isHeadingNode(element)
						? element.getTag()
						: element.getType()
					setBlockType(type)
					if ($isCodeNode(element)) {
						setCodeLanguage(
							element.getLanguage() || getDefaultCodeLanguage(),
						)
					}
				}
			}
			// Update text format
			setIsBold(selection.hasFormat('bold'))
			setIsItalic(selection.hasFormat('italic'))
			setIsUnderline(selection.hasFormat('underline'))
			setIsStrikethrough(selection.hasFormat('strikethrough'))
			setIsCode(selection.hasFormat('code'))
			setIsRTL($isParentElementRTL(selection))

			// Update links
			const node = getSelectedNode(selection)
			const parent = node.getParent()
			if ($isLinkNode(parent) || $isLinkNode(node)) {
				setIsLink(true)
			} else {
				setIsLink(false)
			}
		}
	}, [editor])

	useEffect(() => {
		return mergeRegister(
			editor.registerUpdateListener(({ editorState }) => {
				editorState.read(() => {
					updateToolbar()
				})
			}),
			editor.registerCommand(
				SELECTION_CHANGE_COMMAND,
				() => {
					updateToolbar()
					return false
				},
				LowPriority,
			),
		)
	}, [updateToolbar, editor])
	return (
		<div className='bg-base-300 rounded-tr-btn rounded-bl-btn flex flex-row gap-0.5 p-1 text-sm'>
			<button
				className={clsx(
					'btn btn-ghost btn-square btn-sm font-extrabold',
					isBold ? 'btn-active' : '',
				)}
				onClick={(event) => {
					event.preventDefault()
					editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold')
				}}
			>
				<svg
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'
					className='h-4 w-4 fill-current stroke-current stroke-[0.5]'
				>
					<path d='M6.935 4.44A1.5 1.5 0 0 1 7.996 4h4.383C15.017 4 17 6.182 17 8.625a4.63 4.63 0 0 1-.865 2.682c1.077.827 1.866 2.12 1.866 3.813C18 18.232 15.3 20 13.12 20H8a1.5 1.5 0 0 1-1.5-1.5l-.004-13c0-.397.158-.779.44-1.06ZM9.5 10.25h2.88c.903 0 1.62-.76 1.62-1.625S13.281 7 12.38 7H9.498l.002 3.25Zm0 3V17h3.62c.874 0 1.88-.754 1.88-1.88 0-1.13-.974-1.87-1.88-1.87H9.5Z' />
				</svg>
			</button>
			<button
				className={clsx(
					'btn btn-ghost btn-square btn-sm',
					isItalic ? 'btn-active' : '',
				)}
				onClick={() => {
					editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic')
				}}
			>
				<svg
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'
					className='h-4 w-4 fill-current stroke-current stroke-[0.5]'
				>
					<path d='M9.75 4h8.504a.75.75 0 0 1 .102 1.493l-.102.006h-3.197L10.037 18.5h4.213a.75.75 0 0 1 .742.648l.007.102a.75.75 0 0 1-.648.743L14.25 20h-9.5a.747.747 0 0 1-.746-.75c0-.38.28-.694.645-.743l.101-.007h3.685l.021-.065L13.45 5.499h-3.7a.75.75 0 0 1-.742-.648L9 4.75a.75.75 0 0 1 .648-.743L9.751 4h8.503-8.503Z' />
				</svg>
			</button>
			<button
				className={clsx(
					'btn btn-ghost btn-square btn-sm',
					isUnderline ? 'btn-active' : '',
				)}
				onClick={() => {
					editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline')
				}}
			>
				<svg
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'
					className='h-4 w-4 fill-current stroke-current stroke-[0.5]'
				>
					<path d='M6.75 19h10.5a.75.75 0 0 1 .102 1.493l-.102.007H6.75a.75.75 0 0 1-.102-1.493L6.75 19h10.5-10.5Zm10.5-15a.75.75 0 0 1 .743.648L18 4.75v6c0 4.394-2.063 6.75-6.003 6.75-3.855 0-5.91-2.255-5.994-6.466L6 10.75v-6a.75.75 0 0 1 1.493-.102l.007.102v6C7.496 14.358 8.933 16 11.997 16c2.985 0 4.428-1.56 4.5-4.976l.003-.274v-6a.75.75 0 0 1 .75-.75Z' />
				</svg>
			</button>
			<button
				className={clsx(
					'btn btn-ghost btn-square btn-sm',
					isStrikethrough ? 'btn-active' : '',
				)}
				onClick={() => {
					editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'strikethrough')
				}}
			>
				<svg
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'
					className='h-4 w-4 fill-current stroke-current stroke-[0.5]'
				>
					<path d='M4.75 12h14.5a.75.75 0 0 1 .102 1.493l-.101.007h-2.975c.88.813 1.336 1.793 1.336 2.935 0 2.825-3.232 4.64-6.754 4.23-2.235-.26-3.809-1.155-4.635-2.702a.75.75 0 0 1 1.323-.707c.57 1.068 1.702 1.712 3.485 1.92 2.743.318 5.081-.995 5.081-2.741 0-1.172-.805-2.127-2.565-2.886l-.116-.049H4.75a.75.75 0 0 1-.743-.648L4 12.75a.75.75 0 0 1 .648-.743L4.75 12h14.5-14.5Zm1.511-3.877c.152-2.83 2.822-4.468 6.324-4.061 2.188.254 3.863 1.053 4.982 2.409a.75.75 0 1 1-1.157.955c-.852-1.033-2.17-1.662-3.999-1.874-2.717-.316-4.65.804-4.65 2.571 0 .772.234 1.348.83 1.982l.128.132c.094.096.197.195.25.24l.031.02H7.08l-.024-.038c-.143-.206-.856-1.195-.795-2.336Z' />
				</svg>
			</button>
			{/* <button
				className={clsx(
					'btn btn-ghost btn-square btn-sm underline font-serif',
					isCode ? 'btn-active' : '',
				)}
				onClick={() => {
					editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'code')
				}}
			>
				<svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m8.066 18.943 6.5-14.5a.75.75 0 0 1 1.404.518l-.036.096-6.5 14.5a.75.75 0 0 1-1.404-.518l.036-.096 6.5-14.5-6.5 14.5ZM2.22 11.47l4.25-4.25a.75.75 0 0 1 1.133.976l-.073.085L3.81 12l3.72 3.719a.75.75 0 0 1-.976 1.133l-.084-.073-4.25-4.25a.75.75 0 0 1-.073-.976l.073-.084 4.25-4.25-4.25 4.25Zm14.25-4.25a.75.75 0 0 1 .976-.073l.084.073 4.25 4.25a.75.75 0 0 1 .073.976l-.073.085-4.25 4.25a.75.75 0 0 1-1.133-.977l.073-.084L20.19 12l-3.72-3.72a.75.75 0 0 1 0-1.06Z" fill="#212121"/></svg>
			</button> */}
		</div>
	)
}

export default MyToolbarPlugin
