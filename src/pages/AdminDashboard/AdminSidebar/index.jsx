import React from 'react';
import { FaHome, FaUser, FaCog, FaSignOutAlt, FaUsers, FaClipboardList, FaChartBar, FaQuestionCircle } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <div className="w-[268px] h-screen bg-white text-gray-600 border-r border-gray-200" style={{ boxShadow: '0 10px 25px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.4)' }}>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className='flex flex-col justify-between h-full'>
        <div className=''>
            <div className="pl-2 hover:bg-teal-500 w-full rounded-lg transition-all duration-300 ease-in-out">
                <div className='w-full rounded-lg  bg-white '>
                    <NavLink className='text-lg w-full flex items-center space-x-2 pl-6 hover:bg-teal-500 py-4 hover:bg-opacity-20 hover:text-teal-500 rounded-lg transition duration-300 ease-in-out'>
                        <FaHome />
                        <span>Home</span>
                    </NavLink>
                </div>
            </div>
            <div className="pl-2 hover:bg-teal-500 w-full rounded-lg transition-all duration-300 ease-in-out">
                <div className='w-full rounded-lg  bg-white '>
                    <NavLink className='text-lg w-full flex items-center space-x-2 pl-6 hover:bg-teal-500 py-4 hover:bg-opacity-20 hover:text-teal-500 rounded-lg transition duration-300 ease-in-out'>
                        <FaUsers />
                        <span>Users</span>
                    </NavLink>
                </div>
            </div>
            <div className="pl-2 hover:bg-teal-500 w-full rounded-lg transition-all duration-300 ease-in-out">
                <div className='w-full rounded-lg  bg-white '>
                    <NavLink className='text-lg w-full flex items-center space-x-2 pl-6 hover:bg-teal-500 py-4 hover:bg-opacity-20 hover:text-teal-500 rounded-lg transition duration-300 ease-in-out'>
                        <FaClipboardList />
                        <span>Bookings</span>
                    </NavLink>
                </div>
            </div>
            <div className="pl-2 hover:bg-teal-500 w-full rounded-lg transition-all duration-300 ease-in-out">
                <div className='w-full rounded-lg  bg-white '>
                    <NavLink className='text-lg w-full flex items-center space-x-2 pl-6 hover:bg-teal-500 py-4 hover:bg-opacity-20 hover:text-teal-500 rounded-lg transition duration-300 ease-in-out'>
                        <FaChartBar />
                        <span>State Info</span>
                    </NavLink>
                </div>
            </div>
            <div className="pl-2 hover:bg-teal-500 w-full rounded-lg transition-all duration-300 ease-in-out">
                <div className='w-full rounded-lg  bg-white '>
                    <NavLink className='text-lg w-full flex items-center space-x-2 pl-6 hover:bg-teal-500 py-4 hover:bg-opacity-20 hover:text-teal-500 rounded-lg transition duration-300 ease-in-out'>
                        <FaQuestionCircle />
                        <span>Queries</span>
                    </NavLink>
                </div>
            </div>
            
            
            

        </div>
        <div>
            <div className="pl-2 hover:bg-teal-500 w-full rounded-lg transition-all duration-300 ease-in-out">
                <div className='w-full rounded-lg  bg-white '>
                    <NavLink className='text-lg w-full flex items-center space-x-2 pl-6 hover:bg-teal-500 py-4 hover:bg-opacity-20 hover:text-teal-500 rounded-lg transition duration-300 ease-in-out'>
                        <FaCog />
                        <span>Settings</span>
                    </NavLink>
                </div>
            </div>
            <div className="pl-2 hover:bg-teal-500 w-full rounded-lg transition-all duration-300 ease-in-out">
                <div className='w-full rounded-lg  bg-white '>
                    <NavLink className='text-lg w-full flex items-center space-x-2 pl-6 hover:bg-teal-500 py-4 hover:bg-opacity-20 hover:text-teal-500 rounded-lg transition duration-300 ease-in-out'>
                        
                        <FaSignOutAlt />
                        <span>Logout</span>
                    </NavLink>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;