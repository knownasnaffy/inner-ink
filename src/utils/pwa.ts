import { registerSW } from 'virtual:pwa-register'
import swStore from '../hooks/swStore'

export const updateSW = registerSW({
	onRegisteredSW() {
		console.info('SW Registered')
	},
	onNeedRefresh() {
		console.info('App needs refresh')
		const setNeedsRefresh = swStore((state) => state.setNeedsRefresh)
		setNeedsRefresh()
	},
	onOfflineReady() {
		console.info('App is ready to run offline')
		const setOfflineReady = swStore((state) => state.setOfflineReady)
		setOfflineReady()
	},
})
