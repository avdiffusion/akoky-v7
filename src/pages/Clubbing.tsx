import ContentPageLayout from "@/components/layout/ContentPageLayout";
import { Link } from "react-router-dom";

const chipClass =
  "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground hover:border-primary/50 transition-colors";

const cardClass =
  "bg-card border border-border p-6 rounded-2xl hover:border-primary/50 transition-all group";

const regions = [
  { label: "Île-de-France", href: "/fr/clubs-libertins-ile-de-france" },
  { label: "PACA", href: "/fr/clubs-libertins-paca" },
  { label: "Auvergne-Rhône-Alpes", href: "/fr/clubs-libertins-auvergne-rhone-alpes" },
  { label: "Occitanie", href: "/fr/clubs-libertins-occitanie" },
  { label: "Nouvelle-Aquitaine", href: "/fr/clubs-libertins-nouvelle-aquitaine" },
  { label: "Hauts-de-France", href: "/fr/clubs-libertins-hauts-de-france" },
  { label: "Grand Est", href: "/fr/clubs-libertins-grand-est" },
  { label: "Bretagne", href: "/fr/clubs-libertins-bretagne" },
  { label: "Normandie", href: "/fr/clubs-libertins-normandie" },
  { label: "Pays de la Loire", href: "/fr/clubs-libertins-pays-de-la-loire" },
];

const cities = [
  { label: "Paris", href: "/fr/clubs-libertins-paris", emoji: "🗼" },
  { label: "Lyon", href: "/fr/clubs-libertins-lyon", emoji: "🦁" },
  { label: "Marseille", href: "/fr/clubs-libertins-marseille", emoji: "⛵" },
  { label: "Toulouse", href: "/fr/clubs-libertins-toulouse", emoji: "🌹" },
  { label: "Bordeaux", href: "/fr/clubs-libertins-bordeaux", emoji: "🍷" },
  { label: "Lille", href: "/fr/clubs-libertins-lille", emoji: "🏠" },
  { label: "Nantes", href: "/fr/clubs-libertins-nantes", emoji: "🐘" },
  { label: "Nice", href: "/fr/clubs-libertins-nice", emoji: "🌊" },
  { label: "Montpellier", href: "/fr/clubs-libertins-montpellier", emoji: "☀️" },
  { label: "Strasbourg", href: "/fr/clubs-libertins-strasbourg", emoji: "🏰" },
  { label: "Rennes", href: "/fr/clubs-libertins-rennes", emoji: "🎭" },
  { label: "Grenoble", href: "/fr/clubs-libertins-grenoble", emoji: "⛰️" },
  { label: "Toulon", href: "/fr/clubs-libertins-toulon", emoji: "🚢" },
  { label: "Dijon", href: "/fr/clubs-libertins-dijon", emoji: "🍇" },
  { label: "Reims", href: "/fr/clubs-libertins-reims", emoji: "🥂" },
  { label: "Cap d'Agde", href: "/fr/clubs-libertins-cap-d-agde", emoji: "🏖️" },
];

const europe = [
  { label: "🇧🇪 Belgique", href: "/fr/clubbing-belgique", sub: "Bruxelles · Anvers · Liège" },
  { label: "🇨🇭 Suisse", href: "/fr/clubbing-suisse", sub: "Genève · Lausanne · Zurich" },
  { label: "🇱🇺 Luxembourg", href: "/fr/clubbing-luxembourg", sub: "Clubs et événements" },
];

const guides = [
  { title: "Premier club libertin", desc: "Tout ce qu'il faut savoir avant votre première visite.", href: "/fr/premier-club-libertin", emoji: "🚪" },
  { title: "Premier rendez-vous libertin", desc: "Préparez votre première rencontre libertine en toute sérénité.", href: "/fr/premier-rendez-vous-libertin", emoji: "💑" },
  { title: "Débuter le libertinage", desc: "Le guide ultime pour les couples qui veulent se lancer.", href: "/fr/debuter-libertinage", emoji: "🌱" },
  { title: "Questions de débutants", desc: "Les réponses aux interrogations les plus fréquentes.", href: "/fr/questions-debutants", emoji: "❓" },
  { title: "Guide ultime du libertinage", desc: "L'encyclopédie complète du libertinage moderne.", href: "/fr/guide-libertin", emoji: "📖" },
  { title: "Lexique libertin", desc: "Tous les termes et codes du milieu expliqués.", href: "/fr/lexique", emoji: "🔤" },
];

const comparatifs = [
  { label: "Meilleur site libertin", href: "/fr/meilleur-site-libertin" },
  { label: "AKOKY vs Wyylde", href: "/fr/akoky-vs-wyylde" },
  { label: "AKOKY vs NousLib", href: "/fr/akoky-vs-nouslib" },
  { label: "AKOKY vs JM Date", href: "/fr/akoky-vs-jm-date" },
  { label: "AKOKY vs SexyLib", href: "/fr/akoky-vs-sexylib" },
];

const Clubbing = () => {
  return (
    <ContentPageLayout
      title="Guide Complet des Clubs & Saunas Libertins en France | AKOKY"
      description="Guide de référence sur les clubs libertins, saunas et établissements échangistes en France et en Europe. Découvrez l'univers libertin, les différents types de lieux, et trouvez votre établissement idéal."
      canonical="https://akoky.com/fr/clubbing"
      heroTitle="Clubs & Saunas Libertins en France"
      heroSubtitle="Le guide de référence pour découvrir, comprendre et choisir votre établissement libertin idéal"
      heroImage="/images/club.webp"
      breadcrumb={[{ label: "Clubbing" }]}
      faq={[
        { question: "Comment choisir son premier club libertin ?", answer: "Consultez notre guide pour débutants et les avis vérifiés sur AKOKY. Privilégiez un club avec une bonne réputation, une clientèle respectueuse et des soirées adaptées aux novices." },
        { question: "Quelle est la différence entre un club libertin et un sauna ?", answer: "Les clubs libertins mettent l'accent sur l'ambiance festive (bar, danse, espaces privés), tandis que les saunas privilégient le bien-être (hammam, spa) dans une atmosphère plus détendue." },
        { question: "Les femmes seules sont-elles acceptées ?", answer: "Oui, les femmes seules sont généralement les bienvenues dans la majorité des établissements libertins sans restriction particulière." },
        { question: "Comment AKOKY vérifie-t-il les clubs ?", answer: "Notre équipe visite et évalue chaque établissement référencé. Nous prenons en compte l'hygiène, le respect des règles, la qualité de l'accueil et les retours de nos membres." },
        { question: "Quels types d'établissements libertins existe-t-il en France ?", answer: "Il existe principalement trois types : les clubs libertins (ambiance festive, bar, danse), les saunas libertins (bien-être, hammam, spa) et les lieux privés (événements ponctuels sur invitation dans des résidences ou châteaux)." },
        { question: "Faut-il réserver à l'avance pour aller dans un club libertin ?", answer: "Les réservations sont souvent conseillées, voire obligatoires pour les soirées spéciales. Consultez les fiches établissements sur AKOKY pour connaître les modalités de chaque club." },
      ]}
      schema={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Guide Complet des Clubs & Saunas Libertins en France",
        description: "Guide de référence sur les clubs libertins en France et en Europe.",
        url: "https://akoky.com/fr/clubbing",
      }}
    >
      {/* ── Hub Géographique ── */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
            <div className="text-4xl mb-4">🗺️</div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Guide Géographique Complet</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Cette page constitue le point d'entrée central du clubbing libertin en France et en Europe. Elle structure l'ensemble des pays, régions et grandes villes afin de vous guider facilement vers les clubs, saunas et établissements libertins vérifiés par AKOKY.
            </p>
            <Link
              to="/fr/clubbing-france-europe"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-bold hover:scale-105 transition-all"
            >
              Découvrir le guide géographique complet →
            </Link>
            <div className="flex gap-4 mt-8">
              <div className="bg-muted/30 rounded-xl px-4 py-3 text-center">
                <div className="text-2xl">🇫🇷</div>
                <div className="text-sm text-muted-foreground mt-1">France</div>
              </div>
              <div className="bg-muted/30 rounded-xl px-4 py-3 text-center">
                <div className="text-2xl">🇪🇺</div>
                <div className="text-sm text-muted-foreground mt-1">Europe</div>
              </div>
              <div className="bg-muted/30 rounded-xl px-4 py-3 text-center">
                <div className="text-2xl">📍</div>
                <div className="text-sm text-muted-foreground mt-1">Toutes régions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Régions libertines ── */}
      <section className="py-16 px-4 border-t border-border/50">
        <div className="container max-w-5xl mx-auto space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground font-display">Régions libertines de France</h2>
            <p className="text-muted-foreground mt-2">Explorez les clubs et saunas par région</p>
          </div>
          <ul className="flex flex-wrap justify-center gap-3">
            {regions.map((r) => (
              <li key={r.label}>
                <Link to={r.href} className={chipClass}>
                  {r.label} <span aria-hidden>→</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="text-center pt-4">
            <Link to="/fr/clubs-libertins" className="text-primary hover:underline text-sm font-medium">
              Voir l'annuaire complet des clubs en France →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Grandes villes ── */}
      <section className="py-16 px-4 bg-card/30 border-t border-border/50">
        <div className="container max-w-5xl mx-auto space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground font-display">Clubs libertins par ville</h2>
            <p className="text-muted-foreground mt-2">Les meilleures adresses dans les grandes villes françaises</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {cities.map((c) => (
              <Link key={c.label} to={c.href} className={cardClass}>
                <span className="text-2xl">{c.emoji}</span>
                <span className="block text-foreground font-semibold mt-1 group-hover:text-primary transition-colors">{c.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Saunas libertins ── */}
      <section className="py-16 px-4 border-t border-border/50">
        <div className="container max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="overflow-hidden rounded-2xl border border-border">
              <img
                src="/images/sauna-cover.webp"
                alt="Sauna libertin en France"
                className="w-full h-64 object-cover"
                loading="lazy"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground font-display">Saunas libertins en France</h2>
              <p className="text-muted-foreground leading-relaxed">
                Les saunas libertins offrent une expérience unique mêlant bien-être et sensualité. Hammam, jacuzzi, cabines privées et espaces de détente dans une ambiance feutrée et respectueuse.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Découvrez notre guide complet avec les meilleurs saunas de France, les tarifs, les codes vestimentaires et les conseils pour une première visite réussie.
              </p>
              <Link
                to="/fr/saunas-libertins"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card border border-primary/50 text-primary font-medium hover:bg-primary/10 transition-colors"
              >
                Guide des saunas libertins →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Europe ── */}
      <section className="py-16 px-4 bg-card/30 border-t border-border/50">
        <div className="container max-w-5xl mx-auto space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground font-display">Clubbing libertin en Europe</h2>
            <p className="text-muted-foreground mt-2">Explorez la scène libertine au-delà des frontières</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {europe.map((e) => (
              <Link key={e.label} to={e.href} className={cardClass + " text-center"}>
                <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{e.label}</span>
                <span className="block text-muted-foreground text-sm mt-2">{e.sub}</span>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link to="/fr/clubbing-france-europe" className="text-primary hover:underline text-sm font-medium">
              Voir le hub géographique complet France & Europe →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Introduction / Comprendre l'univers ── */}
      <section className="py-16 px-4 border-t border-border/50">
        <div className="container max-w-4xl mx-auto prose prose-invert prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-foreground font-display">Comprendre l'univers libertin en France</h2>

          <h3 className="text-xl font-bold text-primary mt-8 mb-4">Qu'est-ce que le libertinage moderne ?</h3>
          <p>
            Le libertinage contemporain en France désigne une pratique sexuelle librement consentie entre adultes, fondée sur l'échange, la découverte et le plaisir partagé. Le libertinage repose sur des valeurs fortes : respect mutuel, consentement explicite, discrétion et courtoisie.
          </p>

          <h3 className="text-xl font-bold text-primary mt-8 mb-4">Les différents types d'établissements</h3>
          <p>
            Les <strong>clubs libertins</strong> proposent bar, piste de danse, salons privés et cabines. Les <strong>saunas libertins</strong> mettent l'accent sur le bien-être avec hammam, spa et espaces de relaxation. Certains établissements organisent des <Link to="/fr/evenements" className="text-primary hover:underline">soirées thématiques</Link> régulières.
          </p>

          <h3 className="text-xl font-bold text-primary mt-8 mb-4">Les règles à respecter</h3>
          <p>
            La première règle est le <strong>consentement absolu</strong> : un non est toujours un non. Le respect de l'intimité et de la discrétion est fondamental. La courtoisie et l'hygiène irréprochable sont exigées. Pour en savoir plus, consultez notre <Link to="/fr/guide-ultime-libertinage" className="text-primary hover:underline">guide ultime du libertinage</Link>.
          </p>
        </div>
      </section>

      {/* ── Types d'établissements ── */}
      <section className="py-16 px-4 bg-card/30 border-t border-border/50">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-10 text-center font-display">Clubs, saunas, établissements : quelles différences ?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className={cardClass}>
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="text-xl font-bold text-foreground mb-3">Clubs libertins</h3>
              <p className="text-muted-foreground">Ambiance festive avec bar, danse et espaces privés. Soirées à thème fréquentes.</p>
              <Link to="/fr/clubs-libertins" className="text-primary text-sm hover:underline mt-3 inline-block">Explorer les clubs →</Link>
            </div>
            <div className={cardClass}>
              <div className="text-4xl mb-4">♨️</div>
              <h3 className="text-xl font-bold text-foreground mb-3">Saunas libertins</h3>
              <p className="text-muted-foreground">Bien-être et détente avec hammam, spa et espaces de relaxation sensuels.</p>
              <Link to="/fr/saunas-libertins" className="text-primary text-sm hover:underline mt-3 inline-block">Explorer les saunas →</Link>
            </div>
            <div className={cardClass}>
              <div className="text-4xl mb-4">🏰</div>
              <h3 className="text-xl font-bold text-foreground mb-3">Lieux privés</h3>
              <p className="text-muted-foreground">Résidences et châteaux accueillant des événements ponctuels sur invitation.</p>
              <Link to="/fr/evenements" className="text-primary text-sm hover:underline mt-3 inline-block">Voir les événements →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Guides pour débutants ── */}
      <section className="py-16 px-4 border-t border-border/50">
        <div className="container max-w-5xl mx-auto space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground font-display">Guides pour bien débuter</h2>
            <p className="text-muted-foreground mt-2">Tout ce qu'il faut savoir avant de se lancer</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {guides.map((g) => (
              <Link key={g.title} to={g.href} className={cardClass}>
                <span className="text-3xl">{g.emoji}</span>
                <h3 className="text-foreground font-semibold mt-2 group-hover:text-primary transition-colors">{g.title}</h3>
                <p className="text-muted-foreground text-sm mt-1">{g.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Événements ── */}
      <section className="py-16 px-4 bg-card/30 border-t border-border/50">
        <div className="container max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground font-display">Événements & soirées libertines</h2>
              <p className="text-muted-foreground leading-relaxed">
                Des soirées à thème aux week-ends libertins, en passant par les croisières et voyages organisés : retrouvez le calendrier complet des événements libertins en France et en Europe sur AKOKY.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>🎭 Soirées Masquerade et White Party</li>
                <li>🌙 Nuits à thème dans les meilleurs clubs</li>
                <li>🏖️ Week-ends libertins au <Link to="/fr/clubs-libertins-cap-d-agde" className="text-primary hover:underline">Cap d'Agde</Link></li>
                <li>✈️ Voyages organisés et croisières libertines</li>
              </ul>
              <Link
                to="/fr/evenements"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card border border-primary/50 text-primary font-medium hover:bg-primary/10 transition-colors"
              >
                Consulter le calendrier →
              </Link>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border">
              <img
                src="/images/soiree-club-libertin.webp"
                alt="Soirée dans un club libertin"
                className="w-full h-64 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Comparatifs ── */}
      <section className="py-16 px-4 border-t border-border/50">
        <div className="container max-w-5xl mx-auto space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground font-display">Comparatifs des sites libertins</h2>
            <p className="text-muted-foreground mt-2">Trouvez la plateforme qui vous correspond</p>
          </div>
          <ul className="flex flex-wrap justify-center gap-3">
            {comparatifs.map((c) => (
              <li key={c.label}>
                <Link to={c.href} className={chipClass}>
                  {c.label} <span aria-hidden>→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── AKOKY App & Communauté ── */}
      <section className="py-16 px-4 bg-card/30 border-t border-border/50">
        <div className="container max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="overflow-hidden rounded-2xl border border-border">
              <img
                src="/images/application-akoky.webp"
                alt="Application AKOKY"
                className="w-full h-64 object-cover"
                loading="lazy"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground font-display">Rejoignez la communauté AKOKY</h2>
              <p className="text-muted-foreground leading-relaxed">
                AKOKY est bien plus qu'un annuaire. C'est une communauté de couples et célibataires libertins qui partagent leurs expériences, leurs avis vérifiés et leurs recommandations.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>⭐ <Link to="/fr/avis" className="text-primary hover:underline">Avis vérifiés</Link> par la communauté</li>
                <li>🎮 <Link to="/fr/jeux" className="text-primary hover:underline">Jeux libertins</Link> pour pimenter vos soirées</li>
                <li>👑 <Link to="/fr/vip" className="text-primary hover:underline">Espace VIP</Link> avec avantages exclusifs</li>
                <li>📱 <Link to="/fr/application" className="text-primary hover:underline">Application mobile</Link> disponible</li>
                <li>📺 <Link to="/fr/live" className="text-primary hover:underline">Live streaming</Link> pour des rencontres en direct</li>
              </ul>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  to="/fr/akoky"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-bold hover:scale-105 transition-all"
                >
                  Découvrir AKOKY →
                </Link>
                <Link
                  to="/fr/vision"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card border border-border text-foreground font-medium hover:border-primary/50 transition-colors"
                >
                  Notre vision →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Libertinage & Actualités ── */}
      <section className="py-16 px-4 border-t border-border/50">
        <div className="container max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <Link to="/fr/libertinage" className={cardClass + " text-center"}>
              <span className="text-3xl">💋</span>
              <h3 className="text-foreground font-semibold mt-2 group-hover:text-primary transition-colors">Le libertinage</h3>
              <p className="text-muted-foreground text-sm mt-1">Histoire, philosophie et culture</p>
            </Link>
            <Link to="/fr/actualites-libertines" className={cardClass + " text-center"}>
              <span className="text-3xl">📰</span>
              <h3 className="text-foreground font-semibold mt-2 group-hover:text-primary transition-colors">Actualités libertines</h3>
              <p className="text-muted-foreground text-sm mt-1">Les dernières nouvelles du milieu</p>
            </Link>
            <Link to="/fr/presse" className={cardClass + " text-center"}>
              <span className="text-3xl">🗞️</span>
              <h3 className="text-foreground font-semibold mt-2 group-hover:text-primary transition-colors">Presse & médias</h3>
              <p className="text-muted-foreground text-sm mt-1">AKOKY dans les médias</p>
            </Link>
            <Link to="/fr/contact" className={cardClass + " text-center"}>
              <span className="text-3xl">💬</span>
              <h3 className="text-foreground font-semibold mt-2 group-hover:text-primary transition-colors">Contact</h3>
              <p className="text-muted-foreground text-sm mt-1">Une question ? Parlons-en</p>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Parrainage ── */}
      <section className="py-16 px-4 bg-card/30 border-t border-border/50">
        <div className="container max-w-4xl mx-auto text-center space-y-4">
          <div className="text-4xl">🎁</div>
          <h2 className="text-3xl font-bold text-foreground font-display">Programme de parrainage</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Invitez vos amis à rejoindre AKOKY et profitez ensemble d'avantages exclusifs. Plus vous parrainez, plus vous gagnez.
          </p>
          <Link
            to="/fr/parrainage"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-bold hover:scale-105 transition-all"
          >
            Découvrir le programme →
          </Link>
        </div>
      </section>
    </ContentPageLayout>
  );
};

export default Clubbing;
