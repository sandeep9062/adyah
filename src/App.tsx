import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import MentalWellnessService from "./pages/MentalWellnessService";
import MindSoul from "./pages/MindSoul";
import YogaSanctuary from "./pages/YogaSanctuary";
import BookJourney from "./pages/BookJourney";
import NotFound from "./pages/NotFound";
import WelcomePopup from "./components/EnquiryWidget";
import BreastCare from "./pages/BreastCare";
import BreathingTechniques from "./pages/Breathing";
import LineagePage from "./pages/LineagePage";
import AuraProfiles from "./pages/AuraProfiles";
import JournalOfStillness from "./pages/JournalOfStillness";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <WelcomePopup />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/mental-wellness" element={<MentalWellnessService />} />
          <Route
            path="/breathing-techniques"
            element={<BreathingTechniques />}
          />
          <Route path="/mind-soul" element={<MindSoul />} />
          <Route path="/yoga" element={<YogaSanctuary />} />
          <Route path="/book" element={<BookJourney />} />
          <Route path="/lineage" element={<LineagePage />} />
          <Route path="/team" element={<AuraProfiles />} />
          <Route path="/journal" element={<JournalOfStillness />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
