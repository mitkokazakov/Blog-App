import RegisterForm from '@/components/RegisterForm'
import React from 'react'

const page = () => {
  return (
    <div className='w-full h-screen bg-[#0f0f11] flex-col gap-8 px-10 py-10'>
      <h1 className=' text-2xl font-bold tracking-widest text-white text-center'>Register User</h1>

      <RegisterForm color={"white"} />
    </div>
  )
}

export default page
