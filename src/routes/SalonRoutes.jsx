import React from "react";

import { Routes, Route } from "react-router-dom";
import HomePage from "../salon/pages/Home/HomePage";
import ServicesTable from "../salon/pages/Salon Service/ServicesTable";
import CreateServiceForm from "../salon/pages/Salon Service/CreateServiceForm";
import Payment from "../salon/pages/Payment/Payment";
import Notification from "../Customer/pages/Notifications/Notification";
import Category from "../salon/pages/Category/Category";
import TransactionTable from "../salon/pages/Payment/TransactionTable";
import BookingTables from "../salon/pages/Bookings/BookingTable";
import Profile from "../salon/pages/Account/Profile";

const SalonRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<ServicesTable />} />
      <Route path="/add-services" element={<CreateServiceForm />} />
      <Route path="/bookings" element={<BookingTables />} />
      <Route path="/category" element={<Category />} />
      <Route path="/transaction" element={<TransactionTable />} />
      <Route path="/notifications" element={<Notification />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/account" element={<Profile />} />
    </Routes>
  );
};

export default SalonRoutes;
