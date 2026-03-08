import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "Comment participer au concours Akoky des six clés ?", answer: "Pour participer, vous devez trouver les 6 clés cachées sur akoky.com (5 clés de mars à juillet 2026) et app.akoky.com (1 clé d'août à décembre 2026). Notez les codes associés à chaque clé et soumettez-les avec votre pseudo et email via le formulaire de participation." },
  { question: "Quel est le lot à gagner pour le concours Akoky ?", answer: "Le gagnant remporte une semaine complète (7 jours / 6 nuits) au RIAD5 - Cap d'Agde, séjour premium d'une valeur estimée à 4 500 €, valable jusqu'au 31 décembre 2027. Le lot est unique, non échangeable et non monnayable." },
  { question: "Quand commence le concours des six clés Akoky ?", answer: "Le concours débute officiellement le 1er mars 2026 avec la mise en ligne de la première clé sur akoky.com. Les clés suivantes sont disponibles progressivement chaque mois jusqu'en décembre 2026." },
  { question: "Faut-il un compte Akoky pour participer au concours ?", answer: "Un compte Akoky est obligatoire pour accéder à la 6ème clé qui se trouve sur app.akoky.com. Les 5 premières clés sur akoky.com sont accessibles à tous." },
  { question: "Comment sont cachées les clés du concours Akoky ?", answer: "Chaque clé est dissimulée sur une page spécifique et devient visible via une interaction utilisateur (survol, clic, scroll, etc.). Une fois révélée, la clé affiche un code chiffré unique que vous devez noter précieusement." },
  { question: "Combien y a-t-il de gagnants au concours Akoky ?", answer: "Il y a un seul et unique gagnant. Le premier participant qui soumet les 6 codes corrects avec toutes les informations requises remporte le séjour au RIAD5." },
  { question: "Le lot du concours Akoky est-il échangeable ?", answer: "Non, le lot est unique, non échangeable, non monnayable et non cessible. Il doit être utilisé par le gagnant avant le 31 décembre 2027." },
  { question: "Où se trouve la 6ème clé du concours Akoky ?", answer: "La 6ème et dernière clé est disponible exclusivement sur app.akoky.com, pour les utilisateurs connectés, d'août à décembre 2026." },
  { question: "Peut-on participer au concours Akoky depuis l'étranger ?", answer: "Oui, le concours est ouvert à tous les participants majeurs, quelle que soit leur localisation. Cependant, le gagnant devra se rendre au RIAD5 - Cap d'Agde (France). Les frais de transport ne sont pas inclus." },
  { question: "Comment valider ma participation au concours des six clés ?", answer: "Une fois les 6 clés trouvées, saisissez la combinaison dans l'ordre exact sur la page du coffre. Si le coffre s'ouvre, votre participation sera vérifiée manuellement par notre équipe." },
];

const TIMELINE = [
  { month: "Mars 2026", key: "Clé n°1", emoji: "🔑", desc: "La chasse commence. La première clé est dissimulée sur une page publique d'akoky.com. Elle peut se cacher dans un texte, une section secondaire ou un détail que beaucoup survoleront. Regardez vraiment.", status: "À découvrir", special: false },
  { month: "Avril 2026", key: "Clé n°2", emoji: "🔑", desc: "Deuxième clé. La pression monte. Toujours sur akoky.com. Rien n'est signalé, rien n'est annoncé. Ceux qui explorent en surface passeront à côté.", status: "À découvrir", special: false },
  { month: "Mai 2026", key: "Clé n°3", emoji: "🔑", desc: "À mi-parcours, seuls les plus méthodiques tiennent encore. Pages clubs, régions, FAQ, contenus informatifs… Chaque page publique peut cacher un chiffre décisif.", status: "À découvrir", special: false },
  { month: "Juin 2026", key: "Clé n°4", emoji: "🔑", desc: "Dernière clé sur le site public. Après celle-ci, il n'y aura plus de place pour l'erreur. Fouillez tout akoky.com. Absolument tout.", status: "À découvrir", special: false },
  { month: "Juillet 2026", key: "Clé n°5", emoji: "🔑", desc: "Le jeu bascule. Cette clé est accessible uniquement sur app.akoky.com, après connexion. Vous êtes proche. Très proche. Une seule clé vous sépare du coffre.", status: "App requise", special: false },
  { month: "Août – Décembre 2026", key: "Clé n°6", emoji: "🔑", desc: "Clé finale exclusive. Disponible uniquement sur app.akoky.com, pour les utilisateurs connectés. ⚠️ La clé finale apparaît discrètement, chaque soir, du lundi au dimanche, entre 18h00 et 00h00. Aucun signal. Le premier qui trouve cette clé, respecte l'ordre et ouvre le coffre remporte immédiatement le gros lot.", status: "Fenêtre critique · App uniquement", special: true },
];

const RULES = [
  { icon: "📅", title: "Durée du concours", content: "Le concours « Le Jeu des Six Clés Akoky » débute le 1er mars 2026 et se termine dès qu'un gagnant valide est déclaré ou au plus tard le 31 décembre 2026." },
  { icon: "👤", title: "Conditions de participation", list: ["Être majeur (18 ans minimum)", "Posséder un compte Akoky (requis pour la 6ème clé)", "Fournir un pseudo Akoky et une adresse email valide", "Trouver les 6 clés et noter leurs codes exacts"] },
  { icon: "🏆", title: "Attribution du lot", content: "Un seul gagnant. Le premier participant qui soumet les 6 codes corrects avec toutes les informations requises remporte le lot. La vérification est effectuée manuellement par l'équipe Akoky." },
  { icon: "🎁", title: "Nature du lot", list: ["1 semaine (7 jours / 6 nuits) au RIAD5 - Cap d'Agde", "Valeur estimée : 4 500 €", "Validité : jusqu'au 31 décembre 2027", "Lot unique, non échangeable, non monnayable, non cessible", "Les frais de transport ne sont pas inclus"] },
  { icon: "⚠️", title: "Fraude et disqualification", content: "Akoky se réserve le droit de disqualifier toute tentative de fraude, manipulation, utilisation de bots ou tout comportement jugé contraire à l'esprit du concours. Les décisions de l'équipe Akoky sont définitives." },
  { icon: "📧", title: "Contact et réclamations", content: "Pour toute question concernant le concours : contact@akoky.com" },
  { icon: "🔒", title: "Données personnelles", content: "Les données collectées (pseudo, email, codes) sont utilisées uniquement dans le cadre de ce concours et conformément à notre politique de confidentialité. Aucune donnée ne sera transmise à des tiers." },
  { icon: "📜", title: "Acceptation du règlement", content: "La participation à ce concours implique l'acceptation pleine et entière du présent règlement. Akoky se réserve le droit de modifier le règlement en cas de force majeure." },
];

const ConcoursSixCles = () => (
  <>
    <MetaTags
      title="Le Jeu des Six Clés Akoky 2026 – Gagnez un séjour au RIAD5 Cap d'Agde"
      description="Participez au concours Akoky 2026 : trouvez 6 clés cachées sur le site et l'application pour gagner une semaine au RIAD5 Cap d'Agde d'une valeur de 4 500 €. Concours gratuit, 1 gagnant."
      canonical="https://akoky.com/fr/concours-six-cles"
      lang="fr"
    />
    <HreflangTags slug="concours-six-cles" />
    <ContentPageLayout
      lang="fr"
      title="Le Jeu des Six Clés Akoky 2026 – Gagnez un séjour au RIAD5 Cap d'Agde"
      description="Participez au concours Akoky 2026 : trouvez 6 clés cachées sur le site et l'application pour gagner une semaine au RIAD5 Cap d'Agde d'une valeur de 4 500 €."
      canonical="https://akoky.com/fr/concours-six-cles"
      heroTitle="Le Jeu des Six Clés"
      heroSubtitle="Explorez AKOKY, trouvez les 6 clés cachées et gagnez une semaine au RIAD5 Cap d'Agde — valeur 4 500 €"
      heroImage="/images/concours/six-cles.webp"
      breadcrumb={[{ label: "Concours", href: "/fr/concours" }, { label: "Le Jeu des Six Clés" }]}
      faq={FAQ}
      schema={{
        "@context": "https://schema.org",
        "@type": "Event",
        name: "Le Jeu des Six Clés Akoky 2026",
        url: "https://akoky.com/fr/concours-six-cles",
        startDate: "2026-03-01",
        endDate: "2026-12-31",
        location: { "@type": "VirtualLocation", url: "https://akoky.com" },
        organizer: { "@type": "Organization", name: "AKOKY", url: "https://akoky.com" },
        offers: { "@type": "Offer", price: "0", priceCurrency: "EUR", availability: "https://schema.org/InStock" },
      }}
    >
      {/* Badge + Prize hero */}
      <section className="py-12 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-5 py-2 text-sm font-semibold text-primary mb-8">
            <span className="text-lg">🎮</span>
            <span>Concours Communautaire 2026</span>
          </div>
          <div className="inline-flex items-center gap-4 bg-primary/10 border-2 border-primary rounded-2xl px-8 py-5 mb-8">
            <span className="text-5xl drop-shadow-lg">🏆</span>
            <span className="text-4xl font-black text-primary">+ 4 500 €</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a href="#comment-jouer" className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-black font-bold text-lg hover:scale-105 transition-all">
              Commencer l'aventure →
            </a>
            <a href="#reglement" className="px-8 py-4 rounded-full bg-card border border-border text-foreground font-bold text-lg hover:border-primary/50 transition-all">
              Voir le règlement
            </a>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🗓️</span>
              <div className="text-left">
                <strong className="text-primary block">Début du concours</strong>
                <p className="text-muted-foreground text-sm">1er mars 2026</p>
              </div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-primary/30" />
            <div className="flex items-center gap-3">
              <span className="text-3xl">🎯</span>
              <div className="text-left">
                <strong className="text-primary block">Dernière clé</strong>
                <p className="text-muted-foreground text-sm">Décembre 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Le concept du jeu */}
      <section className="py-16 px-4">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-3 font-display">Le concept du jeu</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">Un concours d'exploration mensuel qui récompense votre engagement dans la communauté Akoky</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "🔍", title: "Exploration mensuelle", desc: "Chaque mois de mars à juillet 2026, une nouvelle clé est cachée, dissimulée dans un texte, sur akoky.com. Explorez les pages, lisez les contenus, découvrez la communauté." },
              { icon: "📱", title: "Application exclusive", desc: "La 6ème clé est réservée aux membres connectés sur app.akoky.com d'août à décembre 2026. Créez votre compte pour y accéder." },
              { icon: "🎁", title: "Un seul gagnant", desc: "Le premier participant qui soumet les 6 codes corrects, dans le bon ordre, remporte le séjour au RIAD5. Soyez rapide, soyez malin !" },
            ].map((c, i) => (
              <div key={i} className="p-8 bg-card border border-border rounded-2xl text-center hover:border-primary hover:-translate-y-2 transition-all duration-300 group">
                <span className="text-5xl block mb-5 group-hover:scale-110 transition-transform">{c.icon}</span>
                <h3 className="text-xl font-bold text-foreground mb-3">{c.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comment jouer */}
      <section id="comment-jouer" className="py-16 px-4 bg-muted/30">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-3 font-display">Comment jouer ?</h2>
            <p className="text-muted-foreground text-lg">Suivez ces étapes pour participer au concours</p>
          </div>
          <div className="space-y-6">
            {[
              { step: "1", title: "Trouvez les 5 premières clés", desc: "De mars à juillet 2026, une clé est cachée chaque mois sur une page de akoky.com. Explorez le site, survolez des éléments, interagissez avec le contenu.", hint: "💡 Astuce : Les clés deviennent visibles via une interaction (survol, clic, scroll...)" },
              { step: "2", title: "Accédez à la 6ème clé sur l'app", desc: "D'août à décembre 2026, connectez-vous à app.akoky.com pour découvrir la dernière clé. Un compte Akoky est requis pour cette étape.", hint: "🔐 Obligatoire : Créez votre compte sur app.akoky.com" },
              { step: "3", title: "Notez tous les codes et la page où vous les avez trouvés", desc: "Chaque clé affiche un code chiffré unique. Notez précieusement les 6 codes dans l'ordre de découverte et notez le titre de la page sur laquelle vous l'avez découverte.", hint: "📝 Important : Sans les 6 codes exacts, votre participation ne sera pas validée" },
              { step: "4", title: "Vous avez la combinaison des six chiffres ?", desc: "Descendez immédiatement en bas de cette page pour valider votre victoire. Saisissez la combinaison dans l'ordre exact et tentez l'ouverture du coffre. S'il s'ouvre, vous avez gagné. Votre participation sera vérifiée manuellement par notre équipe.", hint: "⚡ Vitesse : Le premier à soumettre les bons chiffres dans l'ordre gagne !" },
            ].map((s, i) => (
              <div key={i} className="flex gap-5 bg-card border-2 border-border rounded-2xl p-6 hover:border-primary hover:translate-x-2 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-primary to-primary-dark scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary-dark text-white flex items-center justify-center text-2xl font-black flex-shrink-0 shadow-lg">
                  {s.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">{s.desc}</p>
                  <div className="bg-primary/10 border-l-[3px] border-primary p-3 rounded-lg text-sm text-foreground">
                    {s.hint}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendrier des clés - Timeline */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-3 font-display">Calendrier officiel des Six Clés – 2026</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">Chaque mois compte. Chaque page peut tout changer. Le premier qui ouvre le coffre met fin au jeu.</p>
          </div>
          <div className="relative ml-8 md:ml-[30px]">
            {/* Vertical line */}
            <div className="absolute left-[14px] md:left-[28px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary/30" />
            <div className="space-y-8">
              {TIMELINE.map((t, i) => (
                <div key={i} className="flex gap-5 relative">
                  <div className={`w-[60px] h-[60px] rounded-full border-[3px] border-primary flex items-center justify-center text-2xl z-10 flex-shrink-0 shadow-lg ${t.special ? "bg-gradient-to-br from-primary to-primary-dark animate-pulse" : "bg-card"}`}>
                    {t.emoji}
                  </div>
                  <div className={`flex-1 bg-card border rounded-xl p-5 hover:border-primary hover:-translate-y-1 transition-all ${t.special ? "border-primary bg-primary/5" : "border-border"}`}>
                    <h3 className="text-lg font-bold text-foreground mb-2">{t.month} – {t.key}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-3">{t.desc}</p>
                    <span className={`inline-block px-4 py-1 rounded-full text-xs font-semibold ${t.special ? "bg-primary/20 text-primary border border-primary" : "bg-muted text-muted-foreground"}`}>
                      {t.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Le lot à gagner */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-3 font-display">Le lot à gagner</h2>
            <p className="text-muted-foreground text-lg">Une récompense exceptionnelle pour le gagnant</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img src="/images/concours/six-cles.webp" alt="RIAD5 - Cap d'Agde" className="w-full h-auto group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              <div className="absolute top-4 right-4 bg-black/80 text-white px-4 py-2 rounded-full font-bold text-sm backdrop-blur-sm">
                🏆 Lot unique
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-black text-foreground">Une semaine au RIAD5 - Cap d'Agde</h3>
              <div className="bg-gradient-to-br from-primary to-primary-dark text-white p-6 rounded-xl text-center shadow-lg">
                <p className="text-sm uppercase tracking-wider opacity-90 mb-1">Valeur estimée</p>
                <p className="text-4xl font-black">+ 4 500 €</p>
              </div>
              <ul className="space-y-4">
                {[
                  { icon: "✨", title: "Séjour premium complet", desc: "7 jours / 6 nuits dans l'établissement mythique du Cap d'Agde" },
                  { icon: "🗓️", title: "Validité prolongée", desc: "Utilisable jusqu'au 31 décembre 2027" },
                  { icon: "🎁", title: "Expérience exclusive", desc: "Accès aux installations premium et services du RIAD5" },
                  { icon: "⚠️", title: "Conditions", desc: "Lot non échangeable, non monnayable, non cessible" },
                ].map((f, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="text-2xl flex-shrink-0">{f.icon}</span>
                    <div>
                      <strong className="text-foreground block">{f.title}</strong>
                      <p className="text-muted-foreground text-sm">{f.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="bg-primary/10 border-l-[3px] border-primary p-4 rounded-lg">
                <p className="text-muted-foreground text-sm"><strong className="text-foreground">Note importante :</strong> Le séjour sera coordonné directement avec le RIAD5 selon les disponibilités. Les frais de transport ne sont pas inclus.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Validez votre victoire */}
      <section id="participer" className="py-16 px-4 bg-muted/30">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-3 font-display">Validez votre victoire</h2>
          <p className="text-muted-foreground text-lg mb-8">Vous avez trouvé les 6 clés ? Accédez au coffre et soumettez vos codes maintenant !</p>
          <a href="https://akoky.com/concours-cles-2026/index.html" className="px-10 py-5 rounded-full bg-gradient-to-r from-primary to-primary-dark text-black font-bold text-xl hover:scale-105 transition-all inline-block shadow-lg">
            🏆 Je tente l'ouverture du coffre !
          </a>
          <p className="text-muted-foreground/60 text-sm mt-4">* Jeu sécurisé par l'équipe Akoky, toute fraude sera détectée.</p>
        </div>
      </section>

      {/* Règlement */}
      <section id="reglement" className="py-16 px-4">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-3 font-display">Règlement du concours</h2>
            <p className="text-muted-foreground text-lg">Conditions officielles de participation</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {RULES.map((r, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6 hover:border-primary hover:-translate-y-1 transition-all">
                <h3 className="text-lg font-bold text-foreground mb-3">{r.icon} {r.title}</h3>
                {r.content && <p className="text-muted-foreground leading-relaxed">{r.content}</p>}
                {r.list && (
                  <ul className="space-y-1.5 text-muted-foreground">
                    {r.list.map((item, j) => (
                      <li key={j} className="flex gap-2 items-start">
                        <span className="text-primary font-bold">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Règlement officiel détaillé */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-4xl mx-auto prose prose-invert max-w-none">
          <h2 className="text-3xl font-black text-foreground mb-8 font-display text-center">Règlement officiel du concours<br />« La Chasse aux Six Clés Akoky »</h2>
          
          <div className="space-y-8 text-muted-foreground">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">Article 1 – Organisation</h3>
              <p className="leading-relaxed">Le concours intitulé <strong className="text-foreground">« La Chasse aux Six Clés Akoky »</strong> est organisé par <strong className="text-foreground">Liberty Interactive Ltd</strong>, société exploitante et gestionnaire de la plateforme Akoky. Les informations légales complètes sont consultables sur <a href="https://liberty-interactive-ltd.online" target="_blank" rel="noopener" className="text-primary hover:underline">liberty-interactive-ltd.online</a>. Les mentions légales sont accessibles sur <a href="https://legal.akoky.com" target="_blank" rel="noopener" className="text-primary hover:underline">legal.akoky.com</a>.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">Article 2 – Conditions de participation</h3>
              <p className="leading-relaxed">Le concours est ouvert à toute personne physique majeure disposant d'un compte utilisateur valide sur la plateforme Akoky. La participation est <strong className="text-foreground">gratuite</strong> et sans obligation d'achat. La participation implique l'acceptation pleine et entière du présent règlement.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">Article 3 – Principe du concours</h3>
              <p className="leading-relaxed mb-3">Le concours se déroule du <strong className="text-foreground">1er mars 2026</strong> au <strong className="text-foreground">31 décembre 2026</strong>, sauf clôture anticipée. Six (6) clés sont dissimulées progressivement :</p>
              <ul className="space-y-1 ml-4">
                <li>→ Quatre (4) clés sur le site public <strong className="text-foreground">akoky.com</strong></li>
                <li>→ Deux (2) clés sur l'application <strong className="text-foreground">app.akoky.com</strong>, accessible uniquement aux utilisateurs connectés</li>
              </ul>
              <p className="leading-relaxed mt-3">Chaque clé affiche un <strong className="text-foreground">chiffre unique</strong>. L'ensemble constitue une combinaison finale. <strong className="text-foreground">L'ordre de découverte est strictement obligatoire.</strong></p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">Article 4 – Modalités de recherche des clés</h3>
              <p className="leading-relaxed">Les clés peuvent être dissimulées dans n'importe quelle section des pages (texte, FAQ, éléments visuels). Les participants doivent noter chaque chiffre, conserver l'URL ou le titre de la page, et respecter l'ordre de découverte.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">Article 5 – Clé finale et conditions horaires</h3>
              <p className="leading-relaxed">La sixième clé est accessible exclusivement sur <strong className="text-foreground">app.akoky.com</strong>. Elle peut apparaître <strong className="text-foreground">chaque jour entre 18h00 et 00h00</strong>, de manière discrète et sans notification préalable.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">Article 6 – Désignation du gagnant</h3>
              <p className="leading-relaxed">Le gagnant est le <strong className="text-foreground">premier participant</strong> qui saisit la combinaison complète, respecte l'ordre exact et ouvre le coffre. Dès l'ouverture valide, <strong className="text-foreground">le concours prend fin immédiatement</strong>.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">Articles 7 à 10</h3>
              <p className="leading-relaxed">Vérification manuelle par l'organisateur. Toute fraude entraîne disqualification immédiate. L'organisateur n'est pas responsable des dysfonctionnements techniques. La participation implique l'acceptation totale du règlement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container max-w-3xl mx-auto">
          <div className="bg-card border-2 border-primary rounded-3xl p-10 md:p-14 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">Prêt à relever le défi ?</h2>
            <p className="text-muted-foreground text-lg mb-8">Le jeu commence le 1er mars 2026. Explorez Akoky, soyez attentif, et que le meilleur gagne !</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://akoky.com" className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-black font-bold text-lg hover:scale-105 transition-all">
                Explorer Akoky →
              </a>
              <a href="https://app.akoky.com/register" target="_blank" rel="noopener" className="px-8 py-4 rounded-full bg-card border border-border text-foreground font-bold text-lg hover:border-primary/50 transition-all">
                Créer mon compte
              </a>
            </div>
          </div>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default ConcoursSixCles;
