import { GetUserByIdWithBlogs } from '@/app/lib/services'
import BlogRow from '@/components/AdminComponents/BlogRow'
import React from 'react'
import nouserImg from '../../../../../public/admindesktop.png';
import Image from 'next/image';
import { revalidatePath } from 'next/cache';

type UserParams = {
  params:{
    userId: string
  }
}

const page = async ({params}: UserParams) => {

  
  const user = await GetUserByIdWithBlogs(params.userId);
  revalidatePath(`/dashboard/users/${params.userId}`)

  return (
    <div className='w-full bg-[#0f0f11] mih-h-screen text-white flex flex-col gap-8 px-10 py-10'>
     <div>
        <h1 className="font-bold tracking-widest text-2xl mb-10">User Info</h1>
      </div>

      <div className='flex justify-center items-center gap-40'>
        <div className='w-72 h-72 rounded-full overflow-hidden'>
          
          

            {
              //user?.image != null ? <img src={user?.image as string} alt="user" className='w-full h-full rounded-full'/> : null
              user?.image != null ? <Image src={user?.image as string} width={288} height={288} alt='no user image' className='w-full h-full rounded-full'></Image> : null
            }
            {
              // user?.image == null ? <img src="/admindesktop.png" alt="user" className='w-full h-full rounded-full bg-white'/> : null
              user?.image == null ? <Image src={nouserImg} width={288} height={288} alt='no user image' className='w-full h-full rounded-full'></Image> : null
            }
        </div>

        <div className='flex flex-col justify-start items-start gap-5'>
            <h1 className='text-2xl font-bold tracking-widest'>{user?.name}</h1>
            <p>Role: <span className='font-bold tracking-widest'>{user?.role}</span></p>
            <p>Email: <span className='font-bold tracking-widest'>{user?.email}</span></p>
        </div>
      </div>

      <div>

      <h1 className='text-2xl font-bold tracking-widest text-center mb-5'>User blogs</h1>

      <table className="table-auto border-collapse border border-slate-400 w-full">

        
            <thead>
              <tr>
                <th className="text-left border border-slate-800 px-4 py-4">
                  Blog Title
                </th>
                <th className="text-left border border-slate-800 px-4 py-4">
                  Short Description
                </th>
                <th className="text-left border border-slate-800 px-4 py-4">
                  Created at
                </th>
                <th className="text-left border border-slate-800 px-4 py-4">
                  Status
                </th>
                <th className="text-left border border-slate-800 px-4 py-4">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {
                user?.blogs.map(blog => {
                  return <BlogRow key={blog.id} blogProps={blog}/>
                })
              }
            </tbody>
          </table>
      </div>
    </div>
  )
}

export default page
