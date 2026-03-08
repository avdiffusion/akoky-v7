import { Link } from "react-router-dom";

type Lang = "fr" | "en" | "es" | "de" | "it" | "pt";

interface FooterProps {
  lang?: Lang;
}

interface FooterLink { href: string; icon: string; label: string }

const DISCOVER_LINKS: Record<Lang, FooterLink[]> = {
  fr: [
    { href: "/", icon: "🏠", label: "Accueil" },
    { href: "/akoky", icon: "ℹ️", label: "À propos" },
    { href: "/fr/blog", icon: "📖", label: "Blog" },
    { href: "/fr/evenements", icon: "📅", label: "Événements" },
    { href: "/fr/jeux", icon: "🎮", label: "Jeux" },
    { href: "/fr/avis", icon: "⭐", label: "Avis" },
    { href: "/fr/application", icon: "📱", label: "App mobile" },
  ],
  en: [
    { href: "/en", icon: "🏠", label: "Home" },
    { href: "/en/akoky", icon: "ℹ️", label: "About" },
    { href: "/en/blog", icon: "📖", label: "Blog" },
    { href: "/en/events", icon: "📅", label: "Events" },
    { href: "/en/games", icon: "🎮", label: "Games" },
    { href: "/en/reviews", icon: "⭐", label: "Reviews" },
    { href: "/en/app", icon: "📱", label: "Mobile App" },
  ],
  es: [
    { href: "/es", icon: "🏠", label: "Inicio" },
    { href: "/es/akoky", icon: "ℹ️", label: "Acerca de" },
    { href: "/es/blog", icon: "📖", label: "Blog" },
    { href: "/es/eventos", icon: "📅", label: "Eventos" },
    { href: "/es/juegos", icon: "🎮", label: "Juegos" },
    { href: "/es/avis", icon: "⭐", label: "Opiniones" },
    { href: "/es/aplicacion", icon: "📱", label: "App móvil" },
  ],
  de: [
    { href: "/de", icon: "🏠", label: "Startseite" },
    { href: "/de/akoky", icon: "ℹ️", label: "Über uns" },
    { href: "/de/blog", icon: "📖", label: "Blog" },
    { href: "/de/veranstaltungen", icon: "📅", label: "Events" },
    { href: "/de/spiele", icon: "🎮", label: "Spiele" },
    { href: "/de/bewertungen", icon: "⭐", label: "Bewertungen" },
    { href: "/de/app", icon: "📱", label: "Mobile App" },
  ],
  it: [
    { href: "/it", icon: "🏠", label: "Home" },
    { href: "/it/akoky", icon: "ℹ️", label: "Chi siamo" },
    { href: "/it/blog", icon: "📖", label: "Blog" },
    { href: "/it/eventi", icon: "📅", label: "Eventi" },
    { href: "/it/giochi", icon: "🎮", label: "Giochi" },
    { href: "/it/recensioni", icon: "⭐", label: "Recensioni" },
    { href: "/it/app", icon: "📱", label: "App mobile" },
  ],
  pt: [
    { href: "/pt", icon: "🏠", label: "Início" },
    { href: "/pt/akoky", icon: "ℹ️", label: "Sobre" },
    { href: "/pt/blog", icon: "📖", label: "Blog" },
    { href: "/pt/eventos", icon: "📅", label: "Eventos" },
    { href: "/pt/jogos", icon: "🎮", label: "Jogos" },
    { href: "/pt/avaliacoes", icon: "⭐", label: "Avaliações" },
    { href: "/pt/app", icon: "📱", label: "App mobile" },
  ],
};

const COMMUNITY_LINKS: Record<Lang, FooterLink[]> = {
  fr: [
    { href: "/clubbing", icon: "🏢", label: "Clubbing" },
    { href: "/vip", icon: "💎", label: "Adhésion VIP" },
    { href: "/lexique", icon: "📚", label: "Lexique libertin" },
    { href: "/presse", icon: "📰", label: "Espace presse" },
    { href: "/faq", icon: "❓", label: "FAQ" },
    { href: "/contact", icon: "✉️", label: "Contact" },
  ],
  en: [
    { href: "/en/clubbing", icon: "🏢", label: "Clubbing" },
    { href: "/en/vip", icon: "💎", label: "VIP Membership" },
    { href: "/en/lexicon", icon: "📚", label: "Libertine Lexicon" },
    { href: "/en/press", icon: "📰", label: "Press Room" },
    { href: "/en/faq", icon: "❓", label: "FAQ" },
    { href: "/en/contact", icon: "✉️", label: "Contact" },
  ],
  es: [
    { href: "/es/clubbing", icon: "🏢", label: "Clubbing" },
    { href: "/es/vip", icon: "💎", label: "Membresía VIP" },
    { href: "/es/lexico", icon: "📚", label: "Léxico libertino" },
    { href: "/es/prensa", icon: "📰", label: "Sala de prensa" },
    { href: "/es/faq", icon: "❓", label: "FAQ" },
    { href: "/es/contacto", icon: "✉️", label: "Contacto" },
  ],
  de: [
    { href: "/de/clubbing", icon: "🏢", label: "Clubbing" },
    { href: "/de/vip", icon: "💎", label: "VIP-Mitgliedschaft" },
    { href: "/de/lexikon", icon: "📚", label: "Libertines Lexikon" },
    { href: "/de/presse", icon: "📰", label: "Pressebereich" },
    { href: "/de/faq", icon: "❓", label: "FAQ" },
    { href: "/de/kontakt", icon: "✉️", label: "Kontakt" },
  ],
  it: [
    { href: "/it/clubbing", icon: "🏢", label: "Clubbing" },
    { href: "/it/vip", icon: "💎", label: "Abbonamento VIP" },
    { href: "/it/lessico", icon: "📚", label: "Lessico libertino" },
    { href: "/it/stampa", icon: "📰", label: "Sala stampa" },
    { href: "/it/faq", icon: "❓", label: "FAQ" },
    { href: "/it/contatto", icon: "✉️", label: "Contatto" },
  ],
  pt: [
    { href: "/pt/clubbing", icon: "🏢", label: "Clubbing" },
    { href: "/pt/vip", icon: "💎", label: "Adesão VIP" },
    { href: "/pt/lexico", icon: "📚", label: "Léxico libertino" },
    { href: "/pt/imprensa", icon: "📰", label: "Sala de imprensa" },
    { href: "/pt/faq", icon: "❓", label: "FAQ" },
    { href: "/pt/contacto", icon: "✉️", label: "Contacto" },
  ],
};

const SECTION_TITLES: Record<Lang, { discover: string; community: string; resources: string }> = {
  fr: { discover: "Découvrir", community: "Communauté", resources: "Ressources" },
  en: { discover: "Discover", community: "Community", resources: "Resources" },
  es: { discover: "Descubrir", community: "Comunidad", resources: "Recursos" },
  de: { discover: "Entdecken", community: "Community", resources: "Ressourcen" },
  it: { discover: "Scopri", community: "Comunità", resources: "Risorse" },
  pt: { discover: "Descobrir", community: "Comunidade", resources: "Recursos" },
};

const BRAND_DESC: Record<Lang, string> = {
  fr: "La plus grande communauté libertine d'Europe. Un espace élégant, sécurisé et authentique.",
  en: "Europe's largest libertine community. An elegant, secure and authentic space.",
  es: "La mayor comunidad libertina de Europa. Un espacio elegante, seguro y auténtico.",
  de: "Europas größte libertine Community. Ein eleganter, sicherer und authentischer Raum.",
  it: "La più grande comunità libertina d'Europa. Uno spazio elegante, sicuro e autentico.",
  pt: "A maior comunidade libertina da Europa. Um espaço elegante, seguro e autêntico.",
};

const CTA_LABELS: Record<Lang, { join: string; clubs: string; joinDesc: string }> = {
  fr: { join: "Rejoignez la communauté AKOKY", clubs: "Voir les clubs", joinDesc: "1,5 million de membres sur le premier réseau social libertin complet. Inscription gratuite, sans carte bancaire." },
  en: { join: "Join the AKOKY community", clubs: "View clubs", joinDesc: "1.5 million members on the leading complete libertine social network. Free sign-up, no credit card required." },
  es: { join: "Únete a la comunidad AKOKY", clubs: "Ver clubes", joinDesc: "1,5 millones de miembros en la primera red social libertina completa. Registro gratuito, sin tarjeta de crédito." },
  de: { join: "Treten Sie der AKOKY-Community bei", clubs: "Clubs anzeigen", joinDesc: "1,5 Millionen Mitglieder im führenden libertinen sozialen Netzwerk. Kostenlose Anmeldung, keine Kreditkarte erforderlich." },
  it: { join: "Unisciti alla comunità AKOKY", clubs: "Vedi i club", joinDesc: "1,5 milioni di membri sulla prima rete sociale libertina completa. Iscrizione gratuita, senza carta di credito." },
  pt: { join: "Junte-se à comunidade AKOKY", clubs: "Ver clubes", joinDesc: "1,5 milhão de membros na principal rede social libertina completa. Registo gratuito, sem cartão de crédito." },
};

const REGISTER_LABELS: Record<Lang, string> = {
  fr: "Créer mon compte gratuit",
  en: "Create my free account",
  es: "Crear mi cuenta gratis",
  de: "Kostenloses Konto erstellen",
  it: "Crea il mio account gratuito",
  pt: "Criar minha conta grátis",
};

const COPYRIGHT_LABELS: Record<Lang, { rights: string; adults: string; lang: string; available: string; secure: string; gdpr: string; update: string }> = {
  fr: { rights: "Tous droits réservés.", adults: "Le contenu de ce site est réservé aux adultes.", lang: "Langue", available: "Akoky est disponible en 6 langues", secure: "🔒 Connexion sécurisée", gdpr: "✅ RGPD conforme", update: "🕒 Mise à jour : janv. 2026" },
  en: { rights: "All rights reserved.", adults: "This website's content is for adults only.", lang: "Language", available: "Akoky is available in 6 languages", secure: "🔒 Secure connection", gdpr: "✅ GDPR compliant", update: "🕒 Updated: Jan. 2026" },
  es: { rights: "Todos los derechos reservados.", adults: "El contenido de este sitio es solo para adultos.", lang: "Idioma", available: "Akoky está disponible en 6 idiomas", secure: "🔒 Conexión segura", gdpr: "✅ Cumple con el RGPD", update: "🕒 Actualización: ene. 2026" },
  de: { rights: "Alle Rechte vorbehalten.", adults: "Der Inhalt dieser Website ist nur für Erwachsene.", lang: "Sprache", available: "Akoky ist in 6 Sprachen verfügbar", secure: "🔒 Sichere Verbindung", gdpr: "✅ DSGVO-konform", update: "🕒 Aktualisierung: Jan. 2026" },
  it: { rights: "Tutti i diritti riservati.", adults: "Il contenuto di questo sito è riservato agli adulti.", lang: "Lingua", available: "Akoky è disponibile in 6 lingue", secure: "🔒 Connessione sicura", gdpr: "✅ Conforme al GDPR", update: "🕒 Aggiornamento: gen. 2026" },
  pt: { rights: "Todos os direitos reservados.", adults: "O conteúdo deste site é apenas para adultos.", lang: "Idioma", available: "Akoky está disponível em 6 idiomas", secure: "🔒 Conexão segura", gdpr: "✅ Conforme com o RGPD", update: "🕒 Atualização: jan. 2026" },
};

const RESOURCE_LINKS: Record<Lang, FooterLink[]> = {
  fr: [
    { href: "https://legal.akoky.com/mentions-legales", icon: "📄", label: "Mentions légales" },
    { href: "https://legal.akoky.com/conditions-utilisation", icon: "🤝", label: "Conditions d'utilisation" },
    { href: "https://legal.akoky.com/conditions-vente", icon: "🛒", label: "Conditions de vente" },
    { href: "https://legal.akoky.com/confidentialite", icon: "🔒", label: "Confidentialité" },
    { href: "https://legal.akoky.com/cookies", icon: "🍪", label: "Cookies" },
    { href: "https://legal.akoky.com/securite", icon: "🛡️", label: "Sécurité" },
    { href: "https://legal.akoky.com/charte", icon: "📜", label: "Charte AKOKY" },
  ],
  en: [
    { href: "https://legal.akoky.com/mentions-legales", icon: "📄", label: "Legal notices" },
    { href: "https://legal.akoky.com/conditions-utilisation", icon: "🤝", label: "Terms of use" },
    { href: "https://legal.akoky.com/conditions-vente", icon: "🛒", label: "Terms of sale" },
    { href: "https://legal.akoky.com/confidentialite", icon: "🔒", label: "Privacy policy" },
    { href: "https://legal.akoky.com/cookies", icon: "🍪", label: "Cookies" },
    { href: "https://legal.akoky.com/securite", icon: "🛡️", label: "Security" },
    { href: "https://legal.akoky.com/charte", icon: "📜", label: "AKOKY Charter" },
  ],
  es: [
    { href: "https://legal.akoky.com/mentions-legales", icon: "📄", label: "Aviso legal" },
    { href: "https://legal.akoky.com/conditions-utilisation", icon: "🤝", label: "Condiciones de uso" },
    { href: "https://legal.akoky.com/conditions-vente", icon: "🛒", label: "Condiciones de venta" },
    { href: "https://legal.akoky.com/confidentialite", icon: "🔒", label: "Privacidad" },
    { href: "https://legal.akoky.com/cookies", icon: "🍪", label: "Cookies" },
    { href: "https://legal.akoky.com/securite", icon: "🛡️", label: "Seguridad" },
    { href: "https://legal.akoky.com/charte", icon: "📜", label: "Carta AKOKY" },
  ],
  de: [
    { href: "https://legal.akoky.com/mentions-legales", icon: "📄", label: "Impressum" },
    { href: "https://legal.akoky.com/conditions-utilisation", icon: "🤝", label: "Nutzungsbedingungen" },
    { href: "https://legal.akoky.com/conditions-vente", icon: "🛒", label: "Verkaufsbedingungen" },
    { href: "https://legal.akoky.com/confidentialite", icon: "🔒", label: "Datenschutz" },
    { href: "https://legal.akoky.com/cookies", icon: "🍪", label: "Cookies" },
    { href: "https://legal.akoky.com/securite", icon: "🛡️", label: "Sicherheit" },
    { href: "https://legal.akoky.com/charte", icon: "📜", label: "AKOKY Charta" },
  ],
  it: [
    { href: "https://legal.akoky.com/mentions-legales", icon: "📄", label: "Note legali" },
    { href: "https://legal.akoky.com/conditions-utilisation", icon: "🤝", label: "Condizioni d'uso" },
    { href: "https://legal.akoky.com/conditions-vente", icon: "🛒", label: "Condizioni di vendita" },
    { href: "https://legal.akoky.com/confidentialite", icon: "🔒", label: "Privacy" },
    { href: "https://legal.akoky.com/cookies", icon: "🍪", label: "Cookies" },
    { href: "https://legal.akoky.com/securite", icon: "🛡️", label: "Sicurezza" },
    { href: "https://legal.akoky.com/charte", icon: "📜", label: "Carta AKOKY" },
  ],
  pt: [
    { href: "https://legal.akoky.com/mentions-legales", icon: "📄", label: "Avisos legais" },
    { href: "https://legal.akoky.com/conditions-utilisation", icon: "🤝", label: "Termos de uso" },
    { href: "https://legal.akoky.com/conditions-vente", icon: "🛒", label: "Termos de venda" },
    { href: "https://legal.akoky.com/confidentialite", icon: "🔒", label: "Privacidade" },
    { href: "https://legal.akoky.com/cookies", icon: "🍪", label: "Cookies" },
    { href: "https://legal.akoky.com/securite", icon: "🛡️", label: "Segurança" },
    { href: "https://legal.akoky.com/charte", icon: "📜", label: "Carta AKOKY" },
  ],
};

const SEO_LINKS: Record<Lang, { href: string; label: string }[]> = {
  fr: [
    { href: "https://Akoky.es", label: "Akoky Spain – plataforma libertina" },
    { href: "https://Akoky.it", label: "Akoky Italie – piattaforma libertina" },
    { href: "https://Akoky.pt", label: "Akoky Portugal – plataforma libertina" },
    { href: "https://Akoky.de", label: "Akoky Allemagne – freizügige Plattform" },
    { href: "https://Akoky.com", label: "Akoky Europe – libertine platform" },
    { href: "https://Akoky.be", label: "Libertins Belgique" },
    { href: "https://Akoky.biz", label: "GangBang" },
    { href: "https://Akoky.eu", label: "Rencontres libertines" },
    { href: "https://Akoky.fr", label: "Libertins français" },
    { href: "https://Akoky.info", label: "Sauna libertin" },
    { href: "https://Akoky.net", label: "Cap d'Agde libertin" },
    { href: "https://akoky.click", label: "Échangisme" },
    { href: "https://Akoky.org", label: "BDSM & fétichisme" },
    { href: "https://Akoky.shop", label: "Boutique érotique" },
    { href: "https://Akoky.space", label: "Jeux libertins" },
    { href: "https://libertinecoquine.fr", label: "Libertine & coquine" },
    { href: "https://akokyclubinfo.website", label: "Annuaire clubs & saunas" },
    { href: "https://comparatif-libertin.com", label: "Comparatif libertin" },
    { href: "https://meilleur-site-libertin.com", label: "Meilleur site libertin" },
    { href: "https://sites-libertins-fiables.com", label: "Sites libertins fiables" },
    { href: "https://Kokyland.com", label: "Événements Kokyland" },
  ],
  en: [
    { href: "https://Akoky.com", label: "Akoky Europe – libertine platform" },
    { href: "https://Akoky.es", label: "Akoky Spain – swinger platform" },
    { href: "https://Akoky.it", label: "Akoky Italy – libertine platform" },
    { href: "https://Akoky.de", label: "Akoky Germany – swinger platform" },
    { href: "https://Akoky.pt", label: "Akoky Portugal – libertine platform" },
    { href: "https://Akoky.be", label: "Libertines Belgium" },
    { href: "https://Akoky.eu", label: "Libertine dating" },
    { href: "https://akoky.click", label: "Swingers" },
    { href: "https://Akoky.info", label: "Libertine sauna" },
    { href: "https://Akoky.org", label: "BDSM & fetish" },
    { href: "https://Akoky.space", label: "Libertine games" },
    { href: "https://akokyclubinfo.website", label: "Club & sauna listings" },
    { href: "https://comparatif-libertin.com", label: "Libertine comparison" },
    { href: "https://meilleur-site-libertin.com", label: "Best libertine site" },
    { href: "https://sites-libertins-fiables.com", label: "Reliable libertine sites" },
    { href: "https://Kokyland.com", label: "Kokyland events" },
  ],
  es: [
    { href: "https://Akoky.es", label: "Akoky España – plataforma libertina" },
    { href: "https://Akoky.com", label: "Akoky Europa – red social libertina" },
    { href: "https://Akoky.it", label: "Akoky Italia – piattaforma libertina" },
    { href: "https://Akoky.de", label: "Akoky Alemania – Plattform" },
    { href: "https://Akoky.pt", label: "Akoky Portugal – plataforma libertina" },
    { href: "https://Akoky.eu", label: "Citas libertinas" },
    { href: "https://akoky.click", label: "Intercambio de parejas" },
    { href: "https://Akoky.info", label: "Sauna libertino" },
    { href: "https://Akoky.org", label: "BDSM & fetichismo" },
    { href: "https://Akoky.shop", label: "Tienda erótica" },
    { href: "https://Akoky.space", label: "Juegos libertinos" },
    { href: "https://akokyclubinfo.website", label: "Directorio clubes y saunas" },
    { href: "https://comparatif-libertin.com", label: "Comparador libertino" },
    { href: "https://meilleur-site-libertin.com", label: "Mejor sitio libertino" },
    { href: "https://sites-libertins-fiables.com", label: "Sitios libertinos fiables" },
    { href: "https://Kokyland.com", label: "Eventos Kokyland" },
  ],
  de: [
    { href: "https://Akoky.de", label: "Akoky Deutschland – Swinger-Plattform" },
    { href: "https://Akoky.com", label: "Akoky Europa – libertine Plattform" },
    { href: "https://Akoky.es", label: "Akoky Spanien – plataforma libertina" },
    { href: "https://Akoky.it", label: "Akoky Italien – piattaforma libertina" },
    { href: "https://Akoky.pt", label: "Akoky Portugal – plataforma libertina" },
    { href: "https://Akoky.eu", label: "Libertine Dating" },
    { href: "https://akoky.click", label: "Swingers" },
    { href: "https://Akoky.info", label: "Libertine Sauna" },
    { href: "https://Akoky.org", label: "BDSM & Fetisch" },
    { href: "https://Akoky.space", label: "Libertine Spiele" },
    { href: "https://akokyclubinfo.website", label: "Club- & Saunaverzeichnis" },
    { href: "https://Kokyland.com", label: "Kokyland Events" },
  ],
  it: [
    { href: "https://Akoky.it", label: "Akoky Italia – piattaforma libertina" },
    { href: "https://Akoky.com", label: "Akoky Europa – piattaforma libertina" },
    { href: "https://Akoky.es", label: "Akoky Spagna – plataforma libertina" },
    { href: "https://Akoky.de", label: "Akoky Germania – Plattform" },
    { href: "https://Akoky.pt", label: "Akoky Portogallo – plataforma libertina" },
    { href: "https://Akoky.eu", label: "Incontri libertini" },
    { href: "https://akoky.click", label: "Scambisti" },
    { href: "https://Akoky.info", label: "Sauna libertina" },
    { href: "https://Akoky.org", label: "BDSM & fetish" },
    { href: "https://Akoky.space", label: "Giochi libertini" },
    { href: "https://akokyclubinfo.website", label: "Annuario club e saune" },
    { href: "https://Kokyland.com", label: "Eventi Kokyland" },
  ],
  pt: [
    { href: "https://Akoky.pt", label: "Akoky Portugal – plataforma libertina" },
    { href: "https://Akoky.com", label: "Akoky Europa – plataforma libertina" },
    { href: "https://Akoky.es", label: "Akoky Espanha – plataforma libertina" },
    { href: "https://Akoky.it", label: "Akoky Itália – piattaforma libertina" },
    { href: "https://Akoky.de", label: "Akoky Alemanha – Plattform" },
    { href: "https://Akoky.eu", label: "Encontros libertinos" },
    { href: "https://akoky.click", label: "Swingers" },
    { href: "https://Akoky.info", label: "Sauna libertina" },
    { href: "https://Akoky.org", label: "BDSM & fetiche" },
    { href: "https://Akoky.space", label: "Jogos libertinos" },
    { href: "https://akokyclubinfo.website", label: "Diretório clubes e saunas" },
    { href: "https://Kokyland.com", label: "Eventos Kokyland" },
  ],
};

const FooterLinkItem = ({ href, icon, label, external }: { href: string; icon: string; label: string; external?: boolean }) => {
  if (external || href.startsWith("http")) {
    return (
      <li>
        <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#9ca3af] text-sm hover:text-primary hover:translate-x-1 transition-all">
          <span>{icon}</span>
          {label}
        </a>
      </li>
    );
  }
  return (
    <li>
      <Link to={href} className="flex items-center gap-2 text-[#9ca3af] text-sm hover:text-primary hover:translate-x-1 transition-all">
        <span>{icon}</span>
        {label}
      </Link>
    </li>
  );
};

const Footer = ({ lang = "fr" }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  const titles = SECTION_TITLES[lang];
  const copy = COPYRIGHT_LABELS[lang];
  const currentLang = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0];

  return (
    <footer className="footer-gradient text-foreground" role="contentinfo">
      <div className="py-16">
        <div className="max-w-[1280px] mx-auto px-6">
          {/* 4-column grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="flex flex-col gap-6">
              <span className="text-3xl font-black text-gradient-gold">AKOKY</span>
              <p className="text-[#9ca3af] text-sm leading-relaxed">
                {BRAND_DESC[lang]}
              </p>
              <div className="pt-4">
                <p className="text-sm text-[#9ca3af] mb-2">{copy.lang}</p>
                <Link to={currentLang.href} className="inline-flex items-center gap-2 px-4 py-2 btn-gradient-primary rounded-full text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30">
                  <span>{currentLang.flag}</span>
                  <span>{lang.toUpperCase()}</span>
                </Link>
              </div>
            </div>

            {/* Discover */}
            <div>
              <h3 className="flex items-center gap-2 text-lg font-bold mb-6">
                <span className="text-primary">✨</span>
                {titles.discover}
              </h3>
              <ul className="flex flex-col gap-3">
                {DISCOVER_LINKS[lang].map((l) => <FooterLinkItem key={l.href} {...l} />)}
              </ul>
            </div>

            {/* Community */}
            <div>
              <h3 className="flex items-center gap-2 text-lg font-bold mb-6">
                <span className="text-primary">👥</span>
                {titles.community}
              </h3>
              <ul className="flex flex-col gap-3">
                {COMMUNITY_LINKS[lang].map((l) => <FooterLinkItem key={l.href} {...l} />)}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="flex items-center gap-2 text-lg font-bold mb-6">
                <span className="text-primary">📚</span>
                {titles.resources}
              </h3>
              <ul className="flex flex-col gap-3">
                {RESOURCE_LINKS.map((l) => <FooterLinkItem key={l.href} {...l} external />)}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-10" />

          {/* Social */}
          <div className="flex justify-center my-8">
            <div className="flex gap-4 flex-wrap justify-center">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="w-12 h-12 flex items-center justify-center bg-secondary rounded-full hover:btn-gradient-primary hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-primary/30 transition-all"
                  aria-label={s.label}
                >
                  <span className="text-2xl">{s.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Legal quick links */}
          <div className="flex justify-center flex-wrap gap-4 my-8 text-sm text-[#9ca3af]">
            <a href="https://legal.akoky.com/mentions-legales" target="_blank" className="hover:text-primary transition-colors">Mentions légales</a>
            <span className="text-border">•</span>
            <a href="https://legal.akoky.com/conditions-utilisation" target="_blank" className="hover:text-primary transition-colors">Conditions</a>
            <span className="text-border">•</span>
            <a href="https://legal.akoky.com/confidentialite" target="_blank" className="hover:text-primary transition-colors">Confidentialité</a>
            <span className="text-border">•</span>
            <a href="https://legal.akoky.com/cookies" target="_blank" className="hover:text-primary transition-colors">Cookies</a>
            <span className="text-border">•</span>
            <a href="https://legal.akoky.com/securite" target="_blank" className="hover:text-primary transition-colors">Sécurité</a>
            <span className="text-border">•</span>
            <a href="https://legal.akoky.com/charte" target="_blank" className="hover:text-primary transition-colors">Charte AKOKY</a>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-10" />

          {/* Languages */}
          <div className="text-center my-8">
            <h3 className="flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wider text-[#9ca3af] mb-6">
              <span>🌍</span>
              {copy.lang} / Languages
            </h3>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {LANGUAGES.map((l) => (
                <Link
                  key={l.code}
                  to={l.href}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all ${
                    l.code === lang
                      ? "btn-gradient-primary text-primary-foreground shadow-lg shadow-primary/30"
                      : "text-[#d1d5db] hover:bg-secondary hover:text-primary"
                  }`}
                >
                  <span>{l.flag}</span>
                  <span>{l.label}</span>
                </Link>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">🌍 {copy.available}</p>
          </div>

          {/* SEO Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 max-w-[1200px] mx-auto my-8 text-xs text-muted-foreground">
            {SEO_LINKS.map((l) => (
              <a key={l.href} href={l.href} target="_blank" className="hover:text-primary hover:underline transition-colors">
                {l.label}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-10" />

          {/* Copyright */}
          <div className="text-center my-8">
            <p className="text-sm text-[#9ca3af]">© {currentYear} AKOKY. {copy.rights}</p>
            <p className="text-xs text-muted-foreground mt-2">
              AKOKY est une marque déposée. {copy.adults}
            </p>
            <div className="flex justify-center items-center gap-4 mt-4 flex-wrap">
              <span className="text-sm text-[#9ca3af]">⚙️ Gérer les cookies</span>
              <span className="text-border">•</span>
              <a href="https://legal.akoky.com/cookies" target="_blank" rel="noopener noreferrer" className="text-sm text-[#9ca3af] hover:text-primary transition-colors">
                🍪 Informations cookies
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-10" />

          {/* Legal Seal */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 my-8 pt-10 border-t border-border">
            <div className="flex-shrink-0">
              <img
                loading="lazy"
                src="https://akoky.com/legal-akoky.webp"
                alt="Tampon légal Akoky – Conformité & Protection Légale"
                className="max-w-[180px] sm:max-w-[220px] md:max-w-[260px] lg:max-w-[300px] opacity-90"
              />
            </div>
            <div className="max-w-[768px] text-center md:text-left text-[#9ca3af] text-sm leading-7">
              <p className="mb-3">
                Akoky est une plateforme opérée par <strong className="text-foreground">Liberty-Interactive-Ltd</strong>, société enregistrée sous le numéro <strong className="text-foreground">932607310</strong>. Liberty-Interactive-Ltd assure la gouvernance légale, la conformité internationale et la protection des données de l'écosystème Akoky, conformément au Data Protection Act (DPA 2018), au RGPD, ainsi qu'aux réglementations applicables aux plateformes pour adultes.
              </p>
              <p>
                Informations institutionnelles :{" "}
                <a href="https://liberty-interactive-ltd.online/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary-dark transition-colors">
                  liberty-interactive-ltd.online
                </a>
              </p>
            </div>
          </div>

          {/* Trust Labels */}
          <div className="flex justify-center items-center flex-wrap gap-6 mt-8 pb-8">
            <span className="text-sm text-[#9ca3af]">{copy.secure}</span>
            <span className="text-sm text-[#9ca3af]">{copy.gdpr}</span>
            <span className="text-sm text-[#9ca3af]">{copy.update}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
