import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './App'
import Login from './components/Login'
import HomePage from './pages/HomePage'
import Registration from './components/Registration'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<App/>}>
                <Route path='' element ={<HomePage/>}/>
                <Route path='/login' element={<Login/>} />
                <Route path='/login/registration' element={<Registration/>} />
        </Route>
    </Routes>
  )
}

export default Router