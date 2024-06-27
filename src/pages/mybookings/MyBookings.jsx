import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { userLoginContext } from '../../context/userLogoncontext'


const MyBookings = () => {

  const { hotels, sethotels } = useContext(userLoginContext)
  const [hotelstatus, sethotelstatus] = useState(true)
  const displayhotel = [hotels]
  useEffect(() => {


  }, [])

  const removehotel = (removehotel,index) => {
    const newcart = hotels.filter((hotel) => hotel !== removehotel);
    sethotels(newcart)
  }


  return (

    <div>
      {
        hotels ? <div className='grid grid-cols-3 w-full h-screen'>

          {
            hotels.map((hotel, index) => {
              return (
                <div key={index}>
                  <div className='w-30 m-4 p-2 bg-white shadow'>

                    <div className='title text-lg text-slate-950' >

                      {
                        hotel.name
                      }

                    </div>

                    <div className='m-4'>
                      <img src={hotel.image} alt={hotel.name} />
                    </div>

                    <div className="address">
                      {
                        hotel.address
                      }
                    </div>

                    <div className='grid grid-cols-2'>

                      <div>
                        <button>pay</button>
                      </div>

                      <div onClick={removehotel(hotel,index)}>
                        remove
                      </div>
                    </div>


                  </div>
                  

                </div>
              )
            })
          }

        </div> : <div>no bookings </div>
      }
    </div>

  )

  // console.log(displayhotel)
  // return (
  //   <div>
  //     hiii
  //   </div>
  // )

  // if (hotelstatus) {
  //   return (
  //     <div>
  //       <Mycart />
  //     </div>
  //   )

  // }

  // return (
  //   <div>
  //     hiii
  //     {/* {
  //       hotels.map((hotel) => {
  //         return <div hotel={hotel}>
  //          hii
  //         </div>

  //       }

  //       )
  //     } */}




  //   </div>





  //     hotels.map((hotel, index) => {
  //       return (
  //         <div className='  w-auto bg-slate-950'>
  //           <div key={index} hotel={hotel} className=' bg-slate-500 '>
  //             <div className=''>

  //               <div className=''>
  //                 {
  //                   hotel.name
  //                 }
  //               </div>

  // </div>

  //           </div>
  //         </div>
  //       )
  //     })


  // )

}

export default MyBookings