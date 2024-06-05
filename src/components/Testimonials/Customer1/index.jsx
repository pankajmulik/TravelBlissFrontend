import React from 'react'
import { ThumbsDown, ThumbsUp } from 'react-feather'

const Customer1 = () => {
  return (
    <>
        <div className='w-full p-16 flex flex-col bg-sky-200 shadow-xl rounded-xl'>
            <div className='w-full flex justify-between items-center'>

                <div className='italic font-bold text-xl tracking-wider'>Arjun Baniya</div>
                <div>
                    <img className='rounded-full h-24 w-24' src="https://cdn.dribbble.com/users/2124370/avatars/normal/6672b16d88004bdf420c30258010b5bf.jpg?1700923250" alt="" />
                </div>
            </div>
            <div className='text-neutral-600 my-8'>
            I was amazed by the quality of service provided by <span><button className='italic font-semibold'>Travel Bliss</button></span>. They exceeded my expectations and I highly recommend them to anyone in need of their services.
            </div>
            <div className='flex'>
                <button className='mr-2'><ThumbsUp/></button>
                <button className='mr-2'><ThumbsDown/></button>
            </div>
        </div>
    </>
  )
}

export default Customer1