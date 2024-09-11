import Link from 'next/link'
import React from 'react'

const page = ({params}: {params:{listName:string}}) => {
  return (
    <div className='bg-yellow-50 text-black w-[300px] h-screen'>
      {params.listName}
      <Link href={'/dashboard/update'}>Go to Update</Link>
    </div>
  )
}

export default page
