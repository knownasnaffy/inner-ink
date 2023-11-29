import { format } from 'date-fns'
import Database from 'tauri-plugin-sql-api'

export type Entry = {
	date: string
	title: string
	content: string
}

export const initDB = async () => {
	const db = await Database.load('sqlite:database.db')

	try {
		await db.execute(`
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
	const db = await Database.load('sqlite:database.db')

	const formattedDate = format(date, 'dd-MM-yyyy')
	const existingRecord: Entry[] = await db.select(
		'SELECT * FROM entries WHERE date = $1',
		[formattedDate],
	)

	if (existingRecord.length !== 0) {
		await db.execute(
			'UPDATE entries SET title = $1, content = $2 WHERE date = $3',
			[title, content, formattedDate],
		)
		console.log('Updating existing entry')
		console.log(existingRecord)
	} else {
		await db.execute(
			'INSERT INTO entries (date, title, content) VALUES ($1, $2, $3)',
			[formattedDate, title, content],
		)
		console.log('Adding new entry')
	}
}

export const getEntry = async (date: Date): Promise<Entry | null> => {
	const db = await Database.load('sqlite:database.db')

	const formattedDate = format(date, 'dd-MM-yyyy')
	const existingRecord: Entry[] = await db.select(
		'SELECT * FROM entries WHERE date = $1',
		[formattedDate],
	)

	if (existingRecord.length !== 0) {
		console.log('Entry found', existingRecord)
		return existingRecord[0]
	} else return null
}
