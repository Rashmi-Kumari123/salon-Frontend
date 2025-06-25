import { ThemeProvider } from "@mui/material";
import Home from "./Customer/pages/Home/Home";

import greenTheme from "./Theme/greenTheme";

import SalonDetails from "./Customer/pages/Salon/SalonDetails/SalonDetails";
import SalonServiceDetails from "./Customer/pages/Salon/SalonDetails/SalonServiceDetails";


function App() {
  
  return (
    <ThemeProvider theme={greenTheme}>
      <div className="relative">
          <h1 className="text-center text-3xl font-bold text-purple-700 py-4 shadow-md bg-white">
            ✨ Welcome to Saloon! ✨
          </h1>

          <Home/>
          <SalonDetails/>
          <SalonServiceDetails/>
        
        
      </div>
    </ThemeProvider>
  );
}

export default App;
