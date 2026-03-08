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
import ClubsLibertinsBruxelles from "./pages/ClubsLibertinsBruxelles";
import ClubsLibertinsCharleroi from "./pages/ClubsLibertinsCharleroi";
import ClubsLibertinsFlandre from "./pages/ClubsLibertinsFlandre";
import ClubsLibertinsGand from "./pages/ClubsLibertinsGand";
import ClubsLibertinsGeneve from "./pages/ClubsLibertinsGeneve";
import ClubsLibertinsDijon from "./pages/ClubsLibertinsDijon";
import ClubsLibertinsCapDagde from "./pages/ClubsLibertinsCapDagde";
import Application from "./pages/Application";
import ClubsLibertinsGrandEst from "./pages/ClubsLibertinsGrandEst";
import ClubsLibertinsGrenoble from "./pages/ClubsLibertinsGrenoble";
import ClubsLibertinsHautsDeFrance from "./pages/ClubsLibertinsHautsDeFrance";
import ClubsLibertinsIleDeFrance from "./pages/ClubsLibertinsIleDeFrance";
import ClubsLibertinsLausanne from "./pages/ClubsLibertinsLausanne";
import ClubsLibertinsLiege from "./pages/ClubsLibertinsLiege";
import ClubsLibertinsLille from "./pages/ClubsLibertinsLille";
import Akoky from "./pages/Akoky";
import Vip from "./pages/Vip";
import Vision from "./pages/Vision";
import Presse from "./pages/Presse";
import Contact from "./pages/Contact";
import Cookies from "./pages/Cookies";
import Live from "./pages/Live";
import Jeux from "./pages/Jeux";
import Faq from "./pages/Faq";
import Blog from "./pages/Blog";
import Evenements from "./pages/Evenements";
import Concours from "./pages/Concours";
import ConcoursSixCles from "./pages/ConcoursSixCles";
import Lexique from "./pages/Lexique";
import Libertinage from "./pages/Libertinage";
import ActualitesLibertines from "./pages/ActualitesLibertines";
import SaunasLibertins from "./pages/SaunasLibertins";
import GuideLibertin from "./pages/GuideLibertin";
import GuideUltimeLibertinage from "./pages/GuideUltimeLibertinage";
import DebuterLibertinage from "./pages/DebuterLibertinage";
import QuestionsDebutants from "./pages/QuestionsDebutants";
import PremierClubLibertin from "./pages/PremierClubLibertin";
import PremierRendezVousLibertin from "./pages/PremierRendezVousLibertin";
import ClubsLibertinsParis from "./pages/ClubsLibertinsParis";
import ClubsLibertinsLyon from "./pages/ClubsLibertinsLyon";
import ClubsLibertinsMarseille from "./pages/ClubsLibertinsMarseille";
import ClubsLibertinsBordeaux from "./pages/ClubsLibertinsBordeaux";
import ClubsLibertinsToulouse from "./pages/ClubsLibertinsToulouse";
import ClubsLibertinsNice from "./pages/ClubsLibertinsNice";
import ClubsLibertinsMontpellier from "./pages/ClubsLibertinsMontpellier";
import ClubsLibertinsNantes from "./pages/ClubsLibertinsNantes";
import ClubsLibertinsRennes from "./pages/ClubsLibertinsRennes";
import ClubsLibertinsStrasbourg from "./pages/ClubsLibertinsStrasbourg";
import ClubsLibertinsReims from "./pages/ClubsLibertinsReims";
import ClubsLibertinsToulon from "./pages/ClubsLibertinsToulon";
import ClubsLibertinsBale from "./pages/ClubsLibertinsBale";
import ClubsLibertinsZurich from "./pages/ClubsLibertinsZurich";
import ClubsLibertinsLuxembourg from "./pages/ClubsLibertinsLuxembourg";
import ClubsLibertinsBruges from "./pages/ClubsLibertinsBruges";
import ClubsLibertinsAnvers from "./pages/ClubsLibertinsAnvers";
import ClubsLibertinsWallonie from "./pages/ClubsLibertinsWallonie";
import ClubsLibertinsBruxellesRegion from "./pages/ClubsLibertinsBruxellesRegion";
import ClubsLibertinsPaca from "./pages/ClubsLibertinsPaca";
import ClubsLibertinsNormandie from "./pages/ClubsLibertinsNormandie";
import ClubsLibertinsNouvelleAquitaine from "./pages/ClubsLibertinsNouvelleAquitaine";
import ClubsLibertinsBretagne from "./pages/ClubsLibertinsBretagne";
import ClubsLibertinsAuvergneRhoneAlpes from "./pages/ClubsLibertinsAuvergneRhoneAlpes";
import ClubsLibertinsOccitanie from "./pages/ClubsLibertinsOccitanie";
import ClubsLibertinsPaysDelaLoire from "./pages/ClubsLibertinsPaysDelaLoire";
import ClubsLibertinsGeneral from "./pages/ClubsLibertinsGeneral";

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
            <Route path="/clubs-libertins-bruxelles" element={<ClubsLibertinsBruxelles />} />
            <Route path="/clubs-libertins-charleroi" element={<ClubsLibertinsCharleroi />} />
            <Route path="/clubs-libertins-flandre" element={<ClubsLibertinsFlandre />} />
            <Route path="/clubs-libertins-gand" element={<ClubsLibertinsGand />} />
            <Route path="/clubs-libertins-geneve" element={<ClubsLibertinsGeneve />} />
            <Route path="/clubs-libertins-dijon" element={<ClubsLibertinsDijon />} />
            <Route path="/clubs-libertins-cap-dagde" element={<ClubsLibertinsCapDagde />} />
            <Route path="/application" element={<Application />} />
            
            {/* Nouvelles pages V3 */}
            <Route path="/clubs-libertins-grand-est" element={<ClubsLibertinsGrandEst />} />
            <Route path="/clubs-libertins-grenoble" element={<ClubsLibertinsGrenoble />} />
            <Route path="/clubs-libertins-hauts-de-france" element={<ClubsLibertinsHautsDeFrance />} />
            <Route path="/clubs-libertins-ile-de-france" element={<ClubsLibertinsIleDeFrance />} />
            <Route path="/clubs-libertins-lausanne" element={<ClubsLibertinsLausanne />} />
            <Route path="/clubs-libertins-liege" element={<ClubsLibertinsLiege />} />
            <Route path="/clubs-libertins-lille" element={<ClubsLibertinsLille />} />
            <Route path="/akoky.html" element={<Akoky />} />
            <Route path="/akoky" element={<Akoky />} />
            <Route path="/vip" element={<Vip />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/presse" element={<Presse />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/live" element={<Live />} />
            <Route path="/jeux" element={<Jeux />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/evenements" element={<Evenements />} />
            <Route path="/concours" element={<Concours />} />
            <Route path="/concours-six-cles" element={<ConcoursSixCles />} />
            <Route path="/lexique" element={<Lexique />} />
            <Route path="/libertinage" element={<Libertinage />} />
            <Route path="/actualites-libertines" element={<ActualitesLibertines />} />
            <Route path="/saunas-libertins" element={<SaunasLibertins />} />
            <Route path="/guide-libertin-france" element={<GuideLibertin />} />
            <Route path="/guide-ultime-libertinage-france" element={<GuideUltimeLibertinage />} />
            <Route path="/debuter-libertinage" element={<DebuterLibertinage />} />
            <Route path="/questions-debutants-libertinage" element={<QuestionsDebutants />} />
            <Route path="/premier-club-libertin" element={<PremierClubLibertin />} />
            <Route path="/premier-rendez-vous-libertin" element={<PremierRendezVousLibertin />} />
            <Route path="/clubs-libertins-paris" element={<ClubsLibertinsParis />} />
            <Route path="/clubs-libertins-lyon" element={<ClubsLibertinsLyon />} />
            <Route path="/clubs-libertins-marseille" element={<ClubsLibertinsMarseille />} />
            <Route path="/clubs-libertins-bordeaux" element={<ClubsLibertinsBordeaux />} />
            <Route path="/clubs-libertins-toulouse" element={<ClubsLibertinsToulouse />} />
            <Route path="/clubs-libertins-nice" element={<ClubsLibertinsNice />} />
            <Route path="/clubs-libertins-montpellier" element={<ClubsLibertinsMontpellier />} />
            <Route path="/clubs-libertins-nantes" element={<ClubsLibertinsNantes />} />
            <Route path="/clubs-libertins-rennes" element={<ClubsLibertinsRennes />} />
            <Route path="/clubs-libertins-strasbourg" element={<ClubsLibertinsStrasbourg />} />
            <Route path="/clubs-libertins-reims" element={<ClubsLibertinsReims />} />
            <Route path="/clubs-libertins-toulon" element={<ClubsLibertinsToulon />} />
            <Route path="/clubs-libertins-bale" element={<ClubsLibertinsBale />} />
            <Route path="/clubs-libertins-zurich" element={<ClubsLibertinsZurich />} />
            <Route path="/clubs-libertins-luxembourg" element={<ClubsLibertinsLuxembourg />} />
            <Route path="/clubs-libertins-bruges" element={<ClubsLibertinsBruges />} />
            <Route path="/clubs-libertins-anvers" element={<ClubsLibertinsAnvers />} />
            <Route path="/clubs-libertins-wallonie" element={<ClubsLibertinsWallonie />} />
            <Route path="/clubs-libertins-bruxelles-region" element={<ClubsLibertinsBruxellesRegion />} />
            <Route path="/clubs-libertins-paca" element={<ClubsLibertinsPaca />} />
            <Route path="/clubs-libertins-normandie" element={<ClubsLibertinsNormandie />} />
            <Route path="/clubs-libertins-nouvelle-aquitaine" element={<ClubsLibertinsNouvelleAquitaine />} />
            <Route path="/clubs-libertins-bretagne" element={<ClubsLibertinsBretagne />} />
            <Route path="/clubs-libertins-auvergne-rhone-alpes" element={<ClubsLibertinsAuvergneRhoneAlpes />} />
            <Route path="/clubs-libertins-occitanie" element={<ClubsLibertinsOccitanie />} />
            <Route path="/clubs-libertins-pays-de-la-loire" element={<ClubsLibertinsPaysDelaLoire />} />
            <Route path="/clubs-libertins" element={<ClubsLibertinsGeneral />} />

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
