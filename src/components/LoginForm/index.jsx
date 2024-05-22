import React from 'react'
import { Link } from 'react-router-dom'

const LoginForm = () => {
  return (
    <>
        <div className='flex flex-col justify-center items-center w-8/12 py-16'>
            <div className='bg-white py-2 px-8 opacity-80 rounded-lg w-full text-center'>Login to your Account</div>
            <form className='bg-white opacity-80 w-full rounded-lg px-8 flex flex-col' action="">
                <label className='text-neutral-500 text-sm' htmlFor="">Username</label>
                <input className='border-b pt-[1px] pb-[12px] border-neutral-300 outline-none' type="text" name="" id="" />
                <label className='mt-6 text-neutral-500 text-sm' htmlFor="">Password</label>
                <input className='border-b pt-[1px] pb-[12px] border-neutral-300 outline-none' type="password" name="" id="" />
                <div className='flex justify-between my-4'>
                    <div className='flex items-center'>
                        <input type="checkbox" name="" id="" />
                        <label className='text-sm ml-2' htmlFor="">Remember me</label>
                    </div>
                    <Link className='text-neutral-500 text-sm'>
                        Forgot your Password?
                    </Link>
                </div>
                <button className='bg-teal-500 text-white py-2 rounded-xl my-4'>Login</button>
                <div className='h-12 opacity-5 transparent'>
                        
                </div>
            </form>
        </div>
    </>
  )
}

export default LoginForm