import { ThemeProvider } from "@mui/material";

import greenTheme from "./Theme/greenTheme";
import { Route, Routes } from "react-router-dom";
import CustomerRoutes from "./routes/CustomerRoutes";
import SalonDashboard from "./salon/pages/SellerDashboard/SalonDashboard";
import Auth from "./Auth/Auth";

function App() {
  return (
    <ThemeProvider theme={greenTheme}>
      <div className="relative">
        <Routes>
          <Route path="/salon-dashboard/*" element={<SalonDashboard />} />
          <Route path="*" element={<CustomerRoutes />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/register" element={<Auth />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
