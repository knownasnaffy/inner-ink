import { create } from 'zustand'

type Actions = {
	loggedIn: boolean
	logIn: () => void
	logOut: () => void
}

const useAuth = create<Actions>((set) => ({
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

export default useAuth
