import { UserProfile } from '@clerk/nextjs'
import React from 'react'

export default function page() {
  return (
    <div className='p-4 flex justify-center items-center'>
        <UserProfile />
    </div>
  )
}
