import { Link } from "react-router-dom";

const DISCOVER_LINKS = [
  { href: "/", icon: "🏠", label: "Accueil" },
  { href: "/akoky", icon: "ℹ️", label: "À propos" },
  { href: "/blog", icon: "📖", label: "Blog" },
  { href: "/evenements", icon: "📅", label: "Événements" },
  { href: "/jeux", icon: "🎮", label: "Jeux" },
  { href: "/avis", icon: "⭐", label: "Avis" },
  { href: "/application", icon: "📱", label: "App mobile" },
];

const COMMUNITY_LINKS = [
  { href: "/clubbing", icon: "🏢", label: "Clubbing" },
  { href: "/vip", icon: "💎", label: "Adhésion VIP" },
  { href: "/lexique", icon: "📚", label: "Lexique libertin" },
  { href: "/presse", icon: "📰", label: "Espace presse" },
  { href: "/faq", icon: "❓", label: "FAQ" },
  { href: "/contact", icon: "✉️", label: "Contact" },
];

const RESOURCE_LINKS = [
  { href: "https://legal.akoky.com/mentions-legales", icon: "📄", label: "Mentions légales" },
  { href: "https://legal.akoky.com/conditions-utilisation", icon: "🤝", label: "Conditions d'utilisation" },
  { href: "https://legal.akoky.com/conditions-vente", icon: "🛒", label: "Conditions de vente" },
  { href: "https://legal.akoky.com/confidentialite", icon: "🔒", label: "Confidentialité" },
  { href: "https://legal.akoky.com/cookies", icon: "🍪", label: "Cookies" },
  { href: "https://legal.akoky.com/securite", icon: "🛡️", label: "Sécurité" },
  { href: "https://legal.akoky.com/charte", icon: "📜", label: "Charte AKOKY" },
];

const SOCIAL_LINKS = [
  { href: "https://www.facebook.com/groups/1732578494300828/", icon: "📘", label: "Facebook" },
  { href: "https://x.com/AcoquiVotre", icon: "✖️", label: "X/Twitter" },
  { href: "https://www.instagram.com/akoky_libertin", icon: "📷", label: "Instagram" },
  { href: "https://www.tiktok.com/@akoky69", icon: "🎵", label: "TikTok" },
  { href: "https://www.youtube.com/@AKOKY-COM-Libertin", icon: "📹", label: "YouTube" },
  { href: "/contact", icon: "✉️", label: "Email" },
];

const LANGUAGES = [
  { code: "fr", flag: "🇫🇷", label: "Français", href: "/" },
  { code: "en", flag: "🇬🇧", label: "English", href: "/en" },
  { code: "es", flag: "🇪🇸", label: "Español", href: "/es" },
  { code: "de", flag: "🇩🇪", label: "Deutsch", href: "/de" },
  { code: "it", flag: "🇮🇹", label: "Italiano", href: "/it" },
  { code: "pt", flag: "🇵🇹", label: "Português", href: "/pt" },
];

const SEO_LINKS = [
  { href: "https://Akoky.es", label: "Akoky Spain – plataforma libertina" },
  { href: "https://Akoky.it", label: "Akoky Italie – piattaforma libertina" },
  { href: "https://Akoky.pt", label: "Akoky Portugal – plataforma libertina" },
  { href: "https://Akoky.de", label: "Akoky Allemand – freizügige Plattform" },
  { href: "https://Akoky.com", label: "Akoky Europe – libertine platform" },
  { href: "https://Akoky.be", label: "Libertines Belgium" },
  { href: "https://Akoky.biz", label: "GangBang" },
  { href: "https://Akoky.eu", label: "Libertine dating" },
  { href: "https://Akoky.fr", label: "French libertines" },
  { href: "https://Akoky.info", label: "Libertine sauna" },
  { href: "https://Akoky.net", label: "Cap d'Agde libertine" },
  { href: "https://akoky.click", label: "Swingers" },
  { href: "https://Akoky.org", label: "BDSM & fetish" },
  { href: "https://Akoky.shop", label: "Erotic shop" },
  { href: "https://Akoky.space", label: "Libertine games" },
  { href: "https://libertinecoquine.fr", label: "Libertine & coquine" },
  { href: "https://akokyclubinfo.website", label: "Club & sauna listings" },
  { href: "https://comparatif-libertin.com", label: "Libertine comparison" },
  { href: "https://meilleur-site-libertin.com", label: "Best libertine site" },
  { href: "https://sites-libertins-fiables.com", label: "Reliable libertine sites" },
  { href: "https://Kokyland.com", label: "Kokyland events" },
];

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

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
                La plus grande communauté libertine d'Europe. Un espace élégant, sécurisé et authentique.
              </p>
              <div className="pt-4">
                <p className="text-sm text-[#9ca3af] mb-2">Langue</p>
                <Link to="/" className="inline-flex items-center gap-2 px-4 py-2 btn-gradient-primary rounded-full text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30">
                  <span>🇫🇷</span>
                  <span>FR</span>
                </Link>
              </div>
            </div>

            {/* Discover */}
            <div>
              <h3 className="flex items-center gap-2 text-lg font-bold mb-6">
                <span className="text-primary">✨</span>
                Découvrir
              </h3>
              <ul className="flex flex-col gap-3">
                {DISCOVER_LINKS.map((l) => <FooterLinkItem key={l.href} {...l} />)}
              </ul>
            </div>

            {/* Community */}
            <div>
              <h3 className="flex items-center gap-2 text-lg font-bold mb-6">
                <span className="text-primary">👥</span>
                Communauté
              </h3>
              <ul className="flex flex-col gap-3">
                {COMMUNITY_LINKS.map((l) => <FooterLinkItem key={l.href} {...l} />)}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="flex items-center gap-2 text-lg font-bold mb-6">
                <span className="text-primary">📚</span>
                Ressources
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
              Langue / Languages
            </h3>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {LANGUAGES.map((lang) => (
                <Link
                  key={lang.code}
                  to={lang.href}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all ${
                    lang.code === "fr"
                      ? "btn-gradient-primary text-primary-foreground shadow-lg shadow-primary/30"
                      : "text-[#d1d5db] hover:bg-secondary hover:text-primary"
                  }`}
                >
                  <span>{lang.flag}</span>
                  <span>{lang.label}</span>
                </Link>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">🌍 Akoky est disponible en 6 langues</p>
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
            <p className="text-sm text-[#9ca3af]">© {currentYear} AKOKY. Tous droits réservés.</p>
            <p className="text-xs text-muted-foreground mt-2">
              AKOKY est une marque déposée. Le contenu de ce site est réservé aux adultes.
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
            <span className="text-sm text-[#9ca3af]">🔒 Connexion sécurisée</span>
            <span className="text-sm text-[#9ca3af]">✅ RGPD conforme</span>
            <span className="text-sm text-[#9ca3af]">🕒 Mise à jour : janv. 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
