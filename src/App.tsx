import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/fr/Home";
import LangPlaceholder from "./pages/LangPlaceholder";
import NotFound from "./pages/NotFound";
import AkokyVsWyylde from "./pages/comparatifs/AkokyVsWyylde";
import AkokyVsNousLib from "./pages/comparatifs/AkokyVsNousLib";
import AkokyVsGleese from "./pages/comparatifs/AkokyVsGleese";
import AkokyVsEntreCoquins from "./pages/comparatifs/AkokyVsEntreCoquins";
import AkokyVsJmDate from "./pages/comparatifs/AkokyVsJmDate";
import AkokyVsJmLibertins from "./pages/comparatifs/AkokyVsJmLibertins";
import AkokyVsSexyLib from "./pages/comparatifs/AkokyVsSexyLib";
import MeilleurSiteLibertin from "./pages/comparatifs/MeilleurSiteLibertin";
import Avis from "./pages/Avis";
import Clubbing from "./pages/Clubbing";
import ClubbingFranceEurope from "./pages/ClubbingFranceEurope";
import ClubbingBelgique from "./pages/ClubbingBelgique";
import ClubbingSuisse from "./pages/ClubbingSuisse";
import ClubbingLuxembourg from "./pages/ClubbingLuxembourg";
import ClubsEchangistesFrance from "./pages/ClubsEchangistesFrance";
import Parrainage from "./pages/Parrainage";

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

            {/* Comparatifs SEO */}
            <Route path="/akoky-vs-wyylde" element={<AkokyVsWyylde />} />
            <Route path="/akoky-vs-nouslib" element={<AkokyVsNousLib />} />
            <Route path="/akoky-vs-gleese" element={<AkokyVsGleese />} />
            <Route path="/akoky-vs-entrecoquins" element={<AkokyVsEntreCoquins />} />
            <Route path="/akoky-vs-jmdate" element={<AkokyVsJmDate />} />
            <Route path="/akoky-vs-jmlibertins" element={<AkokyVsJmLibertins />} />
            <Route path="/akoky-vs-sexylib" element={<AkokyVsSexyLib />} />
            <Route path="/meilleur-site-libertin" element={<MeilleurSiteLibertin />} />
            <Route path="/avis" element={<Avis />} />
            <Route path="/clubbing" element={<Clubbing />} />
            <Route path="/clubbing-france-europe" element={<ClubbingFranceEurope />} />
            <Route path="/clubbing-belgique" element={<ClubbingBelgique />} />
            <Route path="/clubbing-suisse" element={<ClubbingSuisse />} />
            <Route path="/clubbing-luxembourg" element={<ClubbingLuxembourg />} />
            <Route path="/clubs-echangistes-france" element={<ClubsEchangistesFrance />} />
            <Route path="/parrainage" element={<Parrainage />} />

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
