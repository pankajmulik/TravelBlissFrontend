import React from 'react'

const HomeFlex = () => {
  return (
    <>
        <div className='w-full  flex justify-center bg-gray-100'>
            <div className='w-11/12'>
                <div className='bg-cover rounded-xl bg-center bg-[url("../public/images/HomeFlexBackgroun.jpg")] h-[500px] flex justify-center items-center '>
                    <input className='rounded outline-none h-12 w-10/12 sm:w-8/12 md:w-5/12 lg:w-3/12 px-8' placeholder='Finde Places' type="text" />
                </div>

            </div>

        </div>
    </>
  )
}

export default HomeFlex