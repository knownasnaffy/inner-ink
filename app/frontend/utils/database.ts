import { format, parse } from 'date-fns'
import Database from 'tauri-plugin-sql-api'

export type Entry = {
	date: string
	title: string
	content: string
}

export type User = {
	name: string
	password: string
}

export const initDB = async (): Promise<Database | undefined> => {
	const database = await Database.load('sqlite:database.db')

	try {
		await database.execute(`
			CREATE TABLE IF NOT EXISTS entries (
				date DATE PRIMARY KEY,
				title TEXT,
				content TEXT
			)
		`)
		await database.execute(`
			CREATE TABLE IF NOT EXISTS user (
				name TEXT,
				password TEXT
			)
		`)
		console.log('Database initialised')
		return database
	} catch (error) {
		console.error(
			'An exception occurred while initialising database',
			error,
		)
	}
}

import bcrypt from 'bcryptjs'

async function hashPassword(password: string): Promise<string> {
	const saltRounds = 10 // Salt rounds for bcrypt
	const hashedPassword = await bcrypt.hash(password, saltRounds)
	return hashedPassword
}

export const getUser = async (): Promise<User | undefined> => {
	const database = await initDB()
	const user: User[] = await database!.select('SELECT * FROM user')

	return user.length > 0 ? user[0] : undefined
}

export const saveUser = async (
	name: string,
	password: string,
): Promise<void> => {
	const hashedPassword = await hashPassword(password)
	const database = await Database.load('sqlite:database.db')
	const user: User[] = await database.select('SELECT * FROM user')

	await (user.length > 0
		? database.execute(
				'UPDATE user SET name = $1, password = $2 WHERE name = $3',
				[name, hashedPassword, user[0].name],
			)
		: database.execute(
				'INSERT INTO user (name, password) VALUES ($1, $2)',
				[name, hashedPassword],
			))
}

export const verifyUser = async (password: string): Promise<boolean> => {
	const user = await getUser()

	return user && (await bcrypt.compare(password, user!.password))
		? true
		: false
}

export const setEntryTitle = async (date: Date, title: string) => {
	const database = await Database.load('sqlite:database.db')

	const formattedDate = format(date, 'dd-MM-yyyy')
	const existingRecord: Entry[] = await database.select(
		'SELECT * FROM entries WHERE date = $1',
		[formattedDate],
	)

	await (existingRecord.length > 0
		? database.execute('UPDATE entries SET title = $1 WHERE date = $2', [
				title,
				formattedDate,
			])
		: database.execute(
				'INSERT INTO entries (date, title) VALUES ($1, $2)',
				[formattedDate, title],
			))
}
export const setEntryContent = async (date: Date, content: string) => {
	const database = await Database.load('sqlite:database.db')

	const formattedDate = format(date, 'dd-MM-yyyy')
	const existingRecord: Entry[] = await database.select(
		'SELECT * FROM entries WHERE date = $1',
		[formattedDate],
	)

	await (existingRecord.length > 0
		? database.execute('UPDATE entries SET content = $1 WHERE date = $2', [
				content,
				formattedDate,
			])
		: database.execute(
				'INSERT INTO entries (date, content) VALUES ($1, $2)',
				[formattedDate, content],
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

	const entries: Entry[] = await database.select(
		`SELECT * FROM entries WHERE content LIKE '%${query}%'`,
	)
	return entries.length > 0 ? entries : undefined
}

export const clearEntries = async () => {
	const database = await Database.load('sqlite:database.db')

	await database.execute('DELETE FROM entries')
}

export const getEditedDates = async () => {
	const database = await Database.load('sqlite:database.db')

	const entries: Entry[] = await database.select('SELECT * FROM entries')

	const filteredDates: Date[] = entries
		// .filter(
		// 	(entry) => entry.title.trim() !== '' || entry.content.trim() !== '',
		// )
		.map((entry) => parse(entry.date, 'dd-MM-yyyy', new Date()))

	return filteredDates
}
