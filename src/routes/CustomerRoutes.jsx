import React from 'react'
import Home from '../Customer/pages/Home/Home'
import Notification from '../Customer/pages/Notifications/Notification'
import Bookings from '../Customer/pages/Bookings/Bookings'
import SalonDetails from '../Customer/pages/Salon/SalonDetails/SalonDetails'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../Customer/pages/Navbar/Navbar'
import NotFound from '../Customer/pages/NotFound/NotFound'

const CustomerRoutes = () => {
  return (
    <div>
        <Navbar/>
         <Routes>
         
          <Route path="/" element={<Home/>} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/bookings" element={<Bookings/>} />
          <Route path="/salon/:id" element={<SalonDetails />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
    </div>
  )
}

export default CustomerRoutes;
