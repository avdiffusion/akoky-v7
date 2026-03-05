import ContentPageLayout from "@/components/layout/ContentPageLayout";

const ConcoursSixCles = () => (
  <ContentPageLayout
    title="Le Jeu des Six Clés – Concours Communautaire 2026 | AKOKY"
    description="Explorez Akoky, trouvez les 6 clés cachées et gagnez une semaine premium au RIAD5 - Cap d'Agde + 4 500 €."
    canonical="https://akoky.com/concours-six-cles"
    heroTitle="Le Jeu des Six Clés"
    heroSubtitle="Explorez Akoky, trouvez les 6 clés cachées et gagnez une semaine premium au RIAD5 - Cap d'Agde. 🏆 + 4 500 €"
    heroType="gradient"
    breadcrumb={[{ label: "Concours", href: "/concours" }, { label: "Le Jeu des Six Clés" }]}
    faq={[
      { question: "Comment participer au concours Akoky des six clés ?", answer: "Pour participer, vous devez trouver les 6 clés cachées sur akoky.com (5 clés de mars à juillet 2026) et app.akoky.com (1 clé d'août à décembre 2026). Notez les codes associés à chaque clé et soumettez-les." },
      { question: "Quel est le lot à gagner pour le concours Akoky ?", answer: "Le gagnant remporte une semaine complète (7 jours / 6 nuits) au RIAD5 - Cap d'Agde, séjour premium d'une valeur estimée à 4 500 €." },
      { question: "Faut-il un compte Akoky pour participer au concours ?", answer: "Un compte Akoky est obligatoire pour accéder à la 6ème clé qui se trouve sur app.akoky.com." },
      { question: "Comment sont cachées les clés du concours Akoky ?", answer: "Chaque clé est dissimulée sur une page spécifique et devient visible via une interaction utilisateur (survol, clic, scroll, etc.)." },
      { question: "Combien y a-t-il de gagnants au concours Akoky ?", answer: "Il y a un seul et unique gagnant. Le premier participant qui soumet les 6 codes corrects remporte le séjour." },
    ]}
    schema={{ "@context": "https://schema.org", "@type": "Event", name: "Le Jeu des Six Clés Akoky", url: "https://akoky.com/concours-six-cles", startDate: "2026-03-01", endDate: "2026-12-31" }}
  >
    <section className="py-16 px-4">
      <div className="container max-w-4xl mx-auto space-y-16">
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="p-6 bg-card/50 rounded-2xl border border-border text-center">
            <span className="text-3xl block mb-2">🗓️</span>
            <p className="text-foreground font-bold">Début du concours</p>
            <p className="text-muted-foreground">1er mars 2026</p>
          </div>
          <div className="p-6 bg-card/50 rounded-2xl border border-border text-center">
            <span className="text-3xl block mb-2">🎯</span>
            <p className="text-foreground font-bold">Dernière clé</p>
            <p className="text-muted-foreground">Décembre 2026</p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-foreground mb-6 font-display">Le concept du jeu</h2>
          <p className="text-muted-foreground mb-8">Un concours d'exploration mensuel qui récompense votre engagement dans la communauté Akoky</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "🔍", title: "Exploration mensuelle", desc: "Chaque mois de mars à juillet 2026, une nouvelle clé est cachée sur akoky.com. Explorez les pages, lisez les contenus." },
              { icon: "📱", title: "Application exclusive", desc: "La 6ème clé est réservée aux membres connectés sur app.akoky.com d'août à décembre 2026." },
              { icon: "🎁", title: "Un seul gagnant", desc: "Le premier participant qui soumet les 6 codes corrects dans le bon ordre remporte le séjour au RIAD5." },
            ].map((c, i) => (
              <div key={i} className="p-6 bg-card/50 rounded-2xl border border-border">
                <span className="text-3xl mb-3 block">{c.icon}</span>
                <h3 className="text-lg font-bold text-foreground mb-2">{c.title}</h3>
                <p className="text-muted-foreground text-sm">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-foreground mb-8 font-display">Comment jouer ?</h2>
          <div className="space-y-6">
            {[
              { step: "1", title: "Trouvez les 5 premières clés", desc: "De mars à juillet 2026, une clé est cachée chaque mois sur une page de akoky.com. Explorez le site, survolez des éléments, interagissez avec le contenu." },
              { step: "2", title: "Accédez à la 6ème clé sur l'app", desc: "D'août à décembre 2026, connectez-vous à app.akoky.com pour découvrir la dernière clé." },
              { step: "3", title: "Notez tous les codes", desc: "Chaque clé affiche un code chiffré unique. Notez précieusement les 6 codes dans l'ordre de découverte." },
              { step: "4", title: "Validez votre victoire", desc: "Descendez en bas de cette page pour valider votre victoire. Saisissez la combinaison dans l'ordre exact et tentez l'ouverture du coffre." },
            ].map((s, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold flex-shrink-0">{s.step}</div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{s.title}</h3>
                  <p className="text-muted-foreground text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lot */}
        <div className="p-8 bg-card/50 rounded-2xl border border-primary/30 text-center">
          <p className="text-primary font-bold text-sm mb-2">🏆 Lot unique</p>
          <h3 className="text-2xl font-bold text-foreground mb-2 font-display">Une semaine au RIAD5 - Cap d'Agde</h3>
          <p className="text-foreground font-bold text-lg mb-4">Valeur estimée : + 4 500 €</p>
          <ul className="text-muted-foreground text-sm space-y-1 mb-6">
            <li>✨ 7 jours / 6 nuits dans l'établissement mythique du Cap d'Agde</li>
            <li>🗓️ Utilisable jusqu'au 31 décembre 2027</li>
            <li>⚠️ Lot non échangeable, non monnayable, non cessible</li>
          </ul>
          <a href="https://akoky.com/concours-cles-2026/index.html" className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-black font-bold text-lg hover:scale-105 transition-all inline-block">🏆 Je tente l'ouverture du coffre !</a>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://akoky.com/" className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-black font-bold text-lg hover:scale-105 transition-all">Explorer Akoky →</a>
            <a href="https://app.akoky.com/register" className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-foreground font-bold text-lg hover:bg-white/10 transition-all">Créer mon compte</a>
          </div>
        </div>
      </div>
    </section>
  </ContentPageLayout>
);

export default ConcoursSixCles;
