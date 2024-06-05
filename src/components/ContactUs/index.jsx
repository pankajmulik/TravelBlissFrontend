import React from 'react'
import { ArrowRight } from 'react-feather'

const ContactUs = () => {
  return (
    <>
        <div className='w-full bg-teal-300 flex justify-center py-16'>
            <div className='w-11/12'>
                <div class="flex sm:flex flex-col md:grid lg:grid grid-cols-5 sm:grid-cols-5 md:grid-cols-11 lg:grid-cols-11 gap-0">
                        
                        
                        <div class="grid-items order-2 sm:order-2 md:order-1 lg:order-1 col-span-4  bg-white px-8 py-8  flex ">
                            <div className='flex flex-col justify-center'>
                                <div className='text-4xl'>Contact Us</div>
                                <div className='my-6 text-lg text-neutral-500'>Here are few ways to get in touch with us</div>
                            </div>
                        </div>
                        <div class="grid-items order-1 sm:order-1 md:order-2 lg:order-2 bg-white col-span-7 w-full  py-8 ">
                            
                            <div className='-ml-16'>
                                <img className='w-full' src="./images/BuildingsSVG.svg" alt="" />
                            </div>
                        </div>
                        <div class="grid-items order-1 sm:order-1 md:order-2 lg:order-2 bg-white col-span-5 w-full px-8  py-8 ">
                            
                            <div className='-mt-32'>
                                <form className=' w-6/12' action="">
                                    <div className='text-2xl my-4'>Message Us</div>
                                    <div className='flex flex-col items-start'>
                                        <input className='border border-black shadow-xl h-12 w-full pl-4 my-4 outline-none ' placeholder='Your Name' type="text" />
                                        <input className='border border-black shadow-xl h-12 w-full pl-4 my-4 outline-none ' placeholder='Email' type="email" />
                                        <input className='border border-black shadow-xl h-32 w-full pl-4 my-4 outline-none ' placeholder='Message' type="text" />
                                    </div>
                                    <div className='flex justify-center items-center my-4'>
                                        <button className='bg-teal-300 border border-black px-16 py-4 hover:transition-all duration-500 hover:duration-500 hover:bg-teal-500'>Submit</button>
                                    </div>
                                </form>
                                
                            </div>
                        </div>
                        <div class="grid-items order-1 sm:order-1 md:order-2 lg:order-2 bg-white col-span-6 w-full px-8  py-8 ">
                            
                            <div className='flex flex-col justify-center items-center'>
                                <div className='my-4 mb-16'>
                                    <div className='text-2xl my-3'>Our Phone</div>
                                    <div className='text-2xl text-neutral-400 my-3'>1234567890</div>

                                    <div className='text-2xl mt-8'>Email</div>
                                    <div className='text-2xl text-neutral-400 my-3'>ABC@gmail.com</div>

                                    <div className='text-2xl mt-6'>Address</div>
                                    <div className='text-2xl text-neutral-400 my-3'>Building A, Flat No.5, Gardenia Park Phase-II, 6 S, Somnath Nagar Rd, Pune, Maharashtra 411014</div>
                                </div>
                                
                                
                            </div>
                        </div>
                        
                </div>
                
            </div>
        </div>
    </>
  )
}

export default ContactUs