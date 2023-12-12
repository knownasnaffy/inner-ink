import { create } from 'zustand'

type AuthStoreState = {
	newUser: boolean
	loggedIn: boolean
	logIn: () => void
	logOut: () => void
}

const authStore = create<AuthStoreState>((set) => ({
	newUser: true,
	loggedIn: false,
	logIn: () => {
		set(() => ({ loggedIn: true }))
		console.log('Logged In')
	},
	logOut: () => {
		set(() => ({ loggedIn: false }))
		console.log('Logged Out')
	},
}))

export default authStore
