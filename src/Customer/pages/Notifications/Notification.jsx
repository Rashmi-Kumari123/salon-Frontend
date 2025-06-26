import React from 'react'
import NotificationCard from './NotificationCard'

const Notification = () => {
  return (
    <div className="px-5 md:flex flex-col items-center mt-10 min-h-screen">
      <div>
        <h1 className="text-3xl font-bold py-5">Notification</h1>
      </div>
      <div className="space-y-4 md:w-[35rem]">
        <NotificationCard/>
         
        
      </div>
    </div>
  )
}

export default Notification