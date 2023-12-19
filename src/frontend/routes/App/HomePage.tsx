import DateSelector from '../../components/App/Home/DateSelector'
import MyEditor from '../../components/App/Home/MyEditor'
import Header from '../../components/App/Home/Header'

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
