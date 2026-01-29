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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
