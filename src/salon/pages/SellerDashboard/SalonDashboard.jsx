import React from "react";
import SalonDrawerList from "../../components/SideBar/SalonDrawerList";
import Navbar from "../../../Admin/components/Navbar";
import SalonRoutes from "../../../routes/SalonRoutes";

const SalonDashboard = () => {
  return (
    <div className="min-h-screen">
      <Navbar DrawerList={SalonDrawerList} />
      <section className="lg:flex lg:h-[90vh]">
        <div className="hidden lg:block h-full">
          <SalonDrawerList />
        </div>
        <div className="p-19 w-full 1g:w-[8@%] overflow-y-auto}">
          |{/* <BookingTables/> */}
          {/* <ServicesTable/> */}
          {/* <TransactionTable/> */}
          {/* <Category/> */}
          <SalonRoutes />
        </div>
      </section>
    </div>
  );
};

export default SalonDashboard;
