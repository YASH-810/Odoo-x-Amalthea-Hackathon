import React from 'react'
import { Input } from './ui/input'

const submitForm = () => {
  return (
    <div>
        <div className='flex flex-col gap-3'>
        <h3>Note:</h3><Input />
        <h3>Category:</h3><Input />
        <h3>Amount:</h3><Input />
        </div>
    </div>
  )
}

export default submitForm