import React from 'react'
import AdminSidebar from './AdminSidebar'
import AdminCharts from './AdminCharts'
import { Outlet } from 'react-router-dom'

const AdminDashboard = () => {
  return (
    <>

            <AdminCharts/>
    </>
  )
}

export default AdminDashboard