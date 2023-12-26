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
		<div className='bg-base-300 rounded-tr-btn rounded-bl-btn flex flex-row gap-0.5 p-0.5 pr-1 pt-1 text-sm'>
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
				<span className='-translate-y-0.5'>B</span>
			</button>
			<button
				className={clsx(
					'btn btn-ghost btn-square btn-sm font-serif italic',
					isItalic ? 'btn-active' : '',
				)}
				onClick={() => {
					editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic')
				}}
			>
				I
			</button>
			<button
				className={clsx(
					'btn btn-ghost btn-square btn-sm font-serif underline',
					isUnderline ? 'btn-active' : '',
				)}
				onClick={() => {
					editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline')
				}}
			>
				U
			</button>
			<button
				className={clsx(
					'btn btn-ghost btn-square btn-sm line-through',
					isStrikethrough ? 'btn-active' : '',
				)}
				onClick={() => {
					editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'strikethrough')
				}}
			>
				<span className='-translate-y-0.5'>S</span>
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
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={2}
					stroke='currentColor'
					className='w-4 h-4'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5'
					/>
				</svg>
			</button> */}
		</div>
	)
}

export default MyToolbarPlugin
