import DeleteBlogModal from '@/components/AdminComponents/DeleteBlogModal'
import React from 'react'

type DeleteBlogParams = {
    params: {
        blogId: string
    }
}

const page = ({params}: DeleteBlogParams) => {
  return (
    <div className='text-white'>
      {/* {`This is blog with ID: ${params.blogId}`} */}
      <DeleteBlogModal blogId={params.blogId}/>
    </div>
  )
}

export default page
