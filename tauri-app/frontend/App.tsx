import { useQuery } from '@tanstack/react-query'
import { motion } from 'framer-motion'
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
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className='flex h-screen items-center justify-center'
      >
        <span className='loading loading-spinner loading-xl text-primary lg:scale-125'></span>
      </motion.div>
    )

  if (error)
    return (
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className='flex h-screen items-center justify-center'
      >
        <ErrorWithMessage message='An error occured while trying to get data from the store' />
      </motion.div>
    )

  return data ? <OnBoarding /> : 'Welcome back'
}

export default App
