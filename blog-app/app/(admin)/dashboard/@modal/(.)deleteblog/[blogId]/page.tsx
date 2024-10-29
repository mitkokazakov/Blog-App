import { GetBlogById } from '@/app/lib/services'
import DeleteBlogModal from '@/components/AdminComponents/DeleteBlogModal'
import { revalidatePath } from 'next/cache'
import React from 'react'

type DeleteBlogParams = {
    params: {
        blogId: string
    }
}

const page = async ({params}: DeleteBlogParams) => {

  revalidatePath("/dashboard/posts");

  const blog = await GetBlogById(params.blogId);

  const blogTitle = blog?.title as string;
  return (
    <div className='text-white'>
      <DeleteBlogModal blogId={params.blogId} blogTitle={blogTitle}/>
    </div>
  )
}

export default page
