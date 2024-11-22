import { useState } from 'react'
import TitleBar from './components/Global/TitleBar'
import { Calendar } from '@/components/ui/calendar'
import { Input } from './components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from './components/ui/button'
import { ExitIcon } from '@radix-ui/react-icons'

function App() {
	const [date, setDate] = useState<Date | undefined>(new Date())
	return (
		<>
			<div className='flex flex-col w-full h-screen'>
				<TitleBar />
				<div className='grow p-10 gap-8 flex'>
					<div className='w-fit flex flex-col justify-center gap-4'>
						<div className='flex gap-2'>
							<Input className='' />
							<Button variant='outline' size='icon' className='px-2' >
								<ExitIcon className='size-4' />
							</Button>
						</div>
						<Calendar
							mode='single'
							selected={date}
							onSelect={setDate}
							toDate={new Date()}
							className='rounded-md border'
						/>
					</div>
					<div className='w-full flex items-center'>
						<Textarea className='h-full max-h-96 resize-none' />
					</div>
				</div>
			</div>
		</>
	)
}

export default App
