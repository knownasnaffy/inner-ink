const shortcuts = [
	{
		id: 'to-home',
		function: 'Go to Home',
		default: 'ctrl+h',
		scope: 'global',
	},
	{
		id: 'to-search',
		function: 'Go to Search',
		default: 'ctrl+s',
		scope: 'global',
	},
	{
		id: 'to-shortcuts',
		function: 'Go to Shortcuts',
		default: 'ctrl+k',
		scope: 'global',
	},
	{
		id: 'to-settings',
		function: 'Go to Settings',
		default: 'ctrl+,',
		scope: 'global',
	},
	{
		id: 'day-picker',
		function: 'Open day picker',
		default: 'ctrl+d',
		scope: 'home',
	},
	{
		id: 'next-day',
		function: 'Go to next day',
		default: 'ctrl+tab',
		scope: 'home',
	},
	{
		id: 'previous-day',
		function: 'Go to previous day',
		default: 'ctrl+shift+tab',
		scope: 'home',
	},
]

export default shortcuts

export function getShortcut(id: string) {
	return shortcuts.find((shortcut) => shortcut.id === id)?.default
}

export const defaultShortcutOptions = {
	splitKey: ' ',
}

export const globalShortcutOptions = {
	...defaultShortcutOptions,
	enableOnContentEditable: true,
	enableOnFormTags: true,
}
