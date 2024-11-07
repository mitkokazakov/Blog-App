import { GetBlogById } from '@/app/lib/services'
import DeleteUserBlogModal from '@/components/AdminComponents/DeleteUserBlogModal'
import { revalidatePath } from 'next/cache'
import React from 'react'

type DeleteUserBlogParams = {
    params: {
        blogId: string
    }
}

const page = async ({params}: DeleteUserBlogParams) => {

  //revalidatePath("/dashboard/posts");

  const blog = await GetBlogById(params.blogId);

  const blogTitle = blog?.title as string;
  return (
    <div className='text-white'>
      <DeleteUserBlogModal blogId={params.blogId} blogTitle={blogTitle}/>
    </div>
  )
}

export default page
