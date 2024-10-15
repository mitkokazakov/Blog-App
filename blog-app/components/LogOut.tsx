"use client"
import { signOut } from 'next-auth/react'
import React from 'react'

const LogOut = ({color}: {color: string}) => {
  return (
    <div>
       <button onClick={() => signOut({redirect: true, callbackUrl: "/"})} className={`font-medium text-${color}`}>Log Out</button>
    </div>
  )
}

export default LogOut
