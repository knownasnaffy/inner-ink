// const dbName = 'diary_db'
// let db: IDBDatabase

// const request = window.indexedDB.open(dbName, 1)

// const entriesData = [
// 	{ date: '123456', title: 'YEYE', content: 'yoyoyoyoyoyoyoyoyoyo' },
// 	{ date: '567890', title: 'HeHe', content: 'hihihhihihihihihihhihhi' },
// 	{ date: '278987', title: 'HoHO', content: 'zsetrfghujikjbhgfcxdgtrcy' },
// ]

// request.onerror = () => {
// 	console.error(`Database Error: ${request.error}`)
// }

// request.onupgradeneeded = () => {
// 	db = request.result

// 	const objectStore = db.createObjectStore('entries', { keyPath: 'date' })

// 	objectStore.createIndex('title', 'title', { unique: false })
// 	objectStore.createIndex('content', 'content', { unique: false })

// 	objectStore.transaction.oncomplete = () => {
// 		const entriesObjectStore = db
// 			.transaction('entries', 'readwrite')
// 			.objectStore('entries')
// 		entriesData.forEach((entry) => {
// 			entriesObjectStore.add(entry)
// 		})
// 		console.log('entries added')
// 	}
// }

let request: IDBOpenDBRequest
let db: IDBDatabase
const dbName = 'diary_db'
const version = 2
const entriesStoreName = ''

export interface User {
	date: string
	title: string
	content: string
}

export const initDB = (): Promise<boolean> => {
	return new Promise((resolve) => {
		// open the connection
		request = indexedDB.open(dbName, version)

		// if new version is available
		request.onupgradeneeded = (event) => {
			db = (event.target as IDBOpenDBRequest).result

			// if the data object store doesn't exist, create it
			if (!db.objectStoreNames.contains(entriesStoreName)) {
				console.log('Creating users store')
				db.createObjectStore(entriesStoreName, { keyPath: 'date' })
			}
		}

		request.onsuccess = (event) => {
			db = (event.target as IDBOpenDBRequest).result
			console.log('request.onsuccess - initDB')
			resolve(true)
		}

		request.onerror = (event) => {
			console.error(
				'Something bad happened :(',
				(event.target as IDBOpenDBRequest).error,
			)
			resolve(false)
		}
	})
}
