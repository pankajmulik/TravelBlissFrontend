import React from 'react'

import {createContext, useState} from 'react'

export const userLoginContext=createContext();

   


export const AuthContextProvider = ({ children }) => {
 
//  const [userLoginstatus,setuserLoginstatus]=useState('Login');
const [userstatus,setuserstatus]=useState('Login')


    return (
        <userLoginContext.Provider value={{ userstatus,setuserstatus }}>
            {children}
        </userLoginContext.Provider>
    )
    
}