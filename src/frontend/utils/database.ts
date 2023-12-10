import { format } from 'date-fns'
import Database from 'tauri-plugin-sql-api'

export type Entry = {
	date: string
	title: string
	content: string
}

export const initDB = async () => {
	const database = await Database.load('sqlite:database.db')

	try {
		await database.execute(`
			CREATE TABLE IF NOT EXISTS entries (
				date DATE PRIMARY KEY,
				title TEXT,
				content TEXT
			)
		`)
		console.log('Database initialised')
	} catch (error) {
		console.error(
			'An exception occurred while initialising database',
			error,
		)
	}
}

export const saveEntry = async (date: Date, title: string, content: string) => {
	const database = await Database.load('sqlite:database.db')

	const formattedDate = format(date, 'dd-MM-yyyy')
	const existingRecord: Entry[] = await database.select(
		'SELECT * FROM entries WHERE date = $1',
		[formattedDate],
	)

	await (existingRecord.length > 0
		? database.execute(
				'UPDATE entries SET title = $1, content = $2 WHERE date = $3',
				[title, content, formattedDate],
		  )
		: database.execute(
				'INSERT INTO entries (date, title, content) VALUES ($1, $2, $3)',
				[formattedDate, title, content],
		  ))
}

export const getEntry = async (date: Date): Promise<Entry | undefined> => {
	const database = await Database.load('sqlite:database.db')

	const formattedDate = format(date, 'dd-MM-yyyy')
	const existingRecord: Entry[] = await database.select(
		'SELECT * FROM entries WHERE date = $1',
		[formattedDate],
	)

	return existingRecord.length > 0 ? existingRecord[0] : undefined
}

export const searchEntries = async (query: string) => {
	const database = await Database.load('sqlite:database.db')

	const existingRecord: Entry[] = await database.select(
		`SELECT * FROM entries WHERE content LIKE '%${query}%'`,
	)
	return existingRecord.length > 0 ? existingRecord : undefined
}
