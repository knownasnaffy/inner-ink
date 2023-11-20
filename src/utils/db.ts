// let request: IDBOpenDBRequest
// let db: IDBDatabase
// const dbName = 'diary_db'
// const version = 2
// const entriesStoreName = 'entries_store'

// export interface User {
// 	date: string
// 	title: string
// 	content: string
// }

export const initDB = (): Promise<boolean> => {
	return new Promise((resolve) => {
		console.log('Init successful or something like that.')
		resolve(true)
		// // open the connection
		// request = indexedDB.open(dbName, version)

		// // if new version is available
		// request.onupgradeneeded = (event) => {
		// 	db = (event.target as IDBOpenDBRequest).result

		// 	// if the data object store doesn't exist, create it
		// 	if (!db.objectStoreNames.contains(entriesStoreName)) {
		// 		console.log('Creating entries store')
		// 		db.createObjectStore(entriesStoreName, { keyPath: 'date' })
		// 	}
		// }

		// request.onsuccess = () => {
		// 	// db = (event.target as IDBOpenDBRequest).result
		// 	console.log('initDB - Successfully executed')
		// 	resolve(true)
		// }

		// request.onerror = (event) => {
		// 	const errMsg = (event.target as IDBOpenDBRequest).error?.message
		// 	console.error(errMsg ? errMsg : 'Something bad happened :(')
		// 	resolve(false)
		// }
	})
}

export const addEntry = <T>(data: T): Promise<T | string | null> => {
	return new Promise((resolve) => {
		console.log('Data added successfully I guess?')
		resolve(data)
		// request = window.indexedDB.open(dbName, version)

		// request.onsuccess = () => {
		// 	console.log('request.onsuccess - addData', data)
		// 	db = request.result
		// 	const transaction = db.transaction(entriesStoreName, 'readwrite')
		// 	const store = transaction.objectStore(entriesStoreName)
		// 	store.add(data)
		// 	resolve(data)
		// }

		// request.onerror = () => {
		// 	const error = request.error?.message
		// 	if (error) {
		// 		resolve(error)
		// 	} else {
		// 		resolve('Unknown error')
		// 	}
		// }
	})
}
