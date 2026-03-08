import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import SchemaOrg from "@/components/seo/SchemaOrg";
import ClubCard from "@/components/clubs/ClubCard";
import ClubDetailModal from "@/components/clubs/ClubDetailModal";
import { parseEtablissements, getByLang, type Etablissement } from "@/lib/etablissements";

const CITIES = [
  { name: "Milano", icon: "🏙️", desc: "Lusso e design nella capitale della moda", href: "/it/club-libertini-milano" },
  { name: "Roma", icon: "🏛️", desc: "Terme romane e atmosfera eterna", href: "/it/club-libertini-roma" },
  { name: "Torino", icon: "⛰️", desc: "Eleganza sabauda e relax piemontese", href: "/it/club-libertini-torino" },
  { name: "Bologna", icon: "🍝", desc: "Convivialità emiliana e benessere", href: "/it/club-libertini-bologna" },
  { name: "Firenze", icon: "🎨", desc: "Arte rinascimentale e sensualità", href: "/it/club-libertini-firenze" },
  { name: "Napoli", icon: "🌋", desc: "Passione partenopea e terme vulcaniche", href: "/it/club-libertini-napoli" },
];

const FEATURES = [
  { icon: "♨️", title: "Sauna Finlandese", desc: "Calore secco fino a 90°C per una sudorazione profonda e purificante." },
  { icon: "🧖", title: "Hammam / Bagno Turco", desc: "Vapore delicato, aromi di eucalipto e relax muscolare totale." },
  { icon: "🛁", title: "Jacuzzi & Idromassaggio", desc: "Vasche calde con getti massaggianti per sciogliere ogni tensione." },
  { icon: "🏊", title: "Piscina Riscaldata", desc: "Nuotata rilassante in un ambiente intimo e privato." },
  { icon: "🛏️", title: "Cabine Private", desc: "Spazi intimi per momenti a due, con comfort e discrezione totale." },
  { icon: "🍸", title: "Lounge Bar", desc: "Cocktail e bevande in un'area conviviale per socializzare." },
];

const RULES = [
  { emoji: "✅", rule: "Consenso esplicito", detail: "Ogni contatto richiede l'accordo reciproco e verbale." },
  { emoji: "🤫", rule: "Discrezione assoluta", detail: "Nessuna foto, nessun racconto fuori dalla struttura." },
  { emoji: "🚿", rule: "Igiene impeccabile", detail: "Doccia obbligatoria all'arrivo, asciugamani sempre disponibili." },
  { emoji: "🚫", rule: "Rispetto del rifiuto", detail: "Un 'no' è sempre definitivo, senza insistenza." },
  { emoji: "📵", rule: "Telefoni vietati", detail: "Smartphone spenti o negli armadietti per la privacy di tutti." },
  { emoji: "🥂", rule: "Moderazione alcol", detail: "Consumo responsabile per mantenere lucidità e rispetto." },
];

const FAQ = [
  { question: "Cos'è una sauna libertina?", answer: "Una sauna libertina combina impianti benessere (sauna, jacuzzi, hammam) con spazi dedicati agli incontri sensuali tra adulti consententi. L'atmosfera è più rilassata rispetto a un club libertino." },
  { question: "Posso andare in una sauna libertina da solo/a?", answer: "Sì. Le donne sole e le coppie hanno generalmente accesso privilegiato. Per gli uomini soli, le politiche variano: alcuni accettano tutti i giorni, altri solo in determinate fasce orarie." },
  { question: "Quanto costa l'ingresso?", answer: "In media: 30-50€ a coppia, 15-30€ per una donna sola, 50-80€ per un uomo solo. I prezzi possono variare per serate speciali." },
  { question: "Che differenza c'è con un club libertino?", answer: "La sauna libertina privilegia l'atmosfera zen e il benessere (hammam, jacuzzi), mentre il club è più festoso con musica e dress code elegante." },
  { question: "Cosa portare?", answer: "Un asciugamano, ciabatte e un lucchetto per l'armadietto. La maggior parte delle strutture fornisce asciugamani a noleggio o inclusi nel prezzo." },
  { question: "Si può solo usare la spa senza partecipare?", answer: "Assolutamente sì. Siete totalmente liberi di godervi solo gli impianti benessere senza partecipare ad alcuna attività libertina." },
  { question: "Le saune libertine sono sicure?", answer: "Sì. Le strutture verificate su AKOKY rispettano rigide norme di igiene, sicurezza e privacy. Il personale è formato per garantire il benessere di tutti." },
  { question: "Ci sono serate a tema nelle saune?", answer: "Molte saune organizzano serate tematiche: coppie only, lingerie night, couples & ladies, nudiste... Consultate il calendario su AKOKY." },
];

const SauneLibertineIt = () => {
  const [data, setData] = useState<Etablissement[]>([]);
  const [selectedClub, setSelectedClub] = useState<Etablissement | null>(null);
  const [filterCity, setFilterCity] = useState("all");

  useEffect(() => {
    fetch("/data/etablissement.csv")
      .then((r) => r.text())
      .then((csv) => {
        const all = parseEtablissements(csv);
        const it = getByLang(all, "it");
        // Get Italian saunas + clubs with sauna-like types
        setData(
          it.filter(
            (e) =>
              e.country === "Italia" &&
              (e.type.toLowerCase().includes("sauna") ||
                e.tags.some((t) => t.toLowerCase().includes("sauna") || t.toLowerCase().includes("terme") || t.toLowerCase().includes("benessere")))
          )
        );
      })
      .catch(() => {});
  }, []);

  const cities = useMemo(() => [...new Set(data.map((e) => e.city))].sort(), [data]);
  const filtered = useMemo(() => (filterCity === "all" ? data : data.filter((e) => e.city === filterCity)), [data, filterCity]);

  return (
    <>
      <MetaTags
        title="Saune Libertine in Italia 2026 — Le Migliori Strutture | AKOKY"
        description="Scopri le migliori saune libertine in Italia 2026: Milano, Roma, Torino, Bologna. Directory verificato con schede dettagliate, orari, prezzi e recensioni."
        canonical="https://akoky.com/it/saune-libertine"
        lang="it"
      />
      <HreflangTags slug="saune-libertine" />
      <SchemaOrg
        schema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Saune Libertine in Italia 2026",
          url: "https://akoky.com/it/saune-libertine",
          description: "Guida completa alle migliori saune libertine in Italia con directory verificato.",
          inLanguage: "it",
        }}
      />

      <ContentPageLayout
        lang="it"
        title="Saune Libertine in Italia 2026"
        description="Le migliori saune libertine italiane."
        canonical="https://akoky.com/it/saune-libertine"
        heroTitle="Saune Libertine in Italia"
        heroSubtitle="Benessere, relax e sensualità — Le migliori strutture termali libertine italiane nel 2026"
        breadcrumb={[{ label: "Saune Libertine" }]}
        faq={FAQ}
      >
        {/* ── HERO STATS ── */}
        <section className="py-12 px-4">
          <div className="container max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: `${data.length}+`, label: "Saune verificate", icon: "♨️" },
                { value: "6+", label: "Città coperte", icon: "🗺️" },
                { value: "100%", label: "Strutture italiane", icon: "🇮🇹" },
                { value: "4.6★", label: "Voto medio", icon: "⭐" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="relative group p-6 rounded-2xl border border-border bg-card/60 backdrop-blur text-center hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                >
                  <span className="text-3xl block mb-2">{s.icon}</span>
                  <p className="text-2xl md:text-3xl font-black text-primary">{s.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INTRO ── */}
        <section className="py-12 px-4">
          <div className="container max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-black text-foreground font-display">
              Cos'è una Sauna Libertina?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Una <strong className="text-foreground">sauna libertina</strong> è una struttura che combina il meglio del benessere termale — sauna finlandese, hammam, jacuzzi — con spazi dedicati agli incontri sensuali tra adulti. A differenza dei{" "}
              <Link to="/it/club-libertini" className="text-primary hover:underline font-semibold">
                club libertini
              </Link>{" "}
              dall'atmosfera festosa, la sauna offre un ambiente zen, rilassato e orientato al piacere del corpo.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              L'Italia, con la sua millenaria tradizione termale dalle <em>Terme di Caracalla</em> alle sorgenti vulcaniche, è il luogo ideale per vivere questa esperienza sensoriale unica.
            </p>
          </div>
        </section>

        {/* ── ATTREZZATURE ── */}
        <section className="py-16 px-4 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-foreground text-center mb-4 font-display">
              Cosa Troverai in una Sauna Libertina
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Strutture moderne con impianti benessere di alto livello e spazi intimi curati nei minimi dettagli.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {FEATURES.map((f) => (
                <div
                  key={f.title}
                  className="group relative p-6 rounded-2xl border border-border bg-card/50 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
                >
                  <span className="text-4xl block mb-4 group-hover:scale-110 transition-transform">{f.icon}</span>
                  <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SAUNA vs CLUB TABLE ── */}
        <section className="py-16 px-4">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-foreground text-center mb-10 font-display">
              Sauna Libertina vs Club Libertino
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary/10">
                    <th className="p-4 text-left text-foreground font-bold">Criterio</th>
                    <th className="p-4 text-left text-primary font-bold">♨️ Sauna Libertina</th>
                    <th className="p-4 text-left text-muted-foreground font-bold">🎭 Club Libertino</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  {[
                    ["Atmosfera", "Rilassata, zen, meditativa", "Festosa, musica, energia alta"],
                    ["Orari", "Diurni e serali (14h-01h)", "Solo serali (22h-05h)"],
                    ["Benessere", "Sauna, jacuzzi, hammam, piscina", "Generalmente assente"],
                    ["Dress code", "Asciugamano / nudo", "Elegante, sexy, dress code rigoroso"],
                    ["Prezzo medio", "30-50€ coppia", "50-80€ coppia"],
                    ["Ideale per", "Principianti, relax lovers", "Party lovers, habitués"],
                    ["Alcol", "Consumo moderato", "Bar e cocktail animati"],
                  ].map(([criteria, sauna, club]) => (
                    <tr key={criteria} className="border-t border-border hover:bg-primary/5 transition-colors">
                      <td className="p-4 font-semibold text-foreground">{criteria}</td>
                      <td className="p-4">{sauna}</td>
                      <td className="p-4">{club}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── DIRECTORY SAUNE ── */}
        <section className="py-16 px-4 bg-gradient-to-b from-accent/5 to-transparent">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-foreground text-center mb-4 font-display">
              🇮🇹 Le Migliori Saune Libertine in Italia
            </h2>
            <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
              Directory verificato e aggiornato — schede dettagliate con orari, prezzi e recensioni della community.
            </p>

            {/* City filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              <button
                onClick={() => setFilterCity("all")}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all ${
                  filterCity === "all"
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card/50 text-muted-foreground border-border hover:border-primary/40"
                }`}
              >
                Tutte le città ({data.length})
              </button>
              {cities.map((city) => (
                <button
                  key={city}
                  onClick={() => setFilterCity(city)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all ${
                    filterCity === city
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card/50 text-muted-foreground border-border hover:border-primary/40"
                  }`}
                >
                  {city} ({data.filter((e) => e.city === city).length})
                </button>
              ))}
            </div>

            {filtered.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((club) => (
                  <ClubCard key={club.id} club={club} onOpenDetail={setSelectedClub} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-5xl mb-4">♨️</p>
                <p className="text-muted-foreground text-lg">Nessuna sauna trovata per questa città.</p>
                <p className="text-muted-foreground text-sm mt-2">
                  Prova con un'altra città o{" "}
                  <button onClick={() => setFilterCity("all")} className="text-primary hover:underline">
                    mostra tutte
                  </button>
                </p>
              </div>
            )}
          </div>
        </section>

        {/* ── CITY HUBS ── */}
        <section className="py-16 px-4">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-foreground text-center mb-4 font-display">
              Esplora per Città
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              Ogni città italiana offre un'esperienza libertina unica, radicata nella cultura e nella tradizione locale.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CITIES.map((c) => (
                <Link
                  key={c.name}
                  to={c.href}
                  className="group relative p-6 rounded-2xl border border-border bg-card/60 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  <span className="text-4xl block mb-3 group-hover:scale-110 transition-transform">{c.icon}</span>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                    {c.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{c.desc}</p>
                  <span className="inline-flex items-center text-primary text-xs font-semibold mt-3 group-hover:gap-2 transition-all gap-1">
                    Scopri le strutture →
                  </span>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── REGOLE D'ORO ── */}
        <section className="py-16 px-4 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-foreground text-center mb-4 font-display">
              Le Regole d'Oro delle Saune Libertine
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Il rispetto è il fondamento di ogni esperienza libertina. Queste regole garantiscono il benessere di tutti.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {RULES.map((r) => (
                <div
                  key={r.rule}
                  className="group p-5 rounded-2xl border border-border bg-card/50 hover:border-primary/30 transition-all duration-200"
                >
                  <span className="text-2xl mb-2 block">{r.emoji}</span>
                  <h3 className="font-bold text-foreground mb-1">{r.rule}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{r.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONSIGLI PRIMA VISITA ── */}
        <section className="py-16 px-4">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-foreground text-center mb-10 font-display">
              Prima Visita? Ecco Cosa Sapere
            </h2>
            <div className="space-y-6">
              {[
                { step: "1", title: "Scegliete la struttura giusta", desc: "Consultate le schede su AKOKY: leggete le recensioni, verificate gli orari e la politica d'accesso (coppie, single, misto)." },
                { step: "2", title: "Preparatevi con cura", desc: "Portate un asciugamano, ciabatte e un lucchetto. Doccia obbligatoria all'arrivo. Abbigliamento: asciugamano, peignoir o costume." },
                { step: "3", title: "Iniziate con il relax", desc: "Godetevi prima gli impianti benessere. La sauna, l'hammam e il jacuzzi vi aiuteranno a sciogliere la tensione e ad ambientarvi." },
                { step: "4", title: "Nessuna pressione", desc: "Siete liberi di partecipare o meno alle attività libertine. Nessuno vi giudicherà se scegliete di godervi solo la spa." },
                { step: "5", title: "Comunicazione e consenso", desc: "Parlate sempre con il/la partner prima. All'interno, il consenso esplicito è obbligatorio per ogni interazione." },
              ].map((s) => (
                <div key={s.step} className="flex gap-5 items-start group">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center text-primary font-black text-lg group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    {s.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 px-4">
          <div className="container max-w-4xl mx-auto">
            <div className="relative rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-accent/10 p-10 md:p-16 text-center overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.15),transparent_70%)] pointer-events-none" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4 font-display">
                  Trova la Tua Sauna Libertina
                </h2>
                <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                  Iscriviti gratuitamente su AKOKY e accedi al directory completo delle saune verificate in Italia, con recensioni e schede dettagliate.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="https://app.akoky.com/register"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-bold text-lg hover:scale-105 hover:shadow-xl hover:shadow-primary/20 transition-all"
                  >
                    Iscriviti Gratis →
                  </a>
                  <Link
                    to="/it/club-libertini"
                    className="px-8 py-4 rounded-full border border-border bg-card/50 text-foreground font-bold text-lg hover:border-primary/40 hover:scale-105 transition-all"
                  >
                    Vedi tutti i club
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SEE ALSO ── */}
        <section className="py-16 px-4">
          <div className="container max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10 font-display">Scopri Anche</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { href: "/it/club-libertini", icon: "🏛️", title: "Club Libertini", desc: "Directory completo dei club in Italia" },
                { href: "/it/clubbing", icon: "🎭", title: "Guida Clubbing", desc: "Tutto per la tua prima serata" },
                { href: "/it/eventi", icon: "📅", title: "Eventi e Serate", desc: "Calendario degli eventi libertini" },
                { href: "/it/iniziare-libertinismo", icon: "🧭", title: "Come Iniziare", desc: "Guida per i principianti" },
              ].map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  className="group block rounded-2xl border border-border bg-card p-5 hover:border-primary/40 hover:shadow-lg transition-all"
                >
                  <span className="text-3xl mb-2 block">{l.icon}</span>
                  <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors mb-1">{l.title}</h3>
                  <p className="text-xs text-muted-foreground">{l.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Modal */}
        {selectedClub && (
          <ClubDetailModal club={selectedClub} onClose={() => setSelectedClub(null)} />
        )}
      </ContentPageLayout>
    </>
  );
};

export default SauneLibertineIt;
