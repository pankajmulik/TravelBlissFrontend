import React from 'react';
import { ArrowRight } from 'react-feather';
import { FaMapMarkedAlt, FaHotel, FaPlane, FaUmbrellaBeach } from 'react-icons/fa';
import 'animate.css';

const OurServices = () => {
  return (
    <>
      <div className='w-full flex justify-center bg-gradient-to-b from-sky-200 to-sky-50 pb-32'>
        <div className='w-11/12'>
          <div className='font-["Roboto"] text-5xl text-center my-16 text-teal-600'>
            Quality Services, <span className='text-yellow-500'>You Can Get</span>
          </div>
          <div className="flex sm:flex flex-col md:grid lg:grid grid-cols-5 sm:grid-cols-5 md:grid-cols-11 lg:grid-cols-11 gap-8">
            <div className="grid-items col-span-5 w-full rounded-lg bg-gradient-to-r from-teal-100 to-teal-200 px-8 py-8 animate__animated animate__fadeInLeft shadow-lg transform transition-all duration-300 hover:scale-105">
              <div className='text-yellow-500 font-bold text-2xl mb-8 flex items-center'>
                <FaMapMarkedAlt className='mr-2 text-yellow-500' /> Best Places
              </div>
              <div className='text-4xl my-4 text-teal-900'>Navigate The Best Places to Visit</div>
              <div className='text-md w-10/12 text-neutral-600 mt-8'>
                Embark on a journey with us to explore the best places to visit, where each destination promises unforgettable experiences and lasting memories.
              </div>
              <button className='flex text-blue-500 hover:text-blue-700 my-4'>
                Explore More Places 
                <div><ArrowRight color='gray' /> </div>
              </button>
              <div className='h-48'>
                <img className='w-full h-full rounded-lg animate__animated animate__fadeInDown' src="./images/bestplaces.svg" alt="Best Places" />
              </div>
            </div>
            <div className="grid-items col-span-6 rounded-lg bg-gradient-to-r from-teal-50 to-teal-100 px-8 py-8 flex animate__animated animate__fadeInRight shadow-lg transform transition-all duration-300 hover:scale-105">
              <div className='w-7/12 flex flex-col justify-between'>
                <div className='text-yellow-500 font-bold text-2xl mb-2 flex items-center'>
                  <FaHotel className='mr-2 text-yellow-500' /> Quality Hotels
                </div>
                <div className='text-4xl text-teal-900 mb-16'>Premier Accommodations Await</div>
                <div className='text-md w-10/12 text-neutral-600 mb-16'>
                  Discover top-tier accommodations, exceptional service, and unforgettable experiences at our carefully curated selection of quality hotels, tailored to exceed your expectations.
                </div>
                <button className='flex text-blue-500 hover:text-blue-700 my-4'>
                  Explore Hotels 
                  <div><ArrowRight color='gray' /> </div>
                </button>
              </div>
              <div className='w-5/12'>
                <img className='w-full h-full bg-cover bg-center rounded-lg animate__animated animate__fadeInDown' src="./images/Hotels.svg" alt="Quality Hotels" />
              </div>
            </div>
            <div className="grid-items order-2 sm:order-2 md:order-1 lg:order-1 col-span-6 rounded-lg bg-gradient-to-r from-teal-50 to-teal-100 px-8 py-8 flex animate__animated animate__fadeInLeft shadow-lg transform transition-all duration-300 hover:scale-105">
              <div className='w-7/12 flex flex-col justify-between'>
                <div className='text-yellow-500 font-bold text-2xl mb-2 flex items-center'>
                  <FaUmbrellaBeach className='mr-2 text-yellow-500' /> Vacation For All
                </div>
                <div className=''>
                  <div className='text-4xl text-teal-900 mb-16'>Perfect Getaways for Every Traveler</div>
                  <div className='text-md w-10/12 text-neutral-600 mb-16'>
                    Tailored vacations for honeymooners, families, and friends, offering diverse destinations and activities to create unforgettable memories for every type of traveler.
                  </div>
                  <button className='flex text-blue-500 hover:text-blue-700 my-4'>
                    More Travellers 
                    <div><ArrowRight color='gray' /> </div>
                  </button>
                </div>
              </div>
              <div className='w-5/12'>
                <img className='w-full h-full bg-cover bg-center object-contain rounded-lg animate__animated animate__fadeInDown' src="./images/tripforall.svg" alt="Vacation For All" />
              </div>
            </div>
            <div className="grid-items order-1 sm:order-1 md:order-2 lg:order-2 col-span-5 w-full rounded-lg bg-gradient-to-r from-teal-100 to-teal-200 px-8 py-8 animate__animated animate__fadeInRight shadow-lg transform transition-all duration-300 hover:scale-105">
              <div className='text-yellow-500 font-bold text-2xl mb-8 flex items-center'>
                <FaPlane className='mr-2 text-yellow-500' /> Transportation
              </div>
              <div className='text-4xl my-4 text-teal-900'>Seamless Transportation Solutions</div>
              <div className='text-md w-10/12 text-neutral-600 mt-8'>
                Efficient and reliable transportation services tailored to meet your travel needs, ensuring smooth journeys for all.
              </div>
              <button className='flex text-blue-500 hover:text-blue-700 my-4'>
                Explore More
                <div><ArrowRight color='gray' /> </div>
              </button>
              <div className='relative h-48 w-full flex items-center justify-center'>
                <img className='rounded-lg w-full h-full object-contain animate__animated animate__fadeInDown' src="./images/transport.svg" alt="Transportation" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurServices; 