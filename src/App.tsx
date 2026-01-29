import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AirportTransfers from "./pages/AirportTransfers";
import GroupTransfers from "./pages/GroupTransfers";
import BabySeatTaxi from "./pages/BabySeatTaxi";
import CorporateTransfers from "./pages/CorporateTransfers";
import WeddingTransfers from "./pages/WeddingTransfers";
import CruiseTransfers from "./pages/CruiseTransfers";
import WheelchairTaxi from "./pages/WheelchairTaxi";
import Fleetpage from "./pages/Fleetpage";
import Servicepage from "./pages/Servicepage";
import About from "./pages/About";
import Contactpage from "./pages/Contactpage";
import Tours from "./pages/Tourspage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/airport-transfers" element={<AirportTransfers />} />
          <Route path="/services/group-transfers" element={<GroupTransfers />} />
          <Route path="/services/baby-seat-taxi" element={<BabySeatTaxi />} />
          <Route path="/services/corporate-transfers" element={<CorporateTransfers />} />
          <Route path="/services/wedding-transfers" element={<WeddingTransfers />} />
          <Route path="/services/cruise-transfers" element={<CruiseTransfers />} />
          <Route path="/services/wheelchair-taxi" element={<WheelchairTaxi />} />
          <Route path="/fleet" element={<Fleetpage />} />
          <Route path="/areas" element={<Servicepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
