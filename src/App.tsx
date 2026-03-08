import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// ─── Pages FR existantes ──────────────────────────────────────────────────────
import HomeFr from "./pages/fr/Home";
import Akoky from "./pages/Akoky";
import Application from "./pages/Application";
import Avis from "./pages/Avis";
import Parrainage from "./pages/Parrainage";
import Clubbing from "./pages/Clubbing";
import ClubbingBelgique from "./pages/ClubbingBelgique";
import ClubbingFranceEurope from "./pages/ClubbingFranceEurope";
import ClubbingLuxembourg from "./pages/ClubbingLuxembourg";
import ClubbingSuisse from "./pages/ClubbingSuisse";
import ClubsEchangistesFrance from "./pages/ClubsEchangistesFrance";

// ─── Pages FR livraison 2 ─────────────────────────────────────────────────────
import Libertinage from "./pages/fr/Libertinage";
import DebuterLibertinage from "./pages/fr/DebuterLibertinage";
import Live from "./pages/fr/Live";
import Presse from "./pages/fr/Presse";
import Evenements from "./pages/fr/Evenements";
import Vision from "./pages/fr/Vision";
import Vip from "./pages/fr/Vip";
import Lexique from "./pages/fr/Lexique";
import Jeux from "./pages/fr/Jeux";
import SaunasLibertins from "./pages/fr/SaunasLibertins";
import ActualitesLibertines from "./pages/fr/ActualitesLibertines";
import PremierClubLibertin from "./pages/fr/PremierClubLibertin";
import PremierRendezVousLibertin from "./pages/fr/PremierRendezVousLibertin";
import QuestionsDebutantsLibertinage from "./pages/fr/QuestionsDebutantsLibertinage";
import Contact from "./pages/fr/Contact";
import Concours from "./pages/fr/Concours";

// ─── Clubs régionaux FR ───────────────────────────────────────────────────────
import ClubsLibertinsAnvers from "./pages/ClubsLibertinsAnvers";
import ClubsLibertinsAuvergneRhoneAlpes from "./pages/ClubsLibertinsAuvergneRhoneAlpes";
import ClubsLibertinsBale from "./pages/ClubsLibertinsBale";
import ClubsLibertinsBordeaux from "./pages/ClubsLibertinsBordeaux";
import ClubsLibertinsBretagne from "./pages/ClubsLibertinsBretagne";
import ClubsLibertinsBruges from "./pages/ClubsLibertinsBruges";
import ClubsLibertinsBruxelles from "./pages/ClubsLibertinsBruxelles";
import ClubsLibertinsBruxellesRegion from "./pages/ClubsLibertinsBruxellesRegion";
import ClubsLibertinsCapDagde from "./pages/ClubsLibertinsCapDagde";
import ClubsLibertinsCharleroi from "./pages/ClubsLibertinsCharleroi";
import ClubsLibertinsDijon from "./pages/ClubsLibertinsDijon";
import ClubsLibertinsFlandre from "./pages/ClubsLibertinsFlandre";
import ClubsLibertinsGand from "./pages/ClubsLibertinsGand";
import ClubsLibertinsGeneral from "./pages/ClubsLibertinsGeneral";
import ClubsLibertinsGeneve from "./pages/ClubsLibertinsGeneve";
import ClubsLibertinsGrandEst from "./pages/ClubsLibertinsGrandEst";
import ClubsLibertinsGrenoble from "./pages/ClubsLibertinsGrenoble";
import ClubsLibertinsHautsDeFrance from "./pages/ClubsLibertinsHautsDeFrance";
import ClubsLibertinsIleDeFrance from "./pages/ClubsLibertinsIleDeFrance";
import ClubsLibertinsLausanne from "./pages/ClubsLibertinsLausanne";
import ClubsLibertinsLiege from "./pages/ClubsLibertinsLiege";
import ClubsLibertinsLille from "./pages/ClubsLibertinsLille";
import ClubsLibertinsLuxembourg from "./pages/ClubsLibertinsLuxembourg";
import ClubsLibertinsLyon from "./pages/ClubsLibertinsLyon";
import ClubsLibertinsMarseille from "./pages/ClubsLibertinsMarseille";
import ClubsLibertinsMontpellier from "./pages/ClubsLibertinsMontpellier";
import ClubsLibertinsNantes from "./pages/ClubsLibertinsNantes";
import ClubsLibertinsNice from "./pages/ClubsLibertinsNice";
import ClubsLibertinsNormandie from "./pages/ClubsLibertinsNormandie";
import ClubsLibertinsNouvelleAquitaine from "./pages/ClubsLibertinsNouvelleAquitaine";
import ClubsLibertinsOccitanie from "./pages/ClubsLibertinsOccitanie";
import ClubsLibertinsPaca from "./pages/ClubsLibertinsPaca";
import ClubsLibertinsParis from "./pages/ClubsLibertinsParis";
import ClubsLibertinsPaysDelaLoire from "./pages/ClubsLibertinsPaysDelaLoire";
import ClubsLibertinsReims from "./pages/ClubsLibertinsReims";
import ClubsLibertinsRennes from "./pages/ClubsLibertinsRennes";
import ClubsLibertinsStrasbourg from "./pages/ClubsLibertinsStrasbourg";
import ClubsLibertinsToulon from "./pages/ClubsLibertinsToulon";
import ClubsLibertinsToulouse from "./pages/ClubsLibertinsToulouse";
import ClubsLibertinsWallonie from "./pages/ClubsLibertinsWallonie";
import ClubsLibertinsZurich from "./pages/ClubsLibertinsZurich";

// ─── Comparatifs FR ───────────────────────────────────────────────────────────
import AkokyVsWyylde from "./pages/comparatifs/AkokyVsWyylde";
import AkokyVsNousLib from "./pages/comparatifs/AkokyVsNousLib";
import AkokyVsGleese from "./pages/comparatifs/AkokyVsGleese";
import AkokyVsEntreCoquins from "./pages/comparatifs/AkokyVsEntreCoquins";
import AkokyVsJmDate from "./pages/comparatifs/AkokyVsJmDate";
import AkokyVsJmLibertins from "./pages/comparatifs/AkokyVsJmLibertins";
import AkokyVsSexyLib from "./pages/comparatifs/AkokyVsSexyLib";
import MeilleurSiteLibertin from "./pages/comparatifs/MeilleurSiteLibertin";


// ─── Pages FR livraison 6 ─────────────────────────────────────────────────────
import FaqFr from "./pages/fr/FaqFr";
import CookiesFr from "./pages/fr/CookiesFr";
import GuideLibertin from "./pages/fr/GuideLibertin";
import GuideUltimeLibertin from "./pages/fr/GuideUltimeLibertin";
import ConcoursSixCles from "./pages/fr/ConcoursSixCles";
import AnnuaireClubs from "./pages/fr/AnnuaireClubs";

// ─── Blog system ──────────────────────────────────────────────────────────────
import BlogListing from "./pages/blog/BlogListing";
import BlogArticlePage from "./pages/blog/BlogArticle";
import BlogAdmin from "./pages/admin/BlogAdmin";
import BlogEditor from "./pages/admin/BlogEditor";
import BlogLogin from "./pages/admin/BlogLogin";

// ─── Concours system ─────────────────────────────────────────────────────────
import ConcoursListing from "./pages/concours/ConcoursListing";
import ConcoursArticlePage from "./pages/concours/ConcoursArticle";
import ConcoursAdmin from "./pages/admin/ConcoursAdmin";
import ConcoursEditor from "./pages/admin/ConcoursEditor";
import ConcoursLogin from "./pages/admin/ConcoursLogin";


import HomeEs from "./pages/es/HomeEs";
import AkokyEs from "./pages/es/AkokyEs";
import LibertingajeEs from "./pages/es/LibertingajeEs";
import EmpezarLibertingajeEs from "./pages/es/EmpezarLibertingajeEs";
import ClubesLibertinos from "./pages/es/ClubesLibertinos";
import EventosEs from "./pages/es/EventosEs";
import AppEs from "./pages/es/AppEs";
import VisionEs from "./pages/es/VisionEs";
import VipEs from "./pages/es/VipEs";
import AkokyVsWyyldeEs from "./pages/es/AkokyVsWyyldeEs";
import MejorSitioLibertino from "./pages/es/MejorSitioLibertino";
import SaunasLibertinos from "./pages/es/SaunasLibertinos";
import ActualidadLibertina from "./pages/es/ActualidadLibertina";
import JuegosEs from "./pages/es/JuegosEs";
import ContactoEs from "./pages/es/ContactoEs";
import CookiesEs from "./pages/es/CookiesEs";
import LiveEs from "./pages/es/LiveEs";
import ClubbingEs from "./pages/es/ClubbingEs";
import AvisEs from "./pages/es/AvisEs";
import ParrainageEs from "./pages/es/ParrainageEs";


// ─── Pages ES livraison 6 ─────────────────────────────────────────────────────
import ActualitesEs from "./pages/es/ActualitesEs";
import BlogRedirectEs from "./pages/es/BlogRedirectEs";
import FaqRedirectEs from "./pages/es/FaqRedirectEs";
import DebuterGuideEs from "./pages/es/DebuterGuideEs";
import LibertinageGuideEs from "./pages/es/LibertinageGuideEs";
import SaunasGuideEs from "./pages/es/SaunasGuideEs";
import LexiqueGuideEs from "./pages/es/LexiqueGuideEs";
import JeuxGuideEs from "./pages/es/JeuxGuideEs";
import EvenementsGuideEs from "./pages/es/EvenementsGuideEs";
import VipGuideEs from "./pages/es/VipGuideEs";
import VisionGuideEs from "./pages/es/VisionGuideEs";
import PremierClubGuideEs from "./pages/es/PremierClubGuideEs";
import PremierRdvGuideEs from "./pages/es/PremierRdvGuideEs";
import QuestionsGuideEs from "./pages/es/QuestionsGuideEs";
import GuideGuideEs from "./pages/es/GuideGuideEs";
import GuideUltimeGuideEs from "./pages/es/GuideUltimeGuideEs";
import ConcoursGuideEs from "./pages/es/ConcoursGuideEs";
import ConcoursClesGuideEs from "./pages/es/ConcoursClesGuideEs";
import ContactGuideEs from "./pages/es/ContactGuideEs";
import CookiesGuideEs from "./pages/es/CookiesGuideEs";
import PresseGuideEs from "./pages/es/PresseGuideEs";

// ─── Pages DE livraison 3 ─────────────────────────────────────────────────────
import HomeDe from "./pages/de/HomeDe";
import AkokyDe from "./pages/de/AkokyDe";
import LibertinismusAnfangenDe from "./pages/de/LibertinismusAnfangenDe";
import LibertineClubsDe from "./pages/de/LibertineClubsDe";
import EventsDe from "./pages/de/EventsDe";
import AppDe from "./pages/de/AppDe";
import VisionDe from "./pages/de/VisionDe";
import VipDe from "./pages/de/VipDe";
import AkokyVsWyyldeDe from "./pages/de/AkokyVsWyyldeDe";
import BesteLibertinenSeite from "./pages/de/BesteLibertinenSeite";
import SaunasDe from "./pages/de/SaunasDe";
import LibertineAktuellesDe from "./pages/de/LibertineAktuellesDe";
import KontaktDe from "./pages/de/KontaktDe";
import SpieleDe from "./pages/de/SpieleDe";
import LiveDe from "./pages/de/LiveDe";
import ClubbingDe from "./pages/de/ClubbingDe";
import BewertungenDe from "./pages/de/BewertungenDe";
import WerbungDe from "./pages/de/WerbungDe";
import LexikonDe from "./pages/de/LexikonDe";
import DatenschutzDe from "./pages/de/DatenschutzDe";


// ─── Pages DE livraison 6 ─────────────────────────────────────────────────────
import ActualitesDe from "./pages/de/ActualitesDe";
import BlogRedirectDe from "./pages/de/BlogRedirectDe";
import FaqRedirectDe from "./pages/de/FaqRedirectDe";
import DebuterGuideDe from "./pages/de/DebuterGuideDe";
import LibertinageGuideDe from "./pages/de/LibertinageGuideDe";
import SaunasGuideDe from "./pages/de/SaunasGuideDe";
import LexiqueGuideDe from "./pages/de/LexiqueGuideDe";
import JeuxGuideDe from "./pages/de/JeuxGuideDe";
import EvenementsGuideDe from "./pages/de/EvenementsGuideDe";
import VipGuideDe from "./pages/de/VipGuideDe";
import VisionGuideDe from "./pages/de/VisionGuideDe";
import PremierClubGuideDe from "./pages/de/PremierClubGuideDe";
import PremierRdvGuideDe from "./pages/de/PremierRdvGuideDe";
import QuestionsGuideDe from "./pages/de/QuestionsGuideDe";
import GuideGuideDe from "./pages/de/GuideGuideDe";
import GuideUltimeGuideDe from "./pages/de/GuideUltimeGuideDe";
import ConcoursGuideDe from "./pages/de/ConcoursGuideDe";
import ConcoursClesGuideDe from "./pages/de/ConcoursClesGuideDe";
import ContactGuideDe from "./pages/de/ContactGuideDe";
import CookiesGuideDe from "./pages/de/CookiesGuideDe";
import PresseGuideDe from "./pages/de/PresseGuideDe";

// ─── Pages IT livraison 4 ─────────────────────────────────────────────────────
import HomeIt from "./pages/it/HomeIt";
import AkokyIt from "./pages/it/AkokyIt";
import LibertinismoIt from "./pages/it/LibertinismoIt";
import IniziareLibertinismoIt from "./pages/it/IniziareLibertinismoIt";
import ClubLibertiniIt from "./pages/it/ClubLibertiniIt";
import EventiIt from "./pages/it/EventiIt";
import AppIt from "./pages/it/AppIt";
import VisioneIt from "./pages/it/VisioneIt";
import VipIt from "./pages/it/VipIt";
import AkokyVsWyyldeIt from "./pages/it/AkokyVsWyyldeIt";
import MigliorSitoLibertino from "./pages/it/MigliorSitoLibertino";
import SauneLibertineIt from "./pages/it/SauneLibertineIt";
import AttualitaLibertineIt from "./pages/it/AttualitaLibertineIt";
import ContattoIt from "./pages/it/ContattoIt";
import GiochiIt from "./pages/it/GiochiIt";
import LiveIt from "./pages/it/LiveIt";
import ClubbingIt from "./pages/it/ClubbingIt";
import RecensioniIt from "./pages/it/RecensioniIt";
import ReferralIt from "./pages/it/ReferralIt";
import LessicoLibertino from "./pages/it/LessicoLibertino";


// ─── Pages IT livraison 6 ─────────────────────────────────────────────────────
import ActualitesIt from "./pages/it/ActualitesIt";
import BlogRedirectIt from "./pages/it/BlogRedirectIt";
import FaqRedirectIt from "./pages/it/FaqRedirectIt";
import DebuterGuideIt from "./pages/it/DebuterGuideIt";
import LibertinageGuideIt from "./pages/it/LibertinageGuideIt";
import SaunasGuideIt from "./pages/it/SaunasGuideIt";
import LexiqueGuideIt from "./pages/it/LexiqueGuideIt";
import JeuxGuideIt from "./pages/it/JeuxGuideIt";
import EvenementsGuideIt from "./pages/it/EvenementsGuideIt";
import VipGuideIt from "./pages/it/VipGuideIt";
import VisionGuideIt from "./pages/it/VisionGuideIt";
import PremierClubGuideIt from "./pages/it/PremierClubGuideIt";
import PremierRdvGuideIt from "./pages/it/PremierRdvGuideIt";
import QuestionsGuideIt from "./pages/it/QuestionsGuideIt";
import GuideGuideIt from "./pages/it/GuideGuideIt";
import GuideUltimeGuideIt from "./pages/it/GuideUltimeGuideIt";
import ConcoursGuideIt from "./pages/it/ConcoursGuideIt";
import ConcoursClesGuideIt from "./pages/it/ConcoursClesGuideIt";
import ContactGuideIt from "./pages/it/ContactGuideIt";
import CookiesGuideIt from "./pages/it/CookiesGuideIt";
import PresseGuideIt from "./pages/it/PresseGuideIt";

// ─── Pages PT livraison 4 ─────────────────────────────────────────────────────
import HomePt from "./pages/pt/HomePt";
import AkokyPt from "./pages/pt/AkokyPt";
import LibertinismoPt from "./pages/pt/LibertinismoPt";
import ComecarLibertinagePt from "./pages/pt/ComecarLibertinagePt";
import ClubesLibertinoPt from "./pages/pt/ClubesLibertinoPt";
import EventosPt from "./pages/pt/EventosPt";
import AppPt from "./pages/pt/AppPt";
import VisaoPt from "./pages/pt/VisaoPt";
import VipPt from "./pages/pt/VipPt";
import AkokyVsWyyldePt from "./pages/pt/AkokyVsWyyldePt";
import MelhorSitioLibertino from "./pages/pt/MelhorSitioLibertino";
import SaunasLibertinoPt from "./pages/pt/SaunasLibertinoPt";
import AtualidadeLibertinaPt from "./pages/pt/AtualidadeLibertinaPt";
import ContatoPt from "./pages/pt/ContatoPt";
import JogosPt from "./pages/pt/JogosPt";
import LivePt from "./pages/pt/LivePt";
import ClubbingPt from "./pages/pt/ClubbingPt";
import AvaliacoesPt from "./pages/pt/AvaliacoesPt";
import ReferralPt from "./pages/pt/ReferralPt";
import LexicoPt from "./pages/pt/LexicoPt";

// ─── Utilitaires ──────────────────────────────────────────────────────────────
import NotFound from "./pages/NotFound";


// ─── Pages PT livraison 6 ─────────────────────────────────────────────────────
import ActualitesPt from "./pages/pt/ActualitesPt";
import BlogRedirectPt from "./pages/pt/BlogRedirectPt";
import FaqRedirectPt from "./pages/pt/FaqRedirectPt";
import DebuterGuidePt from "./pages/pt/DebuterGuidePt";
import LibertinageGuidePt from "./pages/pt/LibertinageGuidePt";
import SaunasGuidePt from "./pages/pt/SaunasGuidePt";
import LexiqueGuidePt from "./pages/pt/LexiqueGuidePt";
import JeuxGuidePt from "./pages/pt/JeuxGuidePt";
import EvenementsGuidePt from "./pages/pt/EvenementsGuidePt";
import VipGuidePt from "./pages/pt/VipGuidePt";
import VisionGuidePt from "./pages/pt/VisionGuidePt";
import PremierClubGuidePt from "./pages/pt/PremierClubGuidePt";
import PremierRdvGuidePt from "./pages/pt/PremierRdvGuidePt";
import QuestionsGuidePt from "./pages/pt/QuestionsGuidePt";
import GuideGuidePt from "./pages/pt/GuideGuidePt";
import GuideUltimeGuidePt from "./pages/pt/GuideUltimeGuidePt";
import ConcoursGuidePt from "./pages/pt/ConcoursGuidePt";
import ConcoursClesGuidePt from "./pages/pt/ConcoursClesGuidePt";
import ContactGuidePt from "./pages/pt/ContactGuidePt";
import CookiesGuidePt from "./pages/pt/CookiesGuidePt";
import PresseGuidePt from "./pages/pt/PresseGuidePt";

const queryClient = new QueryClient();

const RedirectToFrPath = () => {
  const location = useLocation();
  return <Navigate to={`/fr${location.pathname}${location.search}${location.hash}`} replace />;
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>

            {/* ── RACINE ─────────────────────────────────────────────────── */}
            <Route path="/" element={<Navigate to="/fr" replace />} />

            {/* ══════════════════════════════════════════════════════════════
                ROUTES FR
            ══════════════════════════════════════════════════════════════ */}
            <Route path="/fr" element={<HomeFr />} />
            <Route path="/fr/akoky" element={<Akoky />} />
            <Route path="/fr/application" element={<Application />} />
            <Route path="/fr/avis" element={<Avis />} />
            <Route path="/fr/parrainage" element={<Parrainage />} />
            <Route path="/fr/libertinage" element={<Libertinage />} />
            <Route path="/fr/debuter-libertinage" element={<DebuterLibertinage />} />
            <Route path="/fr/live" element={<Live />} />
            <Route path="/fr/presse" element={<Presse />} />
            <Route path="/fr/evenements" element={<Evenements />} />
            <Route path="/fr/vision" element={<Vision />} />
            <Route path="/fr/vip" element={<Vip />} />
            <Route path="/fr/lexique" element={<Lexique />} />
            <Route path="/fr/jeux" element={<Jeux />} />
            <Route path="/fr/saunas-libertins" element={<SaunasLibertins />} />
            <Route path="/fr/actualites-libertines" element={<ActualitesLibertines />} />
            <Route path="/fr/premier-club-libertin" element={<PremierClubLibertin />} />
            <Route path="/fr/premier-rendez-vous-libertin" element={<PremierRendezVousLibertin />} />
            <Route path="/fr/questions-debutants-libertinage" element={<QuestionsDebutantsLibertinage />} />
            <Route path="/fr/contact" element={<Contact />} />
            <Route path="/fr/concours" element={<Concours />} />
            <Route path="/fr/clubbing" element={<Clubbing />} />
            <Route path="/fr/clubbing-france-europe" element={<ClubbingFranceEurope />} />
            <Route path="/fr/clubbing-belgique" element={<ClubbingBelgique />} />
            <Route path="/fr/clubbing-suisse" element={<ClubbingSuisse />} />
            <Route path="/fr/clubbing-luxembourg" element={<ClubbingLuxembourg />} />
            <Route path="/fr/clubs-echangistes-france" element={<ClubsEchangistesFrance />} />
            <Route path="/fr/clubs-libertins" element={<ClubsLibertinsGeneral />} />
            <Route path="/fr/clubs-libertins-paris" element={<ClubsLibertinsParis />} />
            <Route path="/fr/clubs-libertins-lyon" element={<ClubsLibertinsLyon />} />
            <Route path="/fr/clubs-libertins-marseille" element={<ClubsLibertinsMarseille />} />
            <Route path="/fr/clubs-libertins-bordeaux" element={<ClubsLibertinsBordeaux />} />
            <Route path="/fr/clubs-libertins-toulouse" element={<ClubsLibertinsToulouse />} />
            <Route path="/fr/clubs-libertins-nice" element={<ClubsLibertinsNice />} />
            <Route path="/fr/clubs-libertins-montpellier" element={<ClubsLibertinsMontpellier />} />
            <Route path="/fr/clubs-libertins-nantes" element={<ClubsLibertinsNantes />} />
            <Route path="/fr/clubs-libertins-rennes" element={<ClubsLibertinsRennes />} />
            <Route path="/fr/clubs-libertins-strasbourg" element={<ClubsLibertinsStrasbourg />} />
            <Route path="/fr/clubs-libertins-reims" element={<ClubsLibertinsReims />} />
            <Route path="/fr/clubs-libertins-lille" element={<ClubsLibertinsLille />} />
            <Route path="/fr/clubs-libertins-grenoble" element={<ClubsLibertinsGrenoble />} />
            <Route path="/fr/clubs-libertins-dijon" element={<ClubsLibertinsDijon />} />
            <Route path="/fr/clubs-libertins-toulon" element={<ClubsLibertinsToulon />} />
            <Route path="/fr/clubs-libertins-cap-dagde" element={<ClubsLibertinsCapDagde />} />
            <Route path="/fr/clubs-libertins-ile-de-france" element={<ClubsLibertinsIleDeFrance />} />
            <Route path="/fr/clubs-libertins-hauts-de-france" element={<ClubsLibertinsHautsDeFrance />} />
            <Route path="/fr/clubs-libertins-grand-est" element={<ClubsLibertinsGrandEst />} />
            <Route path="/fr/clubs-libertins-auvergne-rhone-alpes" element={<ClubsLibertinsAuvergneRhoneAlpes />} />
            <Route path="/fr/clubs-libertins-occitanie" element={<ClubsLibertinsOccitanie />} />
            <Route path="/fr/clubs-libertins-paca" element={<ClubsLibertinsPaca />} />
            <Route path="/fr/clubs-libertins-nouvelle-aquitaine" element={<ClubsLibertinsNouvelleAquitaine />} />
            <Route path="/fr/clubs-libertins-normandie" element={<ClubsLibertinsNormandie />} />
            <Route path="/fr/clubs-libertins-bretagne" element={<ClubsLibertinsBretagne />} />
            <Route path="/fr/clubs-libertins-pays-de-la-loire" element={<ClubsLibertinsPaysDelaLoire />} />
            <Route path="/fr/clubs-libertins-bruxelles" element={<ClubsLibertinsBruxelles />} />
            <Route path="/fr/clubs-libertins-bruxelles-region" element={<ClubsLibertinsBruxellesRegion />} />
            <Route path="/fr/clubs-libertins-charleroi" element={<ClubsLibertinsCharleroi />} />
            <Route path="/fr/clubs-libertins-liege" element={<ClubsLibertinsLiege />} />
            <Route path="/fr/clubs-libertins-flandre" element={<ClubsLibertinsFlandre />} />
            <Route path="/fr/clubs-libertins-gand" element={<ClubsLibertinsGand />} />
            <Route path="/fr/clubs-libertins-anvers" element={<ClubsLibertinsAnvers />} />
            <Route path="/fr/clubs-libertins-bruges" element={<ClubsLibertinsBruges />} />
            <Route path="/fr/clubs-libertins-wallonie" element={<ClubsLibertinsWallonie />} />
            <Route path="/fr/clubs-libertins-geneve" element={<ClubsLibertinsGeneve />} />
            <Route path="/fr/clubs-libertins-lausanne" element={<ClubsLibertinsLausanne />} />
            <Route path="/fr/clubs-libertins-bale" element={<ClubsLibertinsBale />} />
            <Route path="/fr/clubs-libertins-zurich" element={<ClubsLibertinsZurich />} />
            <Route path="/fr/clubs-libertins-luxembourg" element={<ClubsLibertinsLuxembourg />} />
            <Route path="/fr/akoky-vs-wyylde" element={<AkokyVsWyylde />} />
            <Route path="/fr/akoky-vs-nouslib" element={<AkokyVsNousLib />} />
            <Route path="/fr/akoky-vs-gleese" element={<AkokyVsGleese />} />
            <Route path="/fr/akoky-vs-entrecoquins" element={<AkokyVsEntreCoquins />} />
            <Route path="/fr/akoky-vs-jmdate" element={<AkokyVsJmDate />} />
            <Route path="/fr/akoky-vs-jmlibertins" element={<AkokyVsJmLibertins />} />
            <Route path="/fr/akoky-vs-sexylib" element={<AkokyVsSexyLib />} />
            <Route path="/fr/meilleur-site-libertin" element={<MeilleurSiteLibertin />} />

            
            {/* ── Pages FR livraison 6 ───────────────────────────────────── */}
            <Route path="/fr/blog" element={<BlogListing lang="fr" />} />
            <Route path="/fr/blog/:slug" element={<BlogArticlePage lang="fr" />} />
            <Route path="/fr/faq" element={<FaqFr />} />
            <Route path="/fr/cookies" element={<CookiesFr />} />
            <Route path="/fr/guide-libertin-france" element={<GuideLibertin />} />
            <Route path="/fr/guide-ultime-libertinage-france" element={<GuideUltimeLibertin />} />
            <Route path="/fr/concours-six-cles" element={<ConcoursSixCles />} />
            <Route path="/fr/concours/:slug" element={<ConcoursArticlePage lang="fr" />} />
            <Route path="/fr/clubs" element={<AnnuaireClubs />} />

            {/* ══════════════════════════════════════════════════════════════
                REDIRECTIONS 301 — Toutes les URLs sans /fr/ vers /fr/
                (SEO : préserve les anciennes URLs indexées)
            ══════════════════════════════════════════════════════════════ */}
            <Route path="/clubs" element={<Navigate to="/fr/clubs-libertins" replace />} />
            <Route path="/clubs-libertins" element={<Navigate to="/fr/clubs-libertins" replace />} />
            <Route path="/akoky" element={<Navigate to="/fr/akoky" replace />} />
            <Route path="/application" element={<Navigate to="/fr/application" replace />} />
            <Route path="/avis" element={<Navigate to="/fr/avis" replace />} />
            <Route path="/parrainage" element={<Navigate to="/fr/parrainage" replace />} />
            <Route path="/libertinage" element={<Navigate to="/fr/libertinage" replace />} />
            <Route path="/debuter-libertinage" element={<Navigate to="/fr/debuter-libertinage" replace />} />
            <Route path="/live" element={<Navigate to="/fr/live" replace />} />
            <Route path="/vision" element={<Navigate to="/fr/vision" replace />} />
            <Route path="/vip" element={<Navigate to="/fr/vip" replace />} />
            <Route path="/contact" element={<Navigate to="/fr/contact" replace />} />
            <Route path="/evenements" element={<Navigate to="/fr/evenements" replace />} />
            <Route path="/lexique" element={<Navigate to="/fr/lexique" replace />} />
            <Route path="/jeux" element={<Navigate to="/fr/jeux" replace />} />
            <Route path="/saunas-libertins" element={<Navigate to="/fr/saunas-libertins" replace />} />
            <Route path="/presse" element={<Navigate to="/fr/presse" replace />} />
            <Route path="/concours" element={<Navigate to="/fr/concours" replace />} />
            <Route path="/concours-six-cles" element={<Navigate to="/fr/concours-six-cles" replace />} />
            <Route path="/actualites-libertines" element={<Navigate to="/fr/actualites-libertines" replace />} />
            <Route path="/premier-club-libertin" element={<Navigate to="/fr/premier-club-libertin" replace />} />
            <Route path="/premier-rendez-vous-libertin" element={<Navigate to="/fr/premier-rendez-vous-libertin" replace />} />
            <Route path="/questions-debutants-libertinage" element={<Navigate to="/fr/questions-debutants-libertinage" replace />} />
            <Route path="/guide-libertin-france" element={<Navigate to="/fr/guide-libertin-france" replace />} />
            <Route path="/guide-ultime-libertinage-france" element={<Navigate to="/fr/guide-ultime-libertinage-france" replace />} />
            <Route path="/annuaire-clubs-libertins" element={<Navigate to="/fr/annuaire-clubs-libertins" replace />} />
            <Route path="/meilleur-site-libertin" element={<Navigate to="/fr/meilleur-site-libertin" replace />} />
            <Route path="/clubbing" element={<Navigate to="/fr/clubbing" replace />} />
            <Route path="/clubbing-france-europe" element={<RedirectToFrPath />} />
            <Route path="/clubbing-belgique" element={<RedirectToFrPath />} />
            <Route path="/clubbing-suisse" element={<RedirectToFrPath />} />
            <Route path="/clubbing-luxembourg" element={<RedirectToFrPath />} />
            <Route path="/clubs-echangistes-france" element={<RedirectToFrPath />} />
            <Route path="/clubs-libertins-*" element={<RedirectToFrPath />} />
            <Route path="/akoky-vs-wyylde" element={<Navigate to="/fr/akoky-vs-wyylde" replace />} />
            <Route path="/blogs" element={<Navigate to="/fr/blog" replace />} />
            <Route path="/blog" element={<Navigate to="/fr/blog" replace />} />
            <Route path="/faq" element={<Navigate to="https://ask.akoky.com" replace />} />

            {/* ══════════════════════════════════════════════════════════════
                ROUTES ES
            ══════════════════════════════════════════════════════════════ */}
            <Route path="/es" element={<HomeEs />} />
            <Route path="/es/akoky" element={<AkokyEs />} />
            <Route path="/es/libertinaje" element={<LibertingajeEs />} />
            <Route path="/es/empezar-libertinaje" element={<EmpezarLibertingajeEs />} />
            <Route path="/es/clubes-libertinos" element={<ClubesLibertinos />} />
            <Route path="/es/clubs" element={<Navigate to="/es/clubes-libertinos" replace />} />
            <Route path="/es/eventos" element={<EventosEs />} />
            <Route path="/es/app" element={<AppEs />} />
            <Route path="/es/vision" element={<VisionEs />} />
            <Route path="/es/vip" element={<VipEs />} />
            <Route path="/es/akoky-vs-wyylde" element={<AkokyVsWyyldeEs />} />
            <Route path="/es/mejor-sitio-libertino" element={<MejorSitioLibertino />} />
            <Route path="/es/saunas-libertinos" element={<SaunasLibertinos />} />
            <Route path="/es/actualidad-libertina" element={<ActualidadLibertina />} />
            <Route path="/es/juegos" element={<JuegosEs />} />
            <Route path="/es/contacto" element={<ContactoEs />} />
            <Route path="/es/cookies" element={<CookiesEs />} />
            <Route path="/es/live" element={<LiveEs />} />
            <Route path="/es/clubbing" element={<ClubbingEs />} />
            <Route path="/es/avis" element={<AvisEs />} />
            <Route path="/es/parrainage" element={<ParrainageEs />} />
            
            {/* ── Pages ES livraison 6 ───────────────────────────────────── */}
            <Route path="/es/actualidad-libertina-2026" element={<ActualitesEs />} />
            <Route path="/es/como-empezar-libertinaje" element={<DebuterGuideEs />} />
            <Route path="/es/libertinaje-guia" element={<LibertinageGuideEs />} />
            <Route path="/es/saunas-libertinos-guia" element={<SaunasGuideEs />} />
            <Route path="/es/lexico-libertino-guia" element={<LexiqueGuideEs />} />
            <Route path="/es/juegos-libertinos-guia" element={<JeuxGuideEs />} />
            <Route path="/es/eventos-libertinos-guia" element={<EvenementsGuideEs />} />
            <Route path="/es/vip-premium" element={<VipGuideEs />} />
            <Route path="/es/vision-akoky-guide" element={<VisionGuideEs />} />
            <Route path="/es/primer-club-libertino" element={<PremierClubGuideEs />} />
            <Route path="/es/primera-experiencia-libertina" element={<PremierRdvGuideEs />} />
            <Route path="/es/preguntas-principiantes" element={<QuestionsGuideEs />} />
            <Route path="/es/guia-libertinaje-completa" element={<GuideGuideEs />} />
            <Route path="/es/guia-definitiva-libertinaje" element={<GuideUltimeGuideEs />} />
            <Route path="/es/concurso-akoky-2026" element={<ConcoursGuideEs />} />
            <Route path="/es/juego-seis-llaves" element={<ConcoursClesGuideEs />} />
            <Route path="/es/contacto-akoky" element={<ContactGuideEs />} />
            <Route path="/es/politica-cookies" element={<CookiesGuideEs />} />
            <Route path="/es/sala-de-prensa" element={<PresseGuideEs />} />
            <Route path="/es/faq" element={<Navigate to="https://ask.akoky.com" replace />} />
            <Route path="/es/blog" element={<BlogListing lang="es" />} />
            <Route path="/es/blog/:slug" element={<BlogArticlePage lang="es" />} />
            <Route path="/es/concours" element={<ConcoursListing lang="es" />} />
            <Route path="/es/concours/:slug" element={<ConcoursArticlePage lang="es" />} />

            {/* ══════════════════════════════════════════════════════════════
                ROUTES DE
            ══════════════════════════════════════════════════════════════ */}
            <Route path="/de" element={<HomeDe />} />
            <Route path="/de/akoky" element={<AkokyDe />} />
            <Route path="/de/libertinismus-anfangen" element={<LibertinismusAnfangenDe />} />
            <Route path="/de/libertine-clubs" element={<LibertineClubsDe />} />
            <Route path="/de/clubs" element={<Navigate to="/de/libertine-clubs" replace />} />
            <Route path="/de/events" element={<EventsDe />} />
            <Route path="/de/app" element={<AppDe />} />
            <Route path="/de/vision" element={<VisionDe />} />
            <Route path="/de/vip" element={<VipDe />} />
            <Route path="/de/akoky-vs-wyylde" element={<AkokyVsWyyldeDe />} />
            <Route path="/de/beste-libertine-seite" element={<BesteLibertinenSeite />} />
            <Route path="/de/saunas" element={<SaunasDe />} />
            <Route path="/de/libertine-aktuelles" element={<LibertineAktuellesDe />} />
            <Route path="/de/kontakt" element={<KontaktDe />} />
            <Route path="/de/spiele" element={<SpieleDe />} />
            <Route path="/de/live" element={<LiveDe />} />
            <Route path="/de/clubbing" element={<ClubbingDe />} />
            <Route path="/de/bewertungen" element={<BewertungenDe />} />
            <Route path="/de/empfehlung" element={<WerbungDe />} />
            <Route path="/de/lexikon" element={<LexikonDe />} />
            <Route path="/de/datenschutz" element={<DatenschutzDe />} />
            
            {/* ── Pages DE livraison 6 ───────────────────────────────────── */}
            <Route path="/de/libertine-neuigkeiten" element={<ActualitesDe />} />
            <Route path="/de/libertinismus-beginnen" element={<DebuterGuideDe />} />
            <Route path="/de/libertinismus-guide" element={<LibertinageGuideDe />} />
            <Route path="/de/libertine-saunas-guide" element={<SaunasGuideDe />} />
            <Route path="/de/libertines-lexikon-guide" element={<LexiqueGuideDe />} />
            <Route path="/de/libertine-spiele-guide" element={<JeuxGuideDe />} />
            <Route path="/de/libertine-veranstaltungen" element={<EvenementsGuideDe />} />
            <Route path="/de/vip-premium-guide" element={<VipGuideDe />} />
            <Route path="/de/vision-akoky-guide" element={<VisionGuideDe />} />
            <Route path="/de/erster-libertiner-club" element={<PremierClubGuideDe />} />
            <Route path="/de/erste-libertine-erfahrung" element={<PremierRdvGuideDe />} />
            <Route path="/de/fragen-anfaenger-guide" element={<QuestionsGuideDe />} />
            <Route path="/de/libertinismus-ratgeber" element={<GuideGuideDe />} />
            <Route path="/de/ultimativer-libertinismus-ratgeber" element={<GuideUltimeGuideDe />} />
            <Route path="/de/gewinnspiel-akoky-2026" element={<ConcoursGuideDe />} />
            <Route path="/de/sechs-schluessel-spiel" element={<ConcoursClesGuideDe />} />
            <Route path="/de/kontakt-akoky" element={<ContactGuideDe />} />
            <Route path="/de/cookie-richtlinie" element={<CookiesGuideDe />} />
            <Route path="/de/pressestelle" element={<PresseGuideDe />} />
            <Route path="/de/faq" element={<Navigate to="https://ask.akoky.com" replace />} />
            <Route path="/de/blog" element={<BlogListing lang="de" />} />
            <Route path="/de/blog/:slug" element={<BlogArticlePage lang="de" />} />
            <Route path="/de/concours" element={<ConcoursListing lang="de" />} />
            <Route path="/de/concours/:slug" element={<ConcoursArticlePage lang="de" />} />

            {/* ══════════════════════════════════════════════════════════════
                ROUTES IT
            ══════════════════════════════════════════════════════════════ */}
            <Route path="/it" element={<HomeIt />} />
            <Route path="/it/akoky" element={<AkokyIt />} />
            <Route path="/it/libertinismo" element={<LibertinismoIt />} />
            <Route path="/it/iniziare-libertinismo" element={<IniziareLibertinismoIt />} />
            <Route path="/it/club-libertini" element={<ClubLibertiniIt />} />
            <Route path="/it/clubs" element={<Navigate to="/it/club-libertini" replace />} />
            <Route path="/it/eventi" element={<EventiIt />} />
            <Route path="/it/app" element={<AppIt />} />
            <Route path="/it/visione" element={<VisioneIt />} />
            <Route path="/it/vip" element={<VipIt />} />
            <Route path="/it/akoky-vs-wyylde" element={<AkokyVsWyyldeIt />} />
            <Route path="/it/miglior-sito-libertino" element={<MigliorSitoLibertino />} />
            <Route path="/it/saune-libertine" element={<SauneLibertineIt />} />
            <Route path="/it/attualita-libertine" element={<AttualitaLibertineIt />} />
            <Route path="/it/contatto" element={<ContattoIt />} />
            <Route path="/it/giochi" element={<GiochiIt />} />
            <Route path="/it/live" element={<LiveIt />} />
            <Route path="/it/clubbing" element={<ClubbingIt />} />
            <Route path="/it/recensioni" element={<RecensioniIt />} />
            <Route path="/it/referral" element={<ReferralIt />} />
            <Route path="/it/lessico-libertino" element={<LessicoLibertino />} />
            
            {/* ── Pages IT livraison 6 ───────────────────────────────────── */}
            <Route path="/it/attualita-libertina-2026" element={<ActualitesIt />} />
            <Route path="/it/come-iniziare-libertinismo" element={<DebuterGuideIt />} />
            <Route path="/it/libertinismo-guida" element={<LibertinageGuideIt />} />
            <Route path="/it/saune-libertine-guida" element={<SaunasGuideIt />} />
            <Route path="/it/lessico-libertino-guida" element={<LexiqueGuideIt />} />
            <Route path="/it/giochi-libertini-guida" element={<JeuxGuideIt />} />
            <Route path="/it/eventi-libertini-guida" element={<EvenementsGuideIt />} />
            <Route path="/it/vip-premium-guida" element={<VipGuideIt />} />
            <Route path="/it/visione-akoky-guide" element={<VisionGuideIt />} />
            <Route path="/it/primo-club-libertino" element={<PremierClubGuideIt />} />
            <Route path="/it/prima-esperienza-libertina" element={<PremierRdvGuideIt />} />
            <Route path="/it/domande-principianti-guida" element={<QuestionsGuideIt />} />
            <Route path="/it/guida-libertinismo-completa" element={<GuideGuideIt />} />
            <Route path="/it/guida-definitiva-libertinismo" element={<GuideUltimeGuideIt />} />
            <Route path="/it/concorso-akoky-2026" element={<ConcoursGuideIt />} />
            <Route path="/it/gioco-sei-chiavi" element={<ConcoursClesGuideIt />} />
            <Route path="/it/contatto-akoky" element={<ContactGuideIt />} />
            <Route path="/it/politica-cookie-guida" element={<CookiesGuideIt />} />
            <Route path="/it/sala-stampa" element={<PresseGuideIt />} />
            <Route path="/it/faq" element={<Navigate to="https://ask.akoky.com" replace />} />
            <Route path="/it/blog" element={<BlogListing lang="it" />} />
            <Route path="/it/blog/:slug" element={<BlogArticlePage lang="it" />} />
            <Route path="/it/concours" element={<ConcoursListing lang="it" />} />
            <Route path="/it/concours/:slug" element={<ConcoursArticlePage lang="it" />} />

            {/* ══════════════════════════════════════════════════════════════
                ROUTES PT
            ══════════════════════════════════════════════════════════════ */}
            <Route path="/pt" element={<HomePt />} />
            <Route path="/pt/akoky" element={<AkokyPt />} />
            <Route path="/pt/libertinismo" element={<LibertinismoPt />} />
            <Route path="/pt/comecar-libertinagem" element={<ComecarLibertinagePt />} />
            <Route path="/pt/clubes-libertinos" element={<ClubesLibertinoPt />} />
            <Route path="/pt/clubs" element={<Navigate to="/pt/clubes-libertinos" replace />} />
            <Route path="/pt/eventos" element={<EventosPt />} />
            <Route path="/pt/app" element={<AppPt />} />
            <Route path="/pt/visao" element={<VisaoPt />} />
            <Route path="/pt/vip" element={<VipPt />} />
            <Route path="/pt/akoky-vs-wyylde" element={<AkokyVsWyyldePt />} />
            <Route path="/pt/melhor-sitio-libertino" element={<MelhorSitioLibertino />} />
            <Route path="/pt/saunas-libertinos" element={<SaunasLibertinoPt />} />
            <Route path="/pt/atualidade-libertina" element={<AtualidadeLibertinaPt />} />
            <Route path="/pt/contato" element={<ContatoPt />} />
            <Route path="/pt/jogos" element={<JogosPt />} />
            <Route path="/pt/live" element={<LivePt />} />
            <Route path="/pt/clubbing" element={<ClubbingPt />} />
            <Route path="/pt/avaliacoes" element={<AvaliacoesPt />} />
            <Route path="/pt/referral" element={<ReferralPt />} />
            <Route path="/pt/lexico-libertino" element={<LexicoPt />} />
            
            {/* ── Pages PT livraison 6 ───────────────────────────────────── */}
            <Route path="/pt/atualidade-libertina-2026" element={<ActualitesPt />} />
            <Route path="/pt/comecar-libertinismo-guia" element={<DebuterGuidePt />} />
            <Route path="/pt/libertinismo-guia" element={<LibertinageGuidePt />} />
            <Route path="/pt/saunas-libertinos-guia" element={<SaunasGuidePt />} />
            <Route path="/pt/lexico-libertino-guia" element={<LexiqueGuidePt />} />
            <Route path="/pt/jogos-libertinos-guia" element={<JeuxGuidePt />} />
            <Route path="/pt/eventos-libertinos-guia" element={<EvenementsGuidePt />} />
            <Route path="/pt/vip-premium-guia" element={<VipGuidePt />} />
            <Route path="/pt/visao-akoky-guide" element={<VisionGuidePt />} />
            <Route path="/pt/primeiro-clube-libertino" element={<PremierClubGuidePt />} />
            <Route path="/pt/primeira-experiencia-libertina" element={<PremierRdvGuidePt />} />
            <Route path="/pt/perguntas-principiantes-guia" element={<QuestionsGuidePt />} />
            <Route path="/pt/guia-libertinismo-completo" element={<GuideGuidePt />} />
            <Route path="/pt/guia-definitivo-libertinismo" element={<GuideUltimeGuidePt />} />
            <Route path="/pt/concurso-akoky-2026" element={<ConcoursGuidePt />} />
            <Route path="/pt/jogo-seis-chaves" element={<ConcoursClesGuidePt />} />
            <Route path="/pt/contacto-akoky" element={<ContactGuidePt />} />
            <Route path="/pt/politica-cookies-guia" element={<CookiesGuidePt />} />
            <Route path="/pt/sala-de-imprensa" element={<PresseGuidePt />} />
            <Route path="/pt/faq" element={<Navigate to="https://ask.akoky.com" replace />} />
            <Route path="/pt/blog" element={<BlogListing lang="pt" />} />
            <Route path="/pt/blog/:slug" element={<BlogArticlePage lang="pt" />} />
            <Route path="/pt/concours" element={<ConcoursListing lang="pt" />} />
            <Route path="/pt/concours/:slug" element={<ConcoursArticlePage lang="pt" />} />

            {/* ── EN Blog + Concours ──────────────────────────────────── */}
            <Route path="/en/blog" element={<BlogListing lang="en" />} />
            <Route path="/en/blog/:slug" element={<BlogArticlePage lang="en" />} />
            <Route path="/en/concours" element={<ConcoursListing lang="en" />} />
            <Route path="/en/concours/:slug" element={<ConcoursArticlePage lang="en" />} />

            {/* ── Admin Blog ─────────────────────────────────────────────── */}
            <Route path="/admin/blog/login" element={<BlogLogin />} />
            <Route path="/admin/blog/connexion" element={<BlogLogin />} />
            <Route path="/admin/blog" element={<BlogAdmin />} />
            <Route path="/admin/blog/new" element={<BlogEditor />} />
            <Route path="/admin/blog/edit/:id" element={<BlogEditor />} />

            {/* ── Admin Concours ──────────────────────────────────────────── */}
            <Route path="/admin/concours/login" element={<ConcoursLogin />} />
            <Route path="/admin/concours" element={<ConcoursAdmin />} />
            <Route path="/admin/concours/new" element={<ConcoursEditor />} />
            <Route path="/admin/concours/edit/:id" element={<ConcoursEditor />} />


            <Route path="*" element={<NotFound />} />

          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
