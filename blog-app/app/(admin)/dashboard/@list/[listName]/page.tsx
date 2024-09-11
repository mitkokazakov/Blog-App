import React from 'react'

const page = ({params}: {params:{listName:string}}) => {
  return (
    <div className='bg-yellow-50 text-black w-[300px] h-screen'>
      {params.listName}
    </div>
  )
}

export default page
