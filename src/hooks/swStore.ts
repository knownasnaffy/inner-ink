import { create } from 'zustand'

type SWStoreState = {
	needsRefresh: boolean
	offlineReady: boolean
	setNeedsRefresh(value?: boolean): void
	setOfflineReady(value?: boolean): void
}

const swStore = create<SWStoreState>((set) => ({
	needsRefresh: false,
	setNeedsRefresh(value) {
		set(() => ({ needsRefresh: value || true }))
	},
	offlineReady: false,
	setOfflineReady(value) {
		set(() => ({ offlineReady: value || true }))
	},
}))

export default swStore
