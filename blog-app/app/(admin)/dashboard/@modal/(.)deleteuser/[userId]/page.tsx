import { GetUser } from '@/app/lib/services'
import DeleteUserModal from '@/components/AdminComponents/DeleteUserModal'
import React from 'react'

type UserParams = {
    params: {
        userId: string
    }
}

const page = async ({params}: UserParams) => {

    const user = await GetUser(params.userId);

  return (
    <div className='text-white'>
        <DeleteUserModal userId={user?.id as string} userName={user?.name as string}/>
    </div>
  )
}

export default page
