import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
export default function OnBoarding() {
  const [step, setStep] = useState(0)
  return (
    <div className='flex h-screen items-center justify-center'>
      {step === 0 && (
        <motion.div
          layoutId='1'
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className='card max-w-lg'
        >
          <div className='card-body items-center text-center'>
            <h2 className='card-title'>Welcome to Inner Ink</h2>
            <p>Let's get you on board by going through a few steps.</p>
            <button onClick={() => setStep(1)} className='btn btn-primary mt-5'>
              Continue
            </button>
          </div>
        </motion.div>
      )}
      {step === 1 && (
        <motion.div
          layoutId='2'
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className='card max-w-lg'
        >
          <div className='card-body items-center text-center'>
            <h2 className='card-title'>What can I call you?</h2>
            <p>This may be used to address you in the future.</p>
            <div className='join join-vertical mt-3 w-full'>
              <input className='input join-item focus-within:input-primary' />
              <div className='join'>
                <button
                  onClick={() => setStep(0)}
                  className='btn btn-neutral join-item grow rounded-r-none'
                >
                  Skip
                </button>
                <button
                  onClick={() => setStep(0)}
                  className='btn btn-primary join-item grow rounded-l-none'
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}
