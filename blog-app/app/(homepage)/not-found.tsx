import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='text-center'>
    <h1>Page Not Found</h1>
    <p>Sorry, we couldn’t find the page you’re looking for.</p>
    <Link href="/">Go back to Home</Link>
  </div>
  )
}

export default NotFound;
