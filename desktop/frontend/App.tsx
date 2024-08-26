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

function App() {
	return (
		<>
			<div className='flex flex-col w-full h-screen'>
				<Menubar className='rounded-none w-full p-0.5 h-10'>
					<MenubarMenu>
						<MenubarTrigger className='px-2.5 py-1 font-bold'>Inner Ink</MenubarTrigger>
						<MenubarContent sideOffset={2} alignOffset={0}>
							<MenubarItem>
								New Tab <MenubarShortcut>⌘T</MenubarShortcut>
							</MenubarItem>
							<MenubarItem>
								New Window <MenubarShortcut>⌘N</MenubarShortcut>
							</MenubarItem>
							<MenubarItem disabled>
								New Incognito Window
							</MenubarItem>
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
						<MenubarTrigger className='px-2.5 py-1'>File</MenubarTrigger>
						<MenubarContent sideOffset={2} alignOffset={0}>
							<MenubarItem>
								New Tab <MenubarShortcut>⌘T</MenubarShortcut>
							</MenubarItem>
							<MenubarItem>
								New Window <MenubarShortcut>⌘N</MenubarShortcut>
							</MenubarItem>
							<MenubarItem disabled>
								New Incognito Window
							</MenubarItem>
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
						<MenubarTrigger className='px-2.5 py-1'>Edit</MenubarTrigger>
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
						<MenubarTrigger className='px-2.5 py-1'>View</MenubarTrigger>
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
								Force Reload{' '}
								<MenubarShortcut>⇧⌘R</MenubarShortcut>
							</MenubarItem>
							<MenubarSeparator />
							<MenubarItem inset>Toggle Fullscreen</MenubarItem>
							<MenubarSeparator />
							<MenubarItem inset>Hide Sidebar</MenubarItem>
						</MenubarContent>
					</MenubarMenu>
					<MenubarMenu>
						<MenubarTrigger className='px-2.5 py-1'>Profiles</MenubarTrigger>
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
				<div className="grow"></div>
			</div>
		</>
	)
}

export default App
