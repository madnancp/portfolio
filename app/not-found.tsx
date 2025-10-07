import { InfoIcon } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='w-full flex justify-center items-center h-[88vh] gap-2'>
      <InfoIcon size={18} className='text-destructive' />
      <h1 className='text-md'>PageNotFoundError: </h1>
      <div>
        <Link href="/">Go back to Home</Link>
      </div>
    </div>
  )
}
