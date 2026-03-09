import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sun, Moon, Monitor } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

type Lang = "fr" | "es" | "de" | "it" | "pt";

interface HeaderProps {
  lang?: Lang;
}

const LANGUAGES = [
  { code: "fr" as Lang, flag: "🇫🇷", label: "Français" },
  { code: "es" as Lang, flag: "🇪🇸", label: "Español" },
  { code: "de" as Lang, flag: "🇩🇪", label: "Deutsch" },
  { code: "it" as Lang, flag: "🇮🇹", label: "Italiano" },
  { code: "pt" as Lang, flag: "🇵🇹", label: "Português" },
];

interface NavLink { href: string; label: string; icon: string }

const NAV_LINKS: Record<Lang, NavLink[]> = {
  fr: [
    { href: "/fr", label: "Accueil", icon: "🏠" },
    { href: "/fr/akoky", label: "À propos", icon: "ℹ️" },
    { href: "/fr/debuter-libertinage", label: "Débuter", icon: "📝" },
    { href: "/fr/blog", label: "Blog", icon: "🎭" },
    { href: "/fr/faq", label: "FAQ", icon: "❓" },
  ],
  es: [
    { href: "/es", label: "Inicio", icon: "🏠" },
    { href: "/es/akoky", label: "Acerca de", icon: "ℹ️" },
    { href: "/es/empezar-libertinaje", label: "Empezar", icon: "📝" },
    { href: "/es/blog", label: "Blog", icon: "🎭" },
    { href: "/es/faq", label: "FAQ", icon: "❓" },
  ],
  de: [
    { href: "/de", label: "Startseite", icon: "🏠" },
    { href: "/de/akoky", label: "Über uns", icon: "ℹ️" },
    { href: "/de/libertinismus-anfangen", label: "Anfangen", icon: "📝" },
    { href: "/de/blog", label: "Blog", icon: "🎭" },
    { href: "/de/faq", label: "FAQ", icon: "❓" },
  ],
  it: [
    { href: "/it", label: "Home", icon: "🏠" },
    { href: "/it/akoky", label: "Chi siamo", icon: "ℹ️" },
    { href: "/it/iniziare-libertinismo", label: "Iniziare", icon: "📝" },
    { href: "/it/blog", label: "Blog", icon: "🎭" },
    { href: "/it/faq", label: "FAQ", icon: "❓" },
  ],
  pt: [
    { href: "/pt", label: "Início", icon: "🏠" },
    { href: "/pt/akoky", label: "Sobre", icon: "ℹ️" },
    { href: "/pt/comecar-libertinagem", label: "Começar", icon: "📝" },
    { href: "/pt/blog", label: "Blog", icon: "🎭" },
    { href: "/pt/faq", label: "FAQ", icon: "❓" },
  ],
};

const AVIS_LABELS: Record<Lang, { href: string; label: string }> = {
  fr: { href: "/fr/avis", label: "AVIS" },
  es: { href: "/es/avis", label: "OPINIONES" },
  de: { href: "/de/bewertungen", label: "BEWERTUNGEN" },
  it: { href: "/it/recensioni", label: "RECENSIONI" },
  pt: { href: "/pt/avaliacoes", label: "AVALIAÇÕES" },
};

const CONCOURS_LABELS: Record<Lang, { href: string; label: string }> = {
  fr: { href: "/fr/concours", label: "Concours" },
  es: { href: "/es/concurso", label: "Concurso" },
  de: { href: "/de/wettbewerb", label: "Wettbewerb" },
  it: { href: "/it/concorso", label: "Concorso" },
  pt: { href: "/pt/concurso", label: "Concurso" },
};

const LOGIN_LABELS: Record<Lang, string> = {
  fr: "Connexion",
  es: "Iniciar sesión",
  de: "Anmelden",
  it: "Accedi",
  pt: "Entrar",
};

const LANG_LABEL: Record<Lang, string> = {
  fr: "Langue",
  es: "Idioma",
  de: "Sprache",
  it: "Lingua",
  pt: "Idioma",
};

const CLOSE_LABEL: Record<Lang, string> = {
  fr: "Fermer le menu",
  es: "Cerrar menú",
  de: "Menü schließen",
  it: "Chiudi menu",
  pt: "Fechar menu",
};

const Header = ({ lang = "fr" }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  const navLinks = NAV_LINKS[lang];
  const avis = AVIS_LABELS[lang];
  const concours = CONCOURS_LABELS[lang];
  const currentLang = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0];

  const cycleTheme = () => {
    const next = theme === "light" ? "dark" : theme === "dark" ? "system" : "light";
    setTheme(next);
  };

  const ThemeIcon = theme === "light" ? Sun : theme === "dark" ? Moon : Monitor;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-xl shadow-lg shadow-black/20"
            : "bg-background/80 backdrop-blur-md"
        }`}
      >
        <div className="container flex items-center justify-between h-[70px] gap-8">
          {/* Logo */}
          <Link to={`/${lang}`} className="flex-shrink-0 z-[1001]">
            <img src="/images/logo-akoky.webp" alt="AKOKY" className="h-10 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to={avis.href}
              className="text-sm font-semibold text-foreground hover:text-primary transition-colors flex items-center gap-1.5"
            >
              <span>⭐</span>
              <span>{avis.label}</span>
            </Link>
            <a
              href="https://safe.akoky.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-primary/20 bg-primary/5 hover:bg-primary/10 hover:border-primary transition-all"
            >
              <span>🛡️</span>
              <span>SAFE</span>
            </a>
            <Link to={concours.href} className="text-sm relative group" title={concours.label}>
              🏆
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Theme Selector */}
            <div className="flex items-center gap-1 border border-border rounded-lg p-1">
              <button
                onClick={() => setTheme("light")}
                className={`p-2 rounded-md transition-all ${
                  theme === "light" 
                    ? "bg-primary text-primary-foreground" 
                    : "hover:bg-muted"
                }`}
                title="Mode jour"
              >
                <Sun className="w-4 h-4" />
              </button>
              <button
                onClick={() => setTheme("dark")}
                className={`p-2 rounded-md transition-all ${
                  theme === "dark" 
                    ? "bg-primary text-primary-foreground" 
                    : "hover:bg-muted"
                }`}
                title="Mode nuit"
              >
                <Moon className="w-4 h-4" />
              </button>
              <button
                onClick={() => setTheme("system")}
                className={`p-2 rounded-md transition-all ${
                  theme === "system" 
                    ? "bg-primary text-primary-foreground" 
                    : "hover:bg-muted"
                }`}
                title="Mode automatique"
              >
                <Monitor className="w-4 h-4" />
              </button>
            </div>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2 border border-border rounded-lg px-3 py-2 text-sm hover:bg-primary/10 hover:border-primary transition-all"
              >
                <span className="text-lg">{currentLang.flag}</span>
                <span className="font-semibold text-xs">{lang.toUpperCase()}</span>
                <svg
                  className={`w-3 h-3 transition-transform ${langOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
              {langOpen && (
                <div className="absolute top-full right-0 mt-2 bg-card border border-border rounded-xl shadow-xl min-w-[180px] overflow-hidden z-50">
                  {LANGUAGES.map((l) => (
                    <Link
                      key={l.code}
                      to={`/${l.code}`}
                      onClick={() => setLangOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 text-sm transition-all hover:bg-primary/10 hover:text-primary border-b border-border last:border-0 ${
                        l.code === lang ? "bg-primary/15 text-primary font-semibold" : "text-foreground"
                      }`}
                    >
                      <span className="text-xl">{l.flag}</span>
                      <span>{l.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Login Button */}
            <a
              href="https://app.akoky.com/login"
              className="px-5 py-2.5 rounded-full text-sm font-bold btn-gradient-primary text-primary-foreground hover:-translate-y-0.5 transition-all hover:shadow-lg hover:shadow-primary/30"
            >
              {LOGIN_LABELS[lang]}
            </a>
          </div>

          {/* Burger */}
          <button
            className="lg:hidden flex flex-col justify-center gap-[5px] p-2 z-[1001]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <span
              className={`w-[26px] h-[2.5px] bg-foreground rounded transition-all duration-400 ${
                mobileOpen ? "translate-y-[7.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`w-[26px] h-[2.5px] bg-foreground rounded transition-all duration-400 ${
                mobileOpen ? "opacity-0 -translate-x-5" : ""
              }`}
            />
            <span
              className={`w-[26px] h-[2.5px] bg-foreground rounded transition-all duration-400 ${
                mobileOpen ? "-translate-y-[7.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-[999] transition-all duration-400 ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMobileOpen(false)}
      >
        <div
          className={`absolute top-0 right-0 w-full max-w-[400px] h-full bg-background shadow-[-4px_0_24px_rgba(0,0,0,0.2)] transition-transform duration-400 overflow-y-auto p-6 flex flex-col gap-8 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Mobile Header */}
          <div className="flex justify-between items-center pb-4 border-b border-border">
            <Link to={`/${lang}`}>
              <img src="/images/logo-akoky.webp" alt="AKOKY" className="h-8 w-auto" />
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center hover:text-primary transition-all"
              aria-label={CLOSE_LABEL[lang]}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Mobile Nav */}
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="flex items-center gap-4 px-4 py-3 rounded-xl text-foreground font-medium hover:bg-primary/10 hover:border-primary/30 border border-transparent transition-all"
              >
                <span className="text-xl w-[30px] text-center">{link.icon}</span>
                <span>{link.label}</span>
              </Link>
            ))}
            <Link
              to={avis.href}
              className="flex items-center gap-4 px-4 py-3 rounded-xl text-foreground font-medium hover:bg-primary/10 transition-all"
            >
              <span className="text-xl w-[30px] text-center">🌟</span>
              <span>{avis.label}</span>
            </Link>
            <a
              href="https://safe.akoky.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-4 py-3 rounded-xl font-medium bg-primary/5 border border-primary/20 hover:bg-primary/10 transition-all"
            >
              <span className="text-xl w-[30px] text-center">🛡️</span>
              <span>SAFE</span>
            </a>
            <Link
              to={concours.href}
              className="flex items-center gap-4 px-4 py-3 rounded-xl text-foreground font-medium hover:bg-primary/10 transition-all"
            >
              <span className="text-xl w-[30px] text-center">🏆</span>
              <span>{concours.label}</span>
            </Link>
          </nav>

          {/* Mobile Actions */}
          <div className="flex flex-col gap-6 pt-4 border-t border-border">
            {/* Theme Selector */}
            <div>
              <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-3">🎨 Thème</h4>
              <div className="grid grid-cols-3 gap-3">
                <button
                  onClick={() => setTheme("light")}
                  className={`flex flex-col items-center justify-center gap-2 p-3 rounded-lg border text-sm font-semibold transition-all ${
                    theme === "light"
                      ? "bg-primary/10 border-primary text-primary"
                      : "bg-card border-border hover:bg-primary/10 hover:border-primary"
                  }`}
                >
                  <Sun className="w-6 h-6" />
                  <span>Jour</span>
                </button>
                <button
                  onClick={() => setTheme("dark")}
                  className={`flex flex-col items-center justify-center gap-2 p-3 rounded-lg border text-sm font-semibold transition-all ${
                    theme === "dark"
                      ? "bg-primary/10 border-primary text-primary"
                      : "bg-card border-border hover:bg-primary/10 hover:border-primary"
                  }`}
                >
                  <Moon className="w-6 h-6" />
                  <span>Nuit</span>
                </button>
                <button
                  onClick={() => setTheme("system")}
                  className={`flex flex-col items-center justify-center gap-2 p-3 rounded-lg border text-sm font-semibold transition-all ${
                    theme === "system"
                      ? "bg-primary/10 border-primary text-primary"
                      : "bg-card border-border hover:bg-primary/10 hover:border-primary"
                  }`}
                >
                  <Monitor className="w-6 h-6" />
                  <span>Auto</span>
                </button>
              </div>
            </div>

            {/* Language */}
            <div>
              <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-3">🌍 {LANG_LABEL[lang]}</h4>
              <div className="grid grid-cols-3 gap-3">
                {LANGUAGES.map((l) => (
                  <Link
                    key={l.code}
                    to={`/${l.code}`}
                    className={`flex flex-col items-center justify-center gap-1 p-3 rounded-lg border text-sm font-semibold transition-all ${
                      l.code === lang
                        ? "bg-primary/10 border-primary text-primary"
                        : "bg-card border-border hover:bg-primary/10 hover:border-primary"
                    }`}
                  >
                    <span className="text-3xl">{l.flag}</span>
                    <span>{l.code.toUpperCase()}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Login */}
            <a
              href="https://app.akoky.com/login"
              className="w-full py-4 rounded-full text-center font-bold btn-gradient-primary text-primary-foreground text-base"
            >
              {LOGIN_LABELS[lang]}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
