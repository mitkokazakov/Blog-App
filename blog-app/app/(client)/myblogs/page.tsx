import SingleBlog from '@/components/SingleBlog'
import React from 'react'

const page = () => {
  return (
    <div className='w-full min-h-screen bg-[#ffffd7] px-5 py-10 flex flex-col gap-10'>
      <h1 className=' font-bold tracking-widest text-2xl text-center'>My Blogs</h1>

      <div className="w-full flex flex-col gap-8 md:items-center md:justify-center">
        <SingleBlog />
        <SingleBlog />
        <SingleBlog />
      </div>
    </div>
  )
}

export default page
