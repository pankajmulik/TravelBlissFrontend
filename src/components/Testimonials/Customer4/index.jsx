import React from 'react'
import { ThumbsDown, ThumbsUp } from 'react-feather'

const Customer4 = () => {
  return (
    <>
        <div className='w-full p-16 rounded-xl flex flex-col bg-sky-200 shadow-xl'>
            <div className='w-full flex justify-between items-center'>

                <div className='italic font-bold text-xl tracking-wider'>Sakshi Verma</div>
                <div>
                    <img className='rounded-full h-24 w-24' src="https://cdn.dribbble.com/users/7883727/avatars/normal/26ab7043a07228a679414eb89392f730.jpeg?1680217851" alt="" />
                </div>
            </div>
            <div className='text-neutral-600 my-8'>
            The overall experience was very good. PMT helped us in planning our journey in Bali. The local guide/driver (Deva) was very supportive.The backend support staff were very supportive and helpful. They briefed about the journey in detail. There were no havoc in the entire journey.
            </div>
            <div className='flex'>
                <button className='mr-2'><ThumbsUp/></button>
                <button className='mr-2'><ThumbsDown/></button>
            </div>
        </div>
    </>
  )
}

export default Customer4