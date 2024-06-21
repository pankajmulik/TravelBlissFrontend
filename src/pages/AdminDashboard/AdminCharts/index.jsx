// src/components/AdminCharts.js
import React from 'react';
import { Bar, Pie, Line, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, BarElement, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';
import { FaUsers, FaHotel, FaMapMarkerAlt, FaCalendarCheck } from 'react-icons/fa';

ChartJS.register(ArcElement, BarElement, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

const AdminCharts = () => {
  const totalUsers = 1000;
  const placesBooked = 400;
  const hotelsBooked = 300;
  const totalBookings = 900;
  const userLogins = 1500;

  const pieData = {
    labels: ['Total Users', 'Places Booked', 'Hotels Booked'],
    datasets: [
      {
        label: '# of Votes',
        data: [totalUsers, placesBooked, hotelsBooked],
        backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe'],
        hoverBackgroundColor: ['#ff6384', '#36a2eb', '#cc65fe'],
        borderWidth: 2,
        borderColor: '#ffffff'
      },
    ],
  };

  const donutData = {
    labels: ['Total Bookings', 'User Logins'],
    datasets: [
      {
        label: '# of Votes',
        data: [totalBookings, userLogins],
        backgroundColor: ['#ffcd56', '#4bc0c0'],
        hoverBackgroundColor: ['#ffcd56', '#4bc0c0'],
        borderWidth: 2,
        borderColor: '#ffffff'
      },
    ],
  };

  const barData = {
    labels: ['Total Users', 'Places Booked', 'Hotels Booked', 'User Logins'],
    datasets: [
      {
        label: 'Count',
        data: [totalUsers, placesBooked, hotelsBooked, userLogins],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'User Logins',
        data: [300, 400, 350, 500, 450, 600],
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      },
    ],
  };

  const growthData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Company Growth',
        data: [10, 20, 30, 40, 50, 60],
        fill: false,
        borderColor: 'rgba(54, 162, 235, 1)',
        tension: 0.1,
      },
    ],
  };

  const recentBookings = [
    { id: 1, user: 'John Doe', place: 'Maharashtra', date: '2024-06-01' },
    { id: 2, user: 'Jane Smith', place: 'Uttar Pradesh', date: '2024-06-02' },
    { id: 3, user: 'Samuel Green', place: 'Goa', date: '2024-06-03' },
    { id: 4, user: 'Nina Brown', place: 'Rajasthan', date: '2024-06-04' },
    { id: 5, user: 'Michael Johnson', place: 'Kerala', date: '2024-06-05' },
  ];

  const userActivities = [
    { id: 1, name: 'User 1', activity: 'Logged in', date: '2023-06-01' },
    { id: 2, name: 'User 2', activity: 'Booked a place', date: '2023-06-02' },
    { id: 3, name: 'User 3', activity: 'Booked a hotel', date: '2023-06-03' },
    { id: 4, name: 'User 4', activity: 'Logged in', date: '2023-06-04' },
    { id: 5, name: 'User 5', activity: 'Booked a place', date: '2023-06-05' },
  ];

  return (
    <div className="container mx-auto p-6 w-8/12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-4 shadow rounded-lg flex items-center">
          <FaMapMarkerAlt className="text-4xl text-teal-500" />
          <div className="ml-4">
            <h2 className="text-xl font-semibold">Total Places</h2>
            <p className="text-2xl">{placesBooked}</p>
          </div>
        </div>
        <div className="bg-white p-4 shadow rounded-lg flex items-center">
          <FaHotel className="text-4xl text-teal-500" />
          <div className="ml-4">
            <h2 className="text-xl font-semibold">Total Hotels</h2>
            <p className="text-2xl">{hotelsBooked}</p>
          </div>
        </div>
        <div className="bg-white p-4 shadow rounded-lg flex items-center">
          <FaUsers className="text-4xl text-teal-500" />
          <div className="ml-4">
            <h2 className="text-xl font-semibold">Total Users</h2>
            <p className="text-2xl">{totalUsers}</p>
          </div>
        </div>
        <div className="bg-white p-4 shadow rounded-lg flex items-center">
          <FaCalendarCheck className="text-4xl text-teal-500" />
          <div className="ml-4">
            <h2 className="text-xl font-semibold">Total Bookings</h2>
            <p className="text-2xl">{totalBookings}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Recent Bookings</h2>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b border-gray-200">ID</th>
                <th className="py-2 px-4 border-b border-gray-200">User</th>
                <th className="py-2 px-4 border-b border-gray-200">Place</th>
                <th className="py-2 px-4 border-b border-gray-200">Date</th>
              </tr>
            </thead>
            <tbody>
              {recentBookings.map((booking) => (
                <tr key={booking.id}>
                  <td className="py-2 px-4 border-b border-gray-200">{booking.id}</td>
                  <td className="py-2 px-4 border-b border-gray-200">{booking.user}</td>
                  <td className="py-2 px-4 border-b border-gray-200">{booking.place}</td>
                  <td className="py-2 px-4 border-b border-gray-200">{booking.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">User Activities</h2>
          <Bar data={barData} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 shadow rounded-lg h-full">
          <h2 className="text-2xl font-semibold mb-4">User Logins Over Time</h2>
          <div className="w-full h-96">
            <Line data={lineData} />
          </div>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Total Bookings vs User Logins</h2>
          <div className="w-full h-80">
            <Doughnut data={donutData} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Overall Statistics</h2>
          <div className="w-full h-80">
            <Pie data={pieData} />
          </div>
        </div>
        <div className="bg-white p-4 shadow rounded-lg h-full">
          <h2 className="text-2xl font-semibold mb-4">Company Growth Over Time</h2>
          <div className="w-full h-96">
            <Line data={growthData} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Our Famous Destinations</h2>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b border-gray-200">Destination</th>
                <th className="py-2 px-4 border-b border-gray-200">Bookings</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b border-gray-200">Maharashtra</td>
                <td className="py-2 px-4 border-b border-gray-200">150</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-gray-200">Uttar Pradesh</td>
                <td className="py-2 px-4 border-b border-gray-200">120</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-gray-200">Goa</td>
                <td className="py-2 px-4 border-b border-gray-200">100</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-gray-200">Rajasthan</td>
                <td className="py-2 px-4 border-b border-gray-200">90</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-gray-200">Kerala</td>
                <td className="py-2 px-4 border-b border-gray-200">80</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Our Top Hotels</h2>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b border-gray-200">Hotel</th>
                <th className="py-2 px-4 border-b border-gray-200">Bookings</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b border-gray-200">The Taj Mahal Palace, Mumbai</td>
                <td className="py-2 px-4 border-b border-gray-200">80</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-gray-200">The Oberoi, New Delhi</td>
                <td className="py-2 px-4 border-b border-gray-200">70</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-gray-200">Taj Lake Palace, Udaipur</td>
                <td className="py-2 px-4 border-b border-gray-200">60</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-gray-200">The Leela Palace, Bengaluru</td>
                <td className="py-2 px-4 border-b border-gray-200">50</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-gray-200">The Lalit, Kolkata</td>
                <td className="py-2 px-4 border-b border-gray-200">40</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Recent Activities</h2>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b border-gray-200">User</th>
                <th className="py-2 px-4 border-b border-gray-200">Activity</th>
                <th className="py-2 px-4 border-b border-gray-200">Date</th>
              </tr>
            </thead>
            <tbody>
              {userActivities.map((activity) => (
                <tr key={activity.id}>
                  <td className="py-2 px-4 border-b border-gray-200">{activity.name}</td>
                  <td className="py-2 px-4 border-b border-gray-200">{activity.activity}</td>
                  <td className="py-2 px-4 border-b border-gray-200">{activity.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminCharts;
