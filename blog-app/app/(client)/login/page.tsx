import LoginForm from '@/components/LoginForm'
import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image alt="Your Company"
          src="https://logowik.com/content/uploads/images/pirate-skull-with-snakes-and-swords3958.logowik.com.webp"
          className="mx-auto h-10 w-auto"
          width={86}
          height={86}></Image>
        
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <LoginForm />
      
    </div>
  )
}

export default page
