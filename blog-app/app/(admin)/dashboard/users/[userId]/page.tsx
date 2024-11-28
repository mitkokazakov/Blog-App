import { GetUserByIdWithBlogs } from '@/app/lib/services'
import BlogRow from '@/components/AdminComponents/BlogRow'
import React from 'react'
import nouserImg from '../../../../../public/admindesktop.png';
import Image from 'next/image';
import { revalidatePath } from 'next/cache';
import ErrorAdminPage from '@/components/AdminComponents/ErrorAdminPage';
import BlogResponsiveRow from '@/components/AdminComponents/BlogResponsiveRow';

type UserParams = {
  params:{
    userId: string
  }
}

const page = async ({params}: UserParams) => {

  
  const user = await GetUserByIdWithBlogs(params.userId);
  revalidatePath(`/dashboard/users/${params.userId}`)

  if(!user){
    return <ErrorAdminPage text={"User with that id does not exist! Sorry."}/>
  }

  return (
    <div className='w-full bg-[#0f0f11] mih-h-screen text-white lg:border-l-[1px] lg:border-l-white flex flex-col gap-8 px-10 py-10'>
     <div>
        <h1 className="font-bold tracking-widest text-2xl mb-10">User Info</h1>
      </div>

      <div className='flex flex-col mb-10 justify-center items-center gap-20 md:gap-40 md:flex-row md:mb-0'>
        <div className='w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden'>
          
          

            {
              //user?.image != null ? <img src={user?.image as string} alt="user" className='w-full h-full rounded-full'/> : null
              user?.image != null ? <Image src={user?.image as string} width={600} height={600} quality={100} alt='no user image' className='max-w-full max-h-full rounded-full object-cover aspect-[1/1]'></Image> : null
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

      <table className="hidden table-auto md:border-collapse border md:border-slate-400 md:w-full md:inline-table">

        
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
                user?.blogs.sort((a, b) =>  new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).map(blog => {
                  return <BlogRow key={blog.id} blogProps={blog}/>
                })
              }
            </tbody>
          </table>

          <div className='flex flex-col gap-3 md:hidden'>
          {
                user?.blogs.sort((a, b) =>  new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).map(blog => {
                  return <BlogResponsiveRow key={blog.id} blogProps={blog}/>
                })
              }
          </div>
      </div>
    </div>
  )
}

export default page
