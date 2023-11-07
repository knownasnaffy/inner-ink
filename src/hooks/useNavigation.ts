import { create } from 'zustand'

type NavigatorState = {
	route: ValidRoute
	navigate: (newRoute: ValidRoute) => void
}

export type ValidRoute = '/' | '/search' | '/bookmarks' | '/settings' | '/login' | '/register'

const useNavigation = create<NavigatorState>()((set) => ({
	route: '/',
	navigate: (newRoute) => set(() => ({route: newRoute}))
}))

export default useNavigation
