import React from 'react'

/**
 * This represents some generic auth provider API, like Firebase.
 */
export const fakeAuthProvider = {
	isAuthenticated: false,
	signin(callback: VoidFunction) {
		fakeAuthProvider.isAuthenticated = true
		setTimeout(callback, 100) // fake async
	},
	signout(callback: VoidFunction) {
		fakeAuthProvider.isAuthenticated = false
		setTimeout(callback, 100)
	},
}

interface AuthContextType {
	user: unknown
	signin: (user: string, callback: VoidFunction) => void
	signout: (callback: VoidFunction) => void
}

export const AuthContext = React.createContext<AuthContextType>(undefined!)

export function useAuth() {
	return React.useContext(AuthContext)
}
