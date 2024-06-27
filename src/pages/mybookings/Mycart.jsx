import React from 'react'
import { useContext } from 'react'

import { userLoginContext } from '../../context/userLogoncontext'

const Mycart = () => {
    const { hotels } = useContext(userLoginContext)

    if (hotels === null) {
        return ( <div>
            No bookings
        </div>
        )
    }
    
   
 

}

export default Mycart