import MyEditor from '../../components/App/Home/MyEditor'
import Header from '../../components/App/Home/Header'

const HomePage = () => {
	return (
		<div className='animate-in slide-in-from-right flex h-full flex-col gap-2 px-8 pb-6 pt-4 md:px-10 lg:px-14'>
			<Header />
			<div className='grow'>
				<MyEditor />
			</div>
		</div>
	)
}

export default HomePage
