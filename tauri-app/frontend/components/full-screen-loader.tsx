import { motion } from 'framer-motion'

export default function FullScreenLoader({
  animateIn = true,
}: {
  animateIn?: boolean
}) {
  return (
    <motion.div
      initial={animateIn && { y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className='flex h-screen items-center justify-center'
    >
      <span className='loading loading-spinner loading-xl text-primary lg:scale-125'></span>
    </motion.div>
  )
}
