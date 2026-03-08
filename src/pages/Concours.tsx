import ContentPageLayout from "@/components/layout/ContentPageLayout";
import { Link } from "react-router-dom";

const Concours = () => (
  <ContentPageLayout
    title="Concours AKOKY – Gagnez des Expériences Libertines Exclusives"
    description="Participez gratuitement aux concours Akoky et tentez de gagner des séjours dans les meilleurs clubs libertins d'Europe, des abonnements VIP et des expériences uniques."
    canonical="https://akoky.com/concours"
    heroTitle="Concours AKOKY"
    heroSubtitle="Participez gratuitement et tentez de gagner des séjours, abonnements VIP et expériences libertines exclusives."
    heroImage="/images/concours/six-cles.webp"
    breadcrumb={[{ label: "Concours" }]}
    faq={[
      { question: "Comment participer aux concours Akoky ?", answer: "Pour participer, vous devez être membre inscrit sur Akoky. Chaque concours a ses propres règles de participation détaillées sur sa page dédiée. La plupart sont gratuits et ouverts à tous les membres actifs." },
      { question: "Les concours Akoky sont-ils vraiment gratuits ?", answer: "Oui, tous les concours organisés par Akoky sont 100% gratuits. Aucun achat ou paiement n'est requis pour participer." },
      { question: "Quels sont les lots à gagner ?", answer: "Les lots varient : séjours dans des clubs libertins premium, abonnements VIP Akoky, invitations à des événements privés, coffrets cadeaux et expériences uniques." },
      { question: "Puis-je participer à plusieurs concours simultanément ?", answer: "Oui, vous pouvez participer à autant de concours Akoky que vous le souhaitez." },
    ]}
    schema={{ "@context": "https://schema.org", "@type": "WebPage", name: "Concours AKOKY", url: "https://akoky.com/concours" }}
  >
    <section className="py-16 px-4">
      <div className="container max-w-5xl mx-auto space-y-20">

        {/* ─── CONCOURS EN COURS ─── */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="text-2xl">🔥</span>
            <h2 className="text-3xl font-black text-foreground font-display">Concours en cours</h2>
          </div>

          {/* Le Jeu des Six Clés - Featured */}
          <div className="relative rounded-3xl overflow-hidden border-2 border-primary/40 bg-card group hover:border-primary transition-all">
            <div className="relative aspect-[21/9] overflow-hidden">
              <img
                src="/images/concours/six-cles.webp"
                alt="Le Jeu des Six Clés Akoky 2026"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="bg-green-600 text-white px-4 py-1.5 rounded-full text-sm font-bold">🔥 EN COURS</span>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-primary/80 text-sm font-semibold block mb-2">🎮 Concours Communautaire 2026</span>
                <h3 className="text-2xl md:text-4xl font-black text-white mb-3">🗝️ Le Jeu des Six Clés</h3>
                <p className="text-gray-300 text-sm md:text-base max-w-2xl">
                  Explorez AKOKY, trouvez les <strong className="text-white">6 clés cachées</strong> et gagnez une semaine au <strong className="text-primary">RIAD5 Cap d'Agde</strong>
                </p>
              </div>
            </div>
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-6 mb-6">
                <div className="flex items-center gap-3 bg-primary/10 border border-primary rounded-xl px-5 py-3">
                  <span className="text-3xl">🏆</span>
                  <div>
                    <p className="text-xs text-muted-foreground">Grand Prix</p>
                    <p className="text-xl font-black text-primary">+ 4 500 €</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>🗓️</span>
                  <span>1er mars → 31 décembre 2026</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>👤</span>
                  <span>1 seul gagnant</span>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Partez à la recherche des <strong className="text-foreground">six clés secrètes</strong> dissimulées sur le site et l'application Akoky. Chaque mois, une nouvelle clé apparaît. Le premier participant à trouver les 6 codes et ouvrir le coffre remporte un séjour exceptionnel d'une semaine au RIAD5 – Cap d'Agde.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/fr/concours-six-cles" className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-black font-bold text-lg hover:scale-105 transition-all text-center">
                  Participer au jeu →
                </Link>
                <a href="https://app.akoky.com/register" className="px-8 py-4 rounded-full bg-card border border-border text-foreground font-bold text-lg hover:border-primary/50 transition-all text-center">
                  Créer mon compte gratuit
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ─── PARRAINAGE ─── */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 via-card to-primary/5 border border-primary/20 p-8 md:p-10">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">👑</span>
                <span className="text-primary text-sm font-bold uppercase tracking-wide">Programme Parrainage</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4 font-display">
                Invitez. Gagnez. Profitez.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Invitez <strong className="text-foreground">10 membres</strong> sur Akoky et recevez <strong className="text-primary">6 mois d'abonnement VIP+</strong> offerts. Accès au live streaming, messagerie prioritaire, badge VIP+ et accès aux événements exclusifs.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {["✓ Sans engagement", "✓ Sans abonnement requis", "✓ Récompense automatique"].map((t, i) => (
                  <span key={i} className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full font-medium">{t}</span>
                ))}
              </div>
              <div className="inline-flex items-center gap-3 bg-card border border-primary/30 rounded-full px-6 py-3 mb-6">
                <span className="text-lg font-black text-primary">10 Parrainages = 6 MOIS VIP+</span>
              </div>
              <div className="block">
                <Link to="/fr/parrainage" className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-black font-bold text-lg hover:scale-105 transition-all inline-block">
                  Découvrir le programme →
                </Link>
              </div>
            </div>
            <div className="flex-shrink-0 grid grid-cols-3 gap-3 text-center">
              {[
                { icon: "📢", label: "Parlez d'Akoky" },
                { icon: "📝", label: "Ils s'inscrivent" },
                { icon: "🎁", label: "Vous gagnez" },
              ].map((s, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-4 w-24">
                  <span className="text-2xl block mb-1">{s.icon}</span>
                  <span className="text-[10px] text-muted-foreground font-medium">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── PROCHAINS CONCOURS ─── */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="text-2xl">⏳</span>
            <h2 className="text-3xl font-black text-foreground font-display">Prochains concours</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "📸", title: "Concours Photo de Couple", date: "fin 2026 – début 2027", lot: "Week-end Les Chandelles Paris" },
              { icon: "✍️", title: "Meilleur Témoignage Libertin", date: "2027", lot: "3 abonnements Premium 1 an" },
              { icon: "🌴", title: "Challenge Parrainage Été", date: "Été 2027", lot: "5 séjours clubs libertins Europe" },
            ].map((c, i) => (
              <div key={i} className="p-6 bg-card/50 rounded-2xl border border-border opacity-60">
                <p className="text-muted-foreground/60 text-xs mb-2">{c.date}</p>
                <span className="text-3xl block mb-3">{c.icon}</span>
                <h3 className="text-lg font-bold text-foreground mb-2">{c.title}</h3>
                <p className="text-muted-foreground text-sm"><strong>Lot :</strong> {c.lot}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ─── CONCOURS PASSÉS ─── */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="text-2xl">✅</span>
            <h2 className="text-3xl font-black text-foreground font-display">Concours passés</h2>
          </div>
          <div className="bg-card/50 border border-border rounded-2xl p-8 text-center">
            <p className="text-muted-foreground">Aucun concours terminé pour le moment. Le premier concours AKOKY est en cours !</p>
            <Link to="/fr/concours-six-cles" className="text-primary hover:underline font-medium mt-3 inline-block">
              Voir le concours en cours →
            </Link>
          </div>
        </div>

        <div className="text-center">
          <a href="https://app.akoky.com/register" className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-black font-bold text-lg hover:scale-105 transition-all inline-block">Créer mon compte gratuit</a>
        </div>
      </div>
    </section>
  </ContentPageLayout>
);

export default Concours;
