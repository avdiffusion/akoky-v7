import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/fr/Home";
import LangPlaceholder from "./pages/LangPlaceholder";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* FR — langue par défaut, pas de préfixe */}
            <Route path="/" element={<Home />} />

            {/* Autres langues — préfixe /[lang]/ */}
            <Route path="/de" element={<LangPlaceholder lang="de" />} />
            <Route path="/de/*" element={<LangPlaceholder lang="de" />} />
            <Route path="/es" element={<LangPlaceholder lang="es" />} />
            <Route path="/es/*" element={<LangPlaceholder lang="es" />} />
            <Route path="/pt" element={<LangPlaceholder lang="pt" />} />
            <Route path="/pt/*" element={<LangPlaceholder lang="pt" />} />
            <Route path="/it" element={<LangPlaceholder lang="it" />} />
            <Route path="/it/*" element={<LangPlaceholder lang="it" />} />
            <Route path="/en" element={<LangPlaceholder lang="en" />} />
            <Route path="/en/*" element={<LangPlaceholder lang="en" />} />

            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
