import { ThemeProvider } from "@mui/material";

import greenTheme from "./Theme/greenTheme";
import { Route, Routes } from "react-router-dom";
import SalonDashboard from "./salon/SellerDashboard/SalonDashboard";
import CustomerRoutes from "./routes/CustomerRoutes";




function App() {

  return (
    <ThemeProvider theme={greenTheme}>
      <div className="relative">
        <h1 className="text-center text-3xl font-bold text-purple-700 py-4 shadow-md bg-white">
          {/* ✨ Welcome to Saloon! ✨ */}
        </h1>

        
        <Routes>
          <Route path="/salon-dashboard/*" element={<SalonDashboard />} />
          <Route path="*" element={<CustomerRoutes />} />
          
        </Routes>



      </div>
    </ThemeProvider>
  );
}

export default App;
