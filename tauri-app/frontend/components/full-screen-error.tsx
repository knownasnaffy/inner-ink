import { motion } from 'framer-motion'
import ErrorWithMessage from './error'

export default function FullScreenError({ message }: { message?: string }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className='flex h-screen items-center justify-center'
    >
      <ErrorWithMessage message={message} />
    </motion.div>
  )
}
