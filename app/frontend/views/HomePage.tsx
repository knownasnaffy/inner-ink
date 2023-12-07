import DateSelector from '../components/Home/DateSelector'
import MyEditor from '../components/Home/MyEditor'
import Header from '../components/Home/Header'

const HomePage = () => {
	return (
		<div className='flex flex-col h-full gap-2 pt-4 pb-6 px-8 md:px-10 lg:px-14 animate-in slide-in-from-right'>
			<Header />
			<div className='grow'>
				<MyEditor />
			</div>
			<DateSelector />
		</div>
	)
}

export default HomePage
