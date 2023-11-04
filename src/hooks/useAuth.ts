import { redirect, useNavigate } from 'react-router-dom'
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
		const navigate = useNavigate()
		navigate('/')
	},
	logOut: () => {
		set(() => ({ loggedIn: false }))
		console.log('Logged Out')
		redirect('/login')
	},
}))

export default useAuth
