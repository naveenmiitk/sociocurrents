import { Button } from '@/components/ui/button'
import React from 'react'

const NotFoundPage = () => {
  return (
    <div className='w-screen min-h-[70vh] flex flex-col space-y-4 items-center justify-center'>
      <h1 className='text-lg'>404 | This page could not be found.</h1>
      <div>
        <Button asChild><a className='' href='/'>Return to Homepage</a></Button>
      </div>
    </div>
  )
}

export default NotFoundPage