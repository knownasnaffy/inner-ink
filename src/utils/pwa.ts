import { registerSW } from 'virtual:pwa-register'
import swStore from '../hooks/swStore'

export const updateSW = registerSW({
	onRegisteredSW(_swScriptUrl, registration) {
		console.info('SW Registered: ' + registration)
	},
	onNeedRefresh() {
		console.log('App needs refresh')
		const setNeedsRefresh = swStore((state) => state.setNeedsRefresh)
		setNeedsRefresh()
	},
	onOfflineReady() {
		console.log('App is ready to run offline')
		const setOfflineReady = swStore((state) => state.setOfflineReady)
		setOfflineReady()
	},
})
