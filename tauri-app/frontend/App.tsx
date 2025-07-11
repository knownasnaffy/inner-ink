import { useQuery } from '@tanstack/react-query'
import './App.css'
import { isOnboarding } from './lib/utils/user'
import ErrorWithMessage from './components/error'
import OnBoarding from './views/onboarding'

function App() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: isOnboarding,
  })

  if (isLoading)
    return (
      <div className='flex h-screen items-center justify-center'>
        <span className='loading loading-spinner loading-xl text-primary lg:scale-125'></span>
      </div>
    )

  if (error)
    return (
      <div className='flex h-screen items-center justify-center'>
        <ErrorWithMessage message='An error occured while trying to get data from the store' />
      </div>
    )

  return <main className=''>{data ? <OnBoarding /> : 'Welcome back'}</main>
}

export default App
