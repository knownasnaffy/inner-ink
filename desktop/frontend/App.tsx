import { useState } from 'react'
import TitleBar from './components/Global/TitleBar'
import { Calendar } from '@/components/ui/calendar'
import { Input } from './components/ui/input'
import { Textarea } from '@/components/ui/textarea'

function App() {
	const [date, setDate] = useState<Date | undefined>(new Date())
	return (
		<>
			<div className='flex flex-col w-full h-screen'>
				<TitleBar />
				<div className='grow p-4 flex'>
					<div className='w-fit px-10 flex flex-col justify-center gap-4'>
						<Input />
						<Calendar
							mode='single'
							selected={date}
							onSelect={setDate}
							toDate={new Date()}
							className='rounded-md border'
						/>
					</div>
					<div className='p-10 w-full'>
						<Textarea className='h-full resize-none' />
					</div>
				</div>
			</div>
		</>
	)
}

export default App
