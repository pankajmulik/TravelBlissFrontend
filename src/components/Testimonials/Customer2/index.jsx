import React from 'react'
import { ThumbsDown, ThumbsUp } from 'react-feather'

const Customer2 = () => {
  return (
    <>
        <div className='w-full p-16 rounded-xl flex flex-col bg-sky-200 shadow-xl'>
            <div className='w-full flex justify-between items-center'>

                <div className='italic font-bold text-xl tracking-wider'>Khushi Sharma</div>
                <div>
                    <img className='rounded-full h-24 w-24' src="https://cdn.dribbble.com/users/11920207/avatars/normal/6793f2c801abadf5b4855fc730e8bdd0.jpg?1710949884" alt="" />
                </div>
            </div>
            <div className='text-neutral-600 my-8'>
            I've traveled with many tour companies over the years, but none have compared to the exceptional service provided by <span><button className='italic font-semibold'>Travel Bliss</button></span>. Their attention to detail, knowledgeable guides, and seamless logistics made our trip to Manali truly unforgettable. I can't wait to book my next adventure with them!
            </div>
            <div className='flex'>
                <button className='mr-2'><ThumbsUp/></button>
                <button className='mr-2'><ThumbsDown/></button>
            </div>
        </div>
    </>
  )
}

export default Customer2