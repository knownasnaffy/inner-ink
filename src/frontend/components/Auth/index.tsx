import React from 'react'
import { AuthContext, fakeAuthProvider } from '../../hooks/authStore'

function AuthProvider({ children }: { children: React.ReactNode }) {
	const [user, setUser] = React.useState<unknown>()

	const signin = (newUser: string, callback: VoidFunction) => {
		return fakeAuthProvider.signin(() => {
			setUser(newUser)
			callback()
		})
	}

	const signout = (callback: VoidFunction) => {
		return fakeAuthProvider.signout(() => {
			setUser(undefined!)
			callback()
		})
	}

	const value = { user, signin, signout }

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
