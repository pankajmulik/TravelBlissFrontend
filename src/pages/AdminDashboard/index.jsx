import React from 'react'
import AdminSidebar from './AdminSidebar'
import AdminCharts from './AdminCharts'

const AdminDashboard = () => {
  return (
    <>
        <div className='flex'>
            <AdminSidebar/>
            <AdminCharts/>
        </div>
    </>
  )
}

export default AdminDashboard