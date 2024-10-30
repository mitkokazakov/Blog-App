import { GetAllBlogs } from '@/app/lib/services'
import DashboardAllPosts from '@/components/AdminComponents/DashboardAllPosts'
import { revalidatePath } from 'next/cache'
import Link from 'next/link'
import React from 'react'

type AllPostsParams = {
    searchParams: {
        tab: string
    }
}

export const revalidate = 0;

const page = async ( {searchParams}: AllPostsParams) => {

  //revalidatePath("/dashboard/posts?tab=all")

  const allPosts = await GetAllBlogs();

  return (
    <div className="w-full bg-[#0f0f11] min-h-screen text-white flex flex-col gap-8 px-10 py-10">
      <div>
        <h1 className="font-bold tracking-widest text-2xl">All Posts</h1>
      </div>

      <DashboardAllPosts tab={searchParams.tab} allPosts={allPosts}/>
    </div>
  )
}

export default page
