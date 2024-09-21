import {Label} from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
export default function register
() {
  return (
    <div className='mt-10 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white border border-[#121212]  dark:bg-black'>
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-300">
            Please Register
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Provide all the neccessary information
      </p>
    
      <form >
          <div>
              <Label htmlFor='firstname' className='text-neutral-400'> First name</Label>
              <Input id='firstname' placeholder='Enter your first name' type='text' name='firstname' required />

              <Label htmlFor='lastname' className='text-neutral-400'> Last name</Label>
              <Input id='lastname' placeholder='Enter your last name' type='text' name='lastname' />
          </div>
     
           <div>
             <Label className='text-neutral-400'>Email Address</Label>
             <Input
              id='email'
              placeholder='sahil@example.com'
              type='email'
              name='email'
              required={true}
             />
           </div>
           <div>
             <Label htmlFor='password' className='text-neutral-400'>Password</Label>
             <Input
              id='password'
              placeholder='******'
              type='password'
              name='password'
              required={true}
             />
           </div>
          
          <Button className='w-full mt-6' >Sign Up &rarr;</Button>
           <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Alredy have an account? <Link href={'/login'} className='text-black'>Login</Link>
           </p>
      </form>

    </div>
  )
}
