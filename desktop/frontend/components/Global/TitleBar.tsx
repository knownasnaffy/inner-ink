import {
	Menubar,
	MenubarCheckboxItem,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarRadioGroup,
	MenubarRadioItem,
	MenubarSeparator,
	MenubarShortcut,
	MenubarSub,
	MenubarSubContent,
	MenubarSubTrigger,
	MenubarTrigger,
} from '@/components/ui/menubar'
import {
	Cross1Icon,
	EnterFullScreenIcon,
	MinusIcon,
} from '@radix-ui/react-icons'
import { Button } from '../ui/button'
import { getCurrentWindow } from '@tauri-apps/api/window'

const TitleBar = () => {
		const appWindow = getCurrentWindow()
	// 		?.addEventListener('click', () => appWindow.minimize())
	// 	document
	// 		.getElementById('titlebar-maximize')
	// 		?.addEventListener('click', () => appWindow.toggleMaximize())
	// 	document
	// 		.getElementById('titlebar-close')
	// 		?.addEventListener('click', () => appWindow.close())
	// })
	return (
		<div
			data-tauri-drag-region
			className='h-fit w-full flex flex-row border-b select-none'
		>
			<Menubar data-tauri-drag-region className='rounded-none w-full py-0.5 border-none shadow-none'>
				<MenubarMenu>
					<MenubarTrigger className='px-2.5 py-1 font-bold select-none'>
						Inner Ink
					</MenubarTrigger>
					<MenubarContent sideOffset={2} alignOffset={0}>
						<MenubarItem>
							New Tab <MenubarShortcut>⌘T</MenubarShortcut>
						</MenubarItem>
						<MenubarItem>
							New Window <MenubarShortcut>⌘N</MenubarShortcut>
						</MenubarItem>
						<MenubarItem disabled>New Incognito Window</MenubarItem>
						<MenubarSeparator />
						<MenubarSub>
							<MenubarSubTrigger>Share</MenubarSubTrigger>
							<MenubarSubContent>
								<MenubarItem>Email link</MenubarItem>
								<MenubarItem>Messages</MenubarItem>
								<MenubarItem>Notes</MenubarItem>
							</MenubarSubContent>
						</MenubarSub>
						<MenubarSeparator />
						<MenubarItem>
							Print... <MenubarShortcut>⌘P</MenubarShortcut>
						</MenubarItem>
					</MenubarContent>
				</MenubarMenu>
				<MenubarMenu>
					<MenubarTrigger className='px-2.5 py-1 select-none'>
						File
					</MenubarTrigger>
					<MenubarContent sideOffset={2} alignOffset={0}>
						<MenubarItem>
							New Tab <MenubarShortcut>⌘T</MenubarShortcut>
						</MenubarItem>
						<MenubarItem>
							New Window <MenubarShortcut>⌘N</MenubarShortcut>
						</MenubarItem>
						<MenubarItem disabled>New Incognito Window</MenubarItem>
						<MenubarSeparator />
						<MenubarSub>
							<MenubarSubTrigger>Share</MenubarSubTrigger>
							<MenubarSubContent>
								<MenubarItem>Email link</MenubarItem>
								<MenubarItem>Messages</MenubarItem>
								<MenubarItem>Notes</MenubarItem>
							</MenubarSubContent>
						</MenubarSub>
						<MenubarSeparator />
						<MenubarItem>
							Print... <MenubarShortcut>⌘P</MenubarShortcut>
						</MenubarItem>
					</MenubarContent>
				</MenubarMenu>
				<MenubarMenu>
					<MenubarTrigger className='px-2.5 py-1 select-none'>
						Edit
					</MenubarTrigger>
					<MenubarContent sideOffset={2} alignOffset={0}>
						<MenubarItem>
							Undo <MenubarShortcut>⌘Z</MenubarShortcut>
						</MenubarItem>
						<MenubarItem>
							Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
						</MenubarItem>
						<MenubarSeparator />
						<MenubarSub>
							<MenubarSubTrigger>Find</MenubarSubTrigger>
							<MenubarSubContent>
								<MenubarItem>Search the web</MenubarItem>
								<MenubarSeparator />
								<MenubarItem>Find...</MenubarItem>
								<MenubarItem>Find Next</MenubarItem>
								<MenubarItem>Find Previous</MenubarItem>
							</MenubarSubContent>
						</MenubarSub>
						<MenubarSeparator />
						<MenubarItem>Cut</MenubarItem>
						<MenubarItem>Copy</MenubarItem>
						<MenubarItem>Paste</MenubarItem>
					</MenubarContent>
				</MenubarMenu>
				<MenubarMenu>
					<MenubarTrigger className='px-2.5 py-1 select-none'>
						View
					</MenubarTrigger>
					<MenubarContent sideOffset={2} alignOffset={0}>
						<MenubarCheckboxItem>
							Always Show Bookmarks Bar
						</MenubarCheckboxItem>
						<MenubarCheckboxItem checked>
							Always Show Full URLs
						</MenubarCheckboxItem>
						<MenubarSeparator />
						<MenubarItem inset>
							Reload <MenubarShortcut>⌘R</MenubarShortcut>
						</MenubarItem>
						<MenubarItem disabled inset>
							Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
						</MenubarItem>
						<MenubarSeparator />
						<MenubarItem inset>Toggle Fullscreen</MenubarItem>
						<MenubarSeparator />
						<MenubarItem inset>Hide Sidebar</MenubarItem>
					</MenubarContent>
				</MenubarMenu>
				<MenubarMenu>
					<MenubarTrigger className='px-2.5 py-1 select-none'>
						Profiles
					</MenubarTrigger>
					<MenubarContent sideOffset={2} alignOffset={0}>
						<MenubarRadioGroup value='benoit'>
							<MenubarRadioItem value='andy'>
								Andy
							</MenubarRadioItem>
							<MenubarRadioItem value='benoit'>
								Benoit
							</MenubarRadioItem>
							<MenubarRadioItem value='Luis'>
								Luis
							</MenubarRadioItem>
						</MenubarRadioGroup>
						<MenubarSeparator />
						<MenubarItem inset>Edit...</MenubarItem>
						<MenubarSeparator />
						<MenubarItem inset>Add Profile...</MenubarItem>
					</MenubarContent>
				</MenubarMenu>
			</Menubar>
			<div className='flex flex-row'>
				<Button
					className='px-3 h-full rounded-none select-none cursor-default'
					variant={'ghost'}
					id='titlebar-minimize'
					onClick={() => appWindow.minimize()}
				>
						<MinusIcon />
				</Button>
				<Button
					className='px-3 h-full rounded-none select-none cursor-default'
					variant={'ghost'}
					id='titlebar-maximize'
					onClick={() => appWindow.toggleMaximize()}
				>
						<EnterFullScreenIcon />
				</Button>
				<Button
					className='px-3 h-full rounded-none select-none cursor-default'
					variant={'ghost'}
					id='titlebar-close'
					onClick={() => appWindow.close()}
				>
						<Cross1Icon />
				</Button>
			</div>
		</div>
	)
}

export default TitleBar
