import React from 'react'
import {Card, Divider } from '@mui/material'

const Payment = () => {
  return (
    <div>
  <div>
    <Card className='rounded-md space-y-4 p-5'>
      <h1 className='text-gray-600 font-medium'>Total Earnings</h1>
      <h1 className='font-bold text-xl pb-1'>$599999</h1>
      <Divider/>
      <p>Last Payment : <strong>$0</strong></p>
    </Card>
  </div>
</div>
  )
}

export default Payment