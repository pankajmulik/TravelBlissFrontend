import React from 'react'
import { ThumbsDown, ThumbsUp } from 'react-feather'

const Customer3 = () => {
  return (
    <>
        <div className='w-full p-16 rounded-xl flex flex-col bg-sky-200 shadow-xl'>
            <div className='w-full flex justify-between items-center'>

                <div className='italic font-bold text-xl tracking-wider'>Mahendra Joshi</div>
                <div>
                    <img className='rounded-full h-24 w-24' src="https://cdn.dribbble.com/users/17014501/avatars/normal/data?1690225284" alt="" />
                </div>
            </div>
            <div className='text-neutral-600 my-8'>
            Booking my hotel and transport through <span><button className='italic font-semibold'>Travel Bliss</button></span> was a breeze! The options were diverse, the process was smooth, and the experience was seamless. Highly recommend for stress-free travel planning!
            </div>
            <div className='flex'>
                <button className='mr-2'><ThumbsUp/></button>
                <button className='mr-2'><ThumbsDown/></button>
            </div>
        </div>
    </>
  )
}

export default Customer3