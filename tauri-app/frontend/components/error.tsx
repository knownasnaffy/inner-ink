import { CircleX } from 'lucide-react'

export default function ErrorWithMessage({ message }: { message?: string }) {
  return (
    <div role='alert' className='alert alert-error'>
      <CircleX className='size-5' />
      <span>{message}</span>
    </div>
  )
}
