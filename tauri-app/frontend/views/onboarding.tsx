import { motion } from 'framer-motion'
import { FormEventHandler, useState } from 'react'
import { setUserName } from '../lib/utils/user'
import { Circle } from 'lucide-react'
import { invoke } from '@tauri-apps/api/core'
import {
  Select,
  SelectContent,
  selectItem,
  SelectOption,
  SelectTrigger,
} from '../components/ui/select'
import defaultRecoveryQuestions from '../lib/db/default-recovery-questions'
import { myStore } from '../lib/utils/store'

export default function OnBoarding({
  onBoarding,
}: {
  onBoarding: string | false
}) {
  const [step, setStep] = useState(onBoarding === 'password' ? 2 : 0)

  return (
    <div className='flex h-screen items-center justify-center'>
      {step === 0 && <OnBoardingIntro setStep={setStep} />}
      {step === 1 && <OnBoardingName setStep={setStep} />}
      {step === 2 && <OnBoardingPassword setStep={setStep} />}
      {step === 3 && <OnBoardingRecovery setStep={setStep} />}
      <button
        className='btn btn-square btn-primary btn-ghost absolute right-4 top-4'
        onClick={() => setStep(0)}
      >
        <Circle className='' />
      </button>
    </div>
  )
}

function OnBoardingIntro({ setStep }: { setStep(step: number): void }) {
  return (
    <motion.div
      layoutId='0'
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className='card w-full max-w-md'
    >
      <div className='card-body items-center text-center'>
        <h2 className='card-title'>Welcome to Inner Ink</h2>
        <p>Let's get you on board by going through a few steps.</p>
        <button onClick={() => setStep(1)} className='btn btn-primary mt-5'>
          Continue
        </button>
      </div>
    </motion.div>
  )
}

function OnBoardingName({ setStep }: { setStep(step: number): void }) {
  const submitUserName: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    const nameInput = event.currentTarget.elements.namedItem(
      'name',
    ) as HTMLInputElement

    await setUserName(nameInput.value).then(() => {
      setStep(2)
    })
  }

  return (
    <motion.div
      layoutId='1'
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className='card w-full max-w-md'
    >
      <div className='card-body items-center text-center'>
        <h2 className='card-title'>What can I call you?</h2>
        <p>This may be used to address you in the future.</p>
        <form
          className='join join-vertical mt-3 w-full'
          onSubmit={submitUserName}
        >
          <input
            name='name'
            className='input join-item focus-within:input-primary w-full text-center'
            placeholder='John Doe'
          />
          <div className='join'>
            <button
              onClick={() => setUserName('')}
              className='btn btn-neutral join-item grow rounded-r-none'
            >
              Skip
            </button>
            <button
              type='submit'
              className='btn btn-primary join-item grow rounded-l-none'
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  )
}
function OnBoardingPassword({ setStep }: { setStep(step: number): void }) {
  const [whitespaceError, setWhitespaceError] = useState(false)

  const storePassword: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()

    const passwordInput = event.currentTarget.elements.namedItem(
      'password',
    ) as HTMLInputElement
    if (passwordInput.value.trim().length === 0) return setWhitespaceError(true)

    await invoke('store_password', {
      password: passwordInput.value,
    }).then(() => setStep(3))
  }

  return (
    <motion.div
      layoutId='2'
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className='card w-full max-w-md'
    >
      <div className='card-body items-center text-center'>
        <h2 className='card-title'>Hello, mate!</h2>
        <p>Let's secure your diary by creating a password.</p>
        <form
          className='join join-vertical mt-3 w-full'
          onSubmit={storePassword}
        >
          <input
            className='input join-item focus-within:input-primary w-full text-center'
            name='password'
            placeholder='********'
          />
          <button type='submit' className='btn btn-primary join-item grow'>
            Continue
          </button>
          {whitespaceError && (
            <span className='text-error mt-3'>Whitespaces? Seriously?</span>
          )}
        </form>
      </div>
    </motion.div>
  )
}

function OnBoardingRecovery({}: { setStep(step: number): void }) {
  const [whitespaceError, setWhitespaceError] = useState(false)
  const [question1, setQuestion1] = useState<selectItem>(
    defaultRecoveryQuestions[0],
  )
  const [question2, setQuestion2] = useState<selectItem>(
    defaultRecoveryQuestions[1],
  )

  const storeRecoveryQuestionAndAnswer: FormEventHandler<
    HTMLFormElement
  > = async (event) => {
    event.preventDefault()

    const answer1Input = event.currentTarget.elements.namedItem(
      'answer1',
    ) as HTMLInputElement
    if (answer1Input.value.trim().length === 0) return setWhitespaceError(true)

    const answer2Input = event.currentTarget.elements.namedItem(
      'answer2',
    ) as HTMLInputElement
    if (answer2Input.value.trim().length === 0) return setWhitespaceError(true)

    await invoke('setup_recovery', {
      questions: [question1, question2],
      answers: [answer1Input.value, answer2Input.value],
    }).then(async () => {
      await myStore
        .set('onboarding', 'done')
        .then(() => window.location.reload())
    })
  }

  return (
    <motion.div
      layoutId='3'
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className='card w-full max-w-md'
    >
      <div className='card-body items-center text-center'>
        <h2 className='card-title'>To be on the safe side</h2>
        <p>
          Just in case you forget your password, let's add a recovery question.
        </p>
        <form
          className='join join-vertical mt-3 w-full'
          onSubmit={storeRecoveryQuestionAndAnswer}
        >
          {/* Question 1 */}
          <Select value={question1} onChange={setQuestion1}>
            <SelectTrigger className='focus-within:select-primary join-item'>
              {question1?.name || 'Select first question'}
            </SelectTrigger>
            <SelectContent>
              {defaultRecoveryQuestions
                .filter((q) => q.id !== question2?.id)
                .map((item) => (
                  <SelectOption key={item.id} value={item} />
                ))}
            </SelectContent>
          </Select>
          <input
            className='input join-item focus-within:input-primary w-full px-4'
            name='answer1'
            placeholder={
              (question1 as (typeof defaultRecoveryQuestions)[0])
                .answerPlaceholder || 'Answer to first question'
            }
          />

          {/* Question 2 */}
          <Select value={question2} onChange={setQuestion2}>
            <SelectTrigger className='focus-within:select-primary join-item'>
              {question2?.name || 'Select second question'}
            </SelectTrigger>
            <SelectContent>
              {defaultRecoveryQuestions
                .filter((q) => q.id !== question1?.id)
                .map((item) => (
                  <SelectOption key={item.id} value={item} />
                ))}
            </SelectContent>
          </Select>
          <input
            className='input join-item focus-within:input-primary w-full px-4'
            name='answer2'
            placeholder={
              (question2 as (typeof defaultRecoveryQuestions)[0])
                ?.answerPlaceholder || 'Answer to second question'
            }
          />

          <button type='submit' className='btn btn-primary join-item grow'>
            Continue
          </button>
          {whitespaceError && (
            <span className='text-error mt-3'>Whitespaces? Seriously?</span>
          )}
        </form>
      </div>
    </motion.div>
  )
}
