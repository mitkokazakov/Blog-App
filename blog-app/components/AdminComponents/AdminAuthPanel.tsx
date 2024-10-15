import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import React from 'react'
import NavBarAuthPanel from '../NavBarAuthPanel';
import AdminImageDropdown from './AdminImageDropdown';

const AdminAuthPanel = async () => {
    const session = await getServerSession(authOptions);

    const sessionStatus: boolean = session != null ? true : false;

  return (
    <div className='relative'>
      <AdminImageDropdown sessionStatus={sessionStatus} userId={session?.user.id as string}/>
    </div>
  )
}

export default AdminAuthPanel
