import { useQuery } from '@tanstack/react-query'
import './App.css'
import { delay } from './lib/utils'
import OnBoarding from './views/onboarding'
import { myStore } from './lib/utils/store'
import FullScreenLoader from './components/full-screen-loader'
import FullScreenError from './components/full-screen-error'

function App() {
  const {
    isLoading,
    error,
    data: onBoardingStatus,
  } = useQuery({
    queryKey: ['repoData'],
    queryFn: async (): Promise<string | false> => {
      await delay(1000)
      const status = await myStore.get<string>('onboarding')
      return status ? status : false
    },
  })

  if (isLoading) return <FullScreenLoader />

  if (error)
    return (
      <FullScreenError message='An error occured while trying to get data from the store' />
    )

  return onBoardingStatus !== 'done' ? (
    <OnBoarding onBoarding={onBoardingStatus!} />
  ) : (
    'Welcome back'
  )
}

export default App
