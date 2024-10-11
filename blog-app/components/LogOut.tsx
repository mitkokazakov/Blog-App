"use client"
import { signOut } from 'next-auth/react'
import React from 'react'

const LogOut = () => {
  return (
    <div>
       <button onClick={() => signOut({redirect: true, callbackUrl: "/"})} className='font-medium'>Log Out</button>
    </div>
  )
}

export default LogOut
