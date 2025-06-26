import { ThemeProvider } from "@mui/material";
// import Home from "./Customer/pages/Home/Home";

import greenTheme from "./Theme/greenTheme";
import Navbar from "./Customer/pages/Navbar/Navbar";
// import { Notifications } from "@mui/icons-material";
// import Notification from "./Customer/pages/Notifications/Notification";
// import Bookings from "./Customer/pages/Bookings/Bookings";

// import SalonDetails from "./Customer/pages/Salon/SalonDetails/SalonDetails";
// import Review from "./Customer/pages/Salon/Reviews/Review";



function App() {
  
  return (
    <ThemeProvider theme={greenTheme}>
      <div className="relative">
          <h1 className="text-center text-3xl font-bold text-purple-700 py-4 shadow-md bg-white">
            ✨ Welcome to Saloon! ✨
          </h1>

          {/* <Home/> */}
          {/* <SalonDetails/> */}
         
          {/* <Review/> */}
          {/* <Bookings/> */}
          {/* <Notification/> */}
          <Navbar/>
          
        
        
      </div>
    </ThemeProvider>
  );
}

export default App;
