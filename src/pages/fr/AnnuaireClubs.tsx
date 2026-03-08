import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const AnnuaireClubs = () => (
  <>
    <MetaTags title="Clubs Libertins en Europe — 351 Établissements Vérifiés | AKOKY" description="351 clubs libertins vérifiés en France, Belgique, Suisse : saunas, clubs élégants, gîtes privés. Avis membres, réservation facile." canonical="https://akoky.com/fr/annuaire-clubs-libertins" lang="fr" />
    <HreflangTags slug="annuaire-clubs-libertins" />
    <ContentPageLayout lang="fr" title="Clubs Libertins en Europe — 351 Établissements Vérifiés | AKOKY" description="351 clubs libertins vérifiés en France, Belgique, Suisse." canonical="https://akoky.com/fr/annuaire-clubs-libertins" heroTitle="Annuaire des Clubs Libertins" heroSubtitle="351 établissements vérifiés en France, Belgique, Suisse et Luxembourg — clubs, saunas, gîtes, cinémas."
      heroImage="https://akoky.com/images/club.webp" breadcrumb={[{ label: "Annuaire Clubs" }]}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-10">
            <div className="bg-primary/5 rounded-xl p-4"><p className="text-3xl font-bold text-primary">351</p><p className="text-sm text-muted-foreground">Établissements</p></div>
            <div className="bg-primary/5 rounded-xl p-4"><p className="text-3xl font-bold text-primary">186</p><p className="text-sm text-muted-foreground">France</p></div>
            <div className="bg-primary/5 rounded-xl p-4"><p className="text-3xl font-bold text-primary">96</p><p className="text-sm text-muted-foreground">Belgique</p></div>
            <div className="bg-primary/5 rounded-xl p-4"><p className="text-3xl font-bold text-primary">65</p><p className="text-sm text-muted-foreground">Suisse</p></div>
          </div>
          <h2 className="text-2xl font-bold mt-12 mb-6">🇫🇷 France — 186 établissements</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">113 Avenue</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Sauna discothèque avec hammam</p><p className="text-xs text-muted-foreground">📍 Eysines, Nouvelle-Aquitaine</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Absolu Club Mougins</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club libertin de luxe</p><p className="text-xs text-muted-foreground">📍 Mougins, Provence-Alpes-Côte d&#39;Azur</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">American Cosmograph</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">cinema art et essai à Toulouse proposant privatisations et projections dédiées ([turn1search15])</p><p className="text-xs text-muted-foreground">📍 Toulouse, Occitanie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Aquadisiac Sauna Libertin Mixte</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Sauna libertin mixte à Cannes</p><p className="text-xs text-muted-foreground">📍 Cannes, Provence-Alpes-Côte d&#39;Azur</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Arc en Ciel Club</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club libertin jour et soir à Caen</p><p className="text-xs text-muted-foreground">📍 Caen, Normandie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Aux Plaisirs d’Omer</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700">Gîte libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Love-room et gîte coquin situé dans les marais de Saint-Omer, avec spa privatif et ambiance romantique.</p><p className="text-xs text-muted-foreground">📍 Saint-Omer, Hauts-de-France</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Bain Sibérien Romantique</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Espace bien-être avec baril sauna et spa romantique à Porto-Vecchio, sans site officiel recensé.</p><p className="text-xs text-muted-foreground">📍 Porto-Vecchio, Corse</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Barrel Club</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Bar-club libertin à Metz, réputé pour son ambiance chaleureuse et ses soirées thématiques.</p><p className="text-xs text-muted-foreground">📍 Metz, Grand Est</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Before Sauna Club</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Before Sauna Club, à Sainte-Luce-sur-Loire près de Nantes, est un sauna mixte avec hammam et jacuzzi appréc…</p><p className="text-xs text-muted-foreground">📍 Sainte-Luce-sur-Loire, Pays de la Loire</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Beverly Club Dijon</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club prisé à Dijon avec billards et piste de danse.</p><p className="text-xs text-muted-foreground">📍 Dijon, Bourgogne-Franche-Comté</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Camping Arnaoutchot</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700">Gîte libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Camping naturiste libertin adultes-only en pleine nature.</p><p className="text-xs text-muted-foreground">📍 Quissac, Occitanie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Centre Naturiste René Oltra</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">https://centrenaturiste-oltra.fr</p><p className="text-xs text-muted-foreground">📍 Cap d&#39;Agde, Occitanie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Centre Naturiste René Oltra</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Camping naturiste avec club intégré</p><p className="text-xs text-muted-foreground">📍 Cap dAgde, Occitanie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Chez Marie</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700">Gîte libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Hôtel romantique Cantal avec spa & massages</p><p className="text-xs text-muted-foreground">📍 Paulhac, Auvergne-Rhône-Alpes</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">CHM Montalivet</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700">Gîte libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Centre naturiste historique avec chalets couples/adultes-only en Gironde.</p><p className="text-xs text-muted-foreground">📍 Montalivet, Nouvelle-Aquitaine</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Ciné Atlas Pigalle</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">Cinéma libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Ciné Atlas Pigalle est l’un des derniers cinémas X de Paris, proposant projections adultes et cabines privé…</p><p className="text-xs text-muted-foreground">📍 Paris, Île-de-France</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Ciné Club Bordeaux</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">cinema privé / club discret à Bordeaux cité sur forums locaux (# privé)</p><p className="text-xs text-muted-foreground">📍 Bordeaux, Nouvelle-Aquitaine</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Ciné Opéra Lyon</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">cinema X historique à Lyon avec location de salle privée ([turn1search19])</p><p className="text-xs text-muted-foreground">📍 Lyon, Auvergne-Rhône-Alpes</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Ciné Privé Marseille</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">Cinéma libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Cinéma érotique discret à Marseille, ancien lieu de projection adulte cité sur annuaires régionaux.</p><p className="text-xs text-muted-foreground">📍 Marseille, PACA</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">City Club Colmar</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Sauna libertin mixte à Colmar avec hammam</p><p className="text-xs text-muted-foreground">📍 Colmar, Grand Est</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Clé des Sens Spa</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Gîte/spa romantique avec sauna privatif proche Chartres</p><p className="text-xs text-muted-foreground">📍 Chartres, Centre-Val de Loire</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Clean Club Riom</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club libertin à Riom cité dans les best-lieux coquins.</p><p className="text-xs text-muted-foreground">📍 Riom, Auvergne-Rhône-Alpes</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Club 24 Calvi</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Discothèque adulte citée sur TripAdvisor à Calvi, connue localement pour ses soirées estivales.</p><p className="text-xs text-muted-foreground">📍 Calvi, Corse</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Club 3 Rennes</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Club 3 est un club libertin situé à Rennes, cité dans les guides Petit Futé Bretagne pour son ambiance inti…</p><p className="text-xs text-muted-foreground">📍 Rennes, Bretagne</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Club 360 Spa</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Club 360 Spa est un sauna-club mixte situé à Toulouse, réputé pour son ambiance conviviale et ses installat…</p><p className="text-xs text-muted-foreground">📍 Toulouse, Occitanie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Club 72</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Sauna libertin de 360 m² à Toulouse</p><p className="text-xs text-muted-foreground">📍 Toulouse, Occitanie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Club City Zen Mulhouse</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club + sauna/hammam à Mulhouse</p><p className="text-xs text-muted-foreground">📍 Mulhouse, Grand Est</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Club de l&#39;Étoile</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">Cinéma libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Club de l&#39;Étoile est une salle de cinéma privatisable de 150 places à Paris, au style paquebot Art déco, id…</p><p className="text-xs text-muted-foreground">📍 Paris, Île-de-France</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Club Dorcelstore Lyon</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Discothèque à thème libertin citée sur guides adultes à Lyon.</p><p className="text-xs text-muted-foreground">📍 Lyon, Auvergne-Rhône-Alpes</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Club du Soleil Dijon</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700">Gîte libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club naturiste réservé aux adultes, proche de Dijon, avec chalets et équipements pour naturisme adultes-only.</p><p className="text-xs text-muted-foreground">📍 Dijon, Bourgogne-Franche-Comté</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Club du Soleil Mâcon</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700">Gîte libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Centre naturiste libertin proche de Mâcon, accessible sur réservation pour couples adultes.</p><p className="text-xs text-muted-foreground">📍 Mâcon, Bourgogne-Franche-Comté</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Club Echangiste Bain-de-Bretagne</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club échangiste référencé à Bain-de-Bretagne</p><p className="text-xs text-muted-foreground">📍 Bain-de-Bretagne, Bretagne</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Club Echangiste Bain-de-Bretagne</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club échangiste local avec page Facebook active</p><p className="text-xs text-muted-foreground">📍 Bain-de-Bretagne, Bretagne</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Club Échangiste Nancy</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club échangiste et libertin situé au cœur de Nancy, référence incontournable du Grand Est.</p><p className="text-xs text-muted-foreground">📍 Nancy, Grand Est</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Club Émotion</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club libertin/sauna signalé dans la région de Montpellier — idéal pour détente & rencontres dans une ambiance …</p><p className="text-xs text-muted-foreground">📍 Montpellier, Occitanie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Club Évasion</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club échangiste situé à Nice, repéré sur Yelp comme un lieu de rencontres libertines en centre-ville.</p><p className="text-xs text-muted-foreground">📍 Nice, PACA</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Club Exotique Nice</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Club Exotique est une discothèque libertine à Nice, connue pour ses soirées thématiques et son ambiance fes…</p><p className="text-xs text-muted-foreground">📍 Nice, PACA</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Club intimité Evreux</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club intimiste cité dans guides locaux</p><p className="text-xs text-muted-foreground">📍 Évreux, Normandie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Club La Petite Cheminée</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club-bistrot coquin cité dans le guide Petit Futé Bretagne pour son ambiance conviviale.</p><p className="text-xs text-muted-foreground">📍 Bain-de-Bretagne, Bretagne</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Club Le Bilitis</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Nom historique &#39;Le Bilitis&#39; cité dans avis en ligne</p><p className="text-xs text-muted-foreground">📍 Périgueux, Nouvelle-Aquitaine</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Club Le Bilitis</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club libertin historique de Plounérin (Côtes-d’Armor) réouvert fin 2024.</p><p className="text-xs text-muted-foreground">📍 Plounérin, Bretagne</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Club le C3</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club libertin à Plérin</p><p className="text-xs text-muted-foreground">📍 Plérin, Bretagne</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Club Libertin Ajaccio</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club libertin à Ajaccio cité dans les annuaires locaux et forums spécialisés, sans site officiel recensé.</p><p className="text-xs text-muted-foreground">📍 Ajaccio, Corse</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Club Libertin Caen</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club libertin à Caen mentionné sur médias locaux</p><p className="text-xs text-muted-foreground">📍 Caen, Normandie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Club Libertin City Zen Mulhouse</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club + sauna/hammam à Mulhouse</p><p className="text-xs text-muted-foreground">📍 Mulhouse, Grand Est</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Club Libertin Nantes</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club libertin référencé à Nantes</p><p className="text-xs text-muted-foreground">📍 Nantes, Pays de la Loire</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Club Moloko</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Club Moloko est un bar-club libertin à Saint-Étienne, reconnu dans les forums pour ses soirées à thème et s…</p><p className="text-xs text-muted-foreground">📍 Saint-Étienne, Auvergne-Rhône-Alpes</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Club Moloko</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club libertin & bar à Saint-Étienne mentionné sur forums locaux.</p><p className="text-xs text-muted-foreground">📍 Saint-Étienne, Auvergne-Rhône-Alpes</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Club Nature Chartres</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club intimiste cité sur guides régionaux</p><p className="text-xs text-muted-foreground">📍 Chartres, Centre-Val de Loire</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Club Plaisir Rouen</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club libertin cité localement sur forums Rouen.</p><p className="text-xs text-muted-foreground">📍 Rouen, Normandie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Club Plaisir Strasbourg</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club libertin et échangiste situé au cœur de Strasbourg, réputé pour ses soirées élégantes et conviviales.</p><p className="text-xs text-muted-foreground">📍 Strasbourg, Grand Est</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Club Premium Marseille</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club libertin haut de gamme cité sur Petit Futé</p><p className="text-xs text-muted-foreground">📍 Marseille, PACA</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Club Privé Avignon</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club libertin intimiste à Avignon cité localement.</p><p className="text-xs text-muted-foreground">📍 Avignon, PACA</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Club Victoria</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club libertin privé à Toulouse, cité localement et apprécié pour son ambiance confidentielle.</p><p className="text-xs text-muted-foreground">📍 Toulouse, Occitanie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Divine Alcôve</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Restaurant-bar cocktail libertin chic à Paris 6e</p><p className="text-xs text-muted-foreground">📍 Paris, Île-de-France</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Domaine Les 2 Mondes</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700">Gîte libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Domaine naturiste et gîtes spa privatifs près du lac d’Aydat, au cœur du massif du Sancy.</p><p className="text-xs text-muted-foreground">📍 Aydat, Auvergne-Rhône-Alpes</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Domaine Monts de Bussy</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700">Gîte libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Domaine naturiste et gîte libertin en Haute-Vienne, référencé dans les guides spécialisés.</p><p className="text-xs text-muted-foreground">📍 Eymoutiers, Nouvelle-Aquitaine</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Elite Sauna Tours</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Sauna réservé couples/mixte à Tours</p><p className="text-xs text-muted-foreground">📍 Tours, Centre-Val de Loire</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Enjoy Club Corte</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">L’Enjoy Club à Corte (discothèque adulte) avec présence sur Facebook.</p><p className="text-xs text-muted-foreground">📍 Corte, Corse</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Eros Lounge Evreux</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Lounge libertin mentionné dans articles locaux</p><p className="text-xs text-muted-foreground">📍 Évreux, Normandie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Eroshop Clermont</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-orange-100 text-orange-700">Sexshop libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Sex-shop à Clermont cité dans un top lieux adultes local.</p><p className="text-xs text-muted-foreground">📍 Clermont-Ferrand, Auvergne-Rhône-Alpes</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Fany&#39;s Club Privé</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Fany&#39;s Club Privé est un club libertin à Bastia, connu pour ses soirées festives et son ambiance chic, avec…</p><p className="text-xs text-muted-foreground">📍 Bastia, Corse</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Histoire d’Eau</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Histoire d’Eau est un club libertin emblématique de Lyon, combinant sauna, hammam et projections privées dans …</p><p className="text-xs text-muted-foreground">📍 Lyon, Auvergne-Rhône-Alpes</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Hôtel Riad5 Cap dAgde</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700">Gîte libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Studio/hôtel love-room réservé aux adultes dans village naturiste</p><p className="text-xs text-muted-foreground">📍 Cap dAgde, Occitanie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">L&#39;Angelys Club-Sauna</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club-sauna mixte reconnu en Charente-Maritime, espace convivial et détente libertine.</p><p className="text-xs text-muted-foreground">📍 Jonzac, Nouvelle-Aquitaine</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">L’Elyx Club Libertin</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">L’Elyx est une discothèque et club libertin à Cournon-d’Auvergne, avec espace sauna et balnéo, réputé pour ses…</p><p className="text-xs text-muted-foreground">📍 Cournon-d’Auvergne, Auvergne-Rhône-Alpes</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">L&#39;Exotika Rouen</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Sauna libertin avec hammam</p><p className="text-xs text-muted-foreground">📍 Rouen, Normandie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">La Chaloupe</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club libertin avec piste de danse</p><p className="text-xs text-muted-foreground">📍 Bordeaux, Nouvelle-Aquitaine</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">La Chrysalide</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club libertin de grande taille à La Seyne-sur-Mer</p><p className="text-xs text-muted-foreground">📍 La Seyne-sur-Mer, Provence-Alpes-Côte d&#39;Azur</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">La Demeure Libertine</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">La Demeure Libertine est un gîte haut de gamme avec spa et sauna privatif en Bretagne, conçu pour les couples …</p><p className="text-xs text-muted-foreground">📍 Sainte-Colombe, Bretagne</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">La Détente club privé</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club privé de proximité avec soirées à thèmes</p><p className="text-xs text-muted-foreground">📍 Heudicourt, Hauts-de-France</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">La Lanterne Club</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Nouveau club libertin de prestige à Aix-en-Provence, au cadre raffiné et à l’ambiance sensuelle.</p><p className="text-xs text-muted-foreground">📍 Aix-en-Provence, Provence-Alpes-Côte d’Azur</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">La Maison des Plaisirs</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">La Maison des Plaisirs est une love-room romantique avec spa privatif, située près d’Auxerre dans l’Yonne.</p><p className="text-xs text-muted-foreground">📍 Auxerre, Bourgogne-Franche-Comté</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">La Récréation Sauna</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Sauna-hammam libertin mixte</p><p className="text-xs text-muted-foreground">📍 Boulogne-Billancourt, Île-de-France</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">LAmbassade Club Libertin</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club libertin proche Tours</p><p className="text-xs text-muted-foreground">📍 Tours, Centre-Val de Loire</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">LAngelus Club Privé</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club +400 m²</p><p className="text-xs text-muted-foreground">📍 Mélun, Île-de-France</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">LAtlantis</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club naturiste/sauna avec hammam</p><p className="text-xs text-muted-foreground">📍 Périgueux, Nouvelle-Aquitaine</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Le 16</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club avec discothèque</p><p className="text-xs text-muted-foreground">📍 Creysse, Nouvelle-Aquitaine</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Le 33 by Ozen</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Sauna libertin à Rixheim (Alsace)</p><p className="text-xs text-muted-foreground">📍 Rixheim, Grand Est</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Le 7 Club</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Petit club privé à Paris, cité sur forums libertins — ambiance intime et confidentielle.</p><p className="text-xs text-muted-foreground">📍 Paris, Île-de-France</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Le Bilitis</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club libertin mythique en Côtes-dArmor</p><p className="text-xs text-muted-foreground">📍 Plounérin, Bretagne</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Le Cap Club Privé</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club libertin à Monéteau (près d’Auxerre) cité sur plusieurs plateformes spécialisées.</p><p className="text-xs text-muted-foreground">📍 Monéteau, Bourgogne-Franche-Comté</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Le Cent Douze</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club libertin à Lille avec sauna</p><p className="text-xs text-muted-foreground">📍 Lille, Hauts-de-France</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Le Cercle</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Sauna libertin privé situé à Marseille, ambiance élégante et confidentielle.</p><p className="text-xs text-muted-foreground">📍 Marseille, Provence-Alpes-Côte d’Azur</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Le Cercle</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Cercle est un sauna libertin à Nice (~800 m²), connu pour ses soirées thématiques, son hammam, jacuzzi et a…</p><p className="text-xs text-muted-foreground">📍 Nice, PACA</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Le Clandestin Arras</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Suites avec spa privatif</p><p className="text-xs text-muted-foreground">📍 Arras, Hauts-de-France</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Le Clandestin Cambrai</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Suite spa privatif à proximité de Cambrai</p><p className="text-xs text-muted-foreground">📍 Cambrai, Hauts-de-France</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Le Club X Metz</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club libertin réputé de Metz, connu pour son ambiance conviviale et ses soirées thématiques.</p><p className="text-xs text-muted-foreground">📍 Metz, Grand Est</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Le Container</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Sauna-club avec bar</p><p className="text-xs text-muted-foreground">📍 Bordeaux, Nouvelle-Aquitaine</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Le Declyc’x</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club échangiste recensé par guides pour Bain-de-Bretagne.</p><p className="text-xs text-muted-foreground">📍 Bain-de-Bretagne, Bretagne</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Le Délice</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club-discothèque libertin avec espace sauna et hammam.</p><p className="text-xs text-muted-foreground">📍 Bergerac, Nouvelle-Aquitaine</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Le Félibre Club</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club échangiste emblématique du centre de Toulouse, ambiance intime et conviviale.</p><p className="text-xs text-muted-foreground">📍 Toulouse, Occitanie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Le Jardin Érotique</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club/discothèque mentionnée dans guides Caen.</p><p className="text-xs text-muted-foreground">📍 Caen, Normandie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Le Korosko</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Korosko est un sauna libertin gay/mixte à Lorient, avec hammam, jacuzzi et soirées thématiques dans une amb…</p><p className="text-xs text-muted-foreground">📍 Lorient, Bretagne</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Le Labyrinthe</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Labyrinthe est un club-sauna libertin situé à Marly (près de Metz/Nancy) : ambiance échangiste avec sauna, …</p><p className="text-xs text-muted-foreground">📍 Marly, Grand Est</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Le Labyrinthe Marly</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Bar-club sauna libertin mixte situé à Marly, proche de Metz, ambiance relax et festive.</p><p className="text-xs text-muted-foreground">📍 Marly, Grand Est</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Le Libertio Club</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club libertin réputé à Toulouse, mentionné par La Dépêche pour son ambiance conviviale et élégante.</p><p className="text-xs text-muted-foreground">📍 Toulouse, Occitanie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Le Liberty Station</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Liberty Station est un club libertin et spa avec piscine, hammam et buffet, situé à Prinquiau près de Nante…</p><p className="text-xs text-muted-foreground">📍 Prinquiau, Pays de la Loire</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Le Libertys</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club-discothèque avec terrasse naturiste dans les Landes ([francesudouest.com](https://www.francesudouest.com/…</p><p className="text-xs text-muted-foreground">📍 Bénesse-Maremne, Nouvelle-Aquitaine</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Le Manoir de Sainte-Colombe</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Maison dhôtes coquine et libertine près de Rennes</p><p className="text-xs text-muted-foreground">📍 Sainte-Colombe, Bretagne</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Le Mask</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club réservé aux couples</p><p className="text-xs text-muted-foreground">📍 Paris, Île-de-France</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Le Paradisio Club</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Paradisio Club est un club libertin connu de la région de Montpellier, cité sur Instagram et forums spécial…</p><p className="text-xs text-muted-foreground">📍 Montpellier, Occitanie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Le Passage du Désir Nantes</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club libertin cité dans guides régionaux à Nantes.</p><p className="text-xs text-muted-foreground">📍 Nantes, Pays de la Loire</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Le Phénix</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Phénix est un club libertin convivial situé à Coulounieix-Chamiers, près de Périgueux. L’établissement disp…</p><p className="text-xs text-muted-foreground">📍 Coulounieix-Chamiers, Nouvelle-Aquitaine</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Le Privilège</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Futur club libertin et discothèque échangiste à Bar-le-Duc, ouverture annoncée pour 2025.</p><p className="text-xs text-muted-foreground">📍 Bar-le-Duc, Grand Est</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Le QG de Monbadon</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club/pub privé à Bordeaux</p><p className="text-xs text-muted-foreground">📍 Bordeaux, Nouvelle-Aquitaine</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Le RDV Club Rouen</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club libertin cosy à Rouen</p><p className="text-xs text-muted-foreground">📍 Rouen, Normandie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Le Saumur Tranquille (L’Incognito)</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Love-room/apartment romantique avec jacuzzi à Saumur.</p><p className="text-xs text-muted-foreground">📍 Saumur, Pays de la Loire</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Le Sauna Club Nancy</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Sauna libertin mixte situé au cœur de Nancy, apprécié pour son ambiance relaxante et conviviale.</p><p className="text-xs text-muted-foreground">📍 Nancy, Grand Est</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Le Show Pub Club</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Pub libertin toulousain mêlant ambiance festive et rencontres coquines, mentionné dans la presse locale.</p><p className="text-xs text-muted-foreground">📍 Toulouse, Occitanie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Le Sun Libertin</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Sun Libertin est un sauna-club avec piscine, jacuzzi et hammam à Lyon, reconnu comme une référence du milie…</p><p className="text-xs text-muted-foreground">📍 Lyon, Auvergne-Rhône-Alpes</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Le Sun Libertin Lyon</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Sauna libertin connu à Lyon</p><p className="text-xs text-muted-foreground">📍 Lyon, Auvergne-Rhône-Alpes</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Le Tantra Cap dAgde</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Historique club libertin du Cap dAgde</p><p className="text-xs text-muted-foreground">📍 Cap d&#39;Agde, Occitanie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Le Tropic Club</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club privé afro-caraïbes en Charente.</p><p className="text-xs text-muted-foreground">📍 Angoulême, Nouvelle-Aquitaine</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Le Vahiné Club Privé</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Grand club libertin et échangiste à Marseille</p><p className="text-xs text-muted-foreground">📍 Marseille, Provence-Alpes-Côte d&#39;Azur</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">LEclipse (Love Spa)</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Love Spa réservé couples et femmes seules</p><p className="text-xs text-muted-foreground">📍 Paris, Île-de-France</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">LEden Lille</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">http://www.eden-lille.fr</p><p className="text-xs text-muted-foreground">📍 Lille, Hauts-de-France</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">LÉlite Club</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club échangiste cité Petit Futé Normandie</p><p className="text-xs text-muted-foreground">📍 Caen, Normandie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">LELIXYR Club Libertin</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club + hôtel en Charente-Maritime</p><p className="text-xs text-muted-foreground">📍 Sainte-Savine, Nouvelle-Aquitaine</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">LEntre-Deux</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club Libertin à Beauvais</p><p className="text-xs text-muted-foreground">📍 Beauvais, Hauts-de-France</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Les Bains de Saint-Aubin</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Les Bains de Saint-Aubin est un sauna mixte privé à Toulouse, avec hammam, jacuzzi et salons câlins, dans une …</p><p className="text-xs text-muted-foreground">📍 Toulouse, Occitanie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Les Béthunoises</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Chambres avec jacuzzi et sauna japonais</p><p className="text-xs text-muted-foreground">📍 Béthune, Hauts-de-France</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Les Chandelles</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club libertin gastronomique et raffiné avec restaurant</p><p className="text-xs text-muted-foreground">📍 Paris, Île-de-France</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">LEscale Tours</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Bar/club gay mixte à Tours cité localement.</p><p className="text-xs text-muted-foreground">📍 Tours, Centre-Val de Loire</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">LExotika Rouen</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club sauna libertin à Rouen avec hammam et jacuzzi</p><p className="text-xs text-muted-foreground">📍 Rouen, Normandie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Libido Spa Tours</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Spa privatif couples avec sauna à Tours</p><p className="text-xs text-muted-foreground">📍 Tours, Centre-Val de Loire</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Love Cabine Marseille</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-orange-100 text-orange-700">Sexshop libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Sex-shop avec cabines vidéo en projection mentionné sur Yelp Marseille ([turn1search2])</p><p className="text-xs text-muted-foreground">📍 Marseille, PACA</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Love Shop 283</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-orange-100 text-orange-700">Sexshop libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Love Shop 283 est un sex-shop emblématique de Paris proposant plus de 10 000 films et cabines privées.</p><p className="text-xs text-muted-foreground">📍 Paris, Île-de-France</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Love Shop 283</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-orange-100 text-orange-700">Sexshop libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Love Shop 283 est un sex-shop emblématique de Paris, ouvert tard chaque jour, proposant plus de 10 000 film…</p><p className="text-xs text-muted-foreground">📍 Paris, Île-de-France</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">LoveAppart21</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Love room spa à Dijon via plateforme, appartement haut-de gamme pour couples.</p><p className="text-xs text-muted-foreground">📍 Dijon, Bourgogne-Franche-Comté</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Mima Club Échangiste</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club échangiste de Bar-le-Duc cité dans la presse régionale, connu pour son ambiance intime et conviviale.</p><p className="text-xs text-muted-foreground">📍 Bar-le-Duc, Grand Est</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">MK2 Grand Palais</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">cinema privatisable Grand Palais à Paris (événements clichés et projections sur mesure) ([turn1search18])</p><p className="text-xs text-muted-foreground">📍 Paris, Île-de-France</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Nancy Club Privé</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club privé et discret à Nancy, évoqué dans la presse locale pour son cadre feutré et sélectif.</p><p className="text-xs text-muted-foreground">📍 Nancy, Grand Est</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Oasis Club Sauna</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Sauna-libertin à Lyon, inclusif, avec hammam, jacuzzi et soirées mixtes.</p><p className="text-xs text-muted-foreground">📍 Lyon, Auvergne-Rhône-Alpes</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">ODBX Club et Sauna Libertin Mixte</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">L’ODBX est un club libertin et sauna mixte de référence à Dole, reconnu pour ses soirées thématiques et son es…</p><p className="text-xs text-muted-foreground">📍 Dole, Bourgogne-Franche-Comté</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">ODBXY Club Dole</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club libertin à Dole cité dans la presse régionale et annuaires spécialisés.</p><p className="text-xs text-muted-foreground">📍 Dole, Bourgogne-Franche-Comté</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Odyssée Club</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club libertin avec salle de danse</p><p className="text-xs text-muted-foreground">📍 Bordeaux, Nouvelle-Aquitaine</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">One Sauna Montpellier</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">One Sauna à Montpellier est un sauna libertin gay/mixte, avec hammam et back-room — pour amateurs de détente e…</p><p className="text-xs text-muted-foreground">📍 Montpellier, Occitanie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">ParadX Cannes</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-orange-100 text-orange-700">Sexshop libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Sex-shop & projection privée à Cannes Festival ([turn2search4])</p><p className="text-xs text-muted-foreground">📍 Cannes, PACA</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Paris Film Cabine</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-orange-100 text-orange-700">Sexshop libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Sex-shop avec espaces vidéo privés cité sur Yelp Paris et forums libertins franciliens.</p><p className="text-xs text-muted-foreground">📍 Paris, Île-de-France</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Passage du Désir</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-orange-100 text-orange-700">Sexshop libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Passage du Désir est une boutique-concept (et non un club) à Montpellier, dédiée aux accessoires et intimité d…</p><p className="text-xs text-muted-foreground">📍 Montpellier, Occitanie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Passage du Désir</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club libertin cité dans Petit Futé Normandie</p><p className="text-xs text-muted-foreground">📍 Rouen, Normandie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Pent X Club</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club mentionné sur Yelp parmi les adresses adultes à Lyon.</p><p className="text-xs text-muted-foreground">📍 Lyon, Auvergne-Rhône-Alpes</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Petite Cheminée</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Petit club libertin situé entre La Baule et Pornichet, mentionné sur plusieurs forums régionaux.</p><p className="text-xs text-muted-foreground">📍 La Baule, Pays de la Loire</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Red Sauna Uckange</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Grand sauna gay/mixte en Moselle</p><p className="text-xs text-muted-foreground">📍 Uckange, Grand Est</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Sauna 51</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Sauna libertin mixte près de Nancy</p><p className="text-xs text-muted-foreground">📍 Laxou, Grand Est</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Sauna Bellecour</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Sauna cité parmi les meilleurs à Lyon sur Yelp.</p><p className="text-xs text-muted-foreground">📍 Lyon, Auvergne-Rhône-Alpes</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Sauna Cabriès</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Sauna mixte cité dans annuaires régionaux.</p><p className="text-xs text-muted-foreground">📍 Cabriès, PACA</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Sauna Club Bellecour</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Sauna Club Bellecour est un sauna gay et mixte historique à Lyon, avec cabines vidéos, hammam et espace dét…</p><p className="text-xs text-muted-foreground">📍 Lyon, Auvergne-Rhône-Alpes</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Sauna Club des Terreaux</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Sauna libertin mixte à Lyon</p><p className="text-xs text-muted-foreground">📍 Lyon, Auvergne-Rhône-Alpes</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Sauna Club Métropole</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club-sauna avec jacuzzi</p><p className="text-xs text-muted-foreground">📍 Bordeaux, Nouvelle-Aquitaine</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Sauna Coco Tours</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Sauna mixte discret proche Tours</p><p className="text-xs text-muted-foreground">📍 Tours, Centre-Val de Loire</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Sauna du Château</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">(aucun site officiel trouvé)</p><p className="text-xs text-muted-foreground">📍 Nice, Provence-Alpes-Côte d&#39;Azur</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Sauna Dunkler Toulouse</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Sauna club privé à Toulouse cité dans guides.</p><p className="text-xs text-muted-foreground">📍 Toulouse, Occitanie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Sauna Equateur</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">https://www.sauna-equateur.net</p><p className="text-xs text-muted-foreground">📍 Strasbourg, Grand Est</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Sauna Étoile</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Sauna privé / club libéré à Lyon, mentionné via annuaire local pour rencontres et détente.</p><p className="text-xs text-muted-foreground">📍 Lyon, Auvergne-Rhône-Alpes</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Sauna Le Bellecour</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Sauna Le Bellecour est un sauna gay et mixte historique de Lyon, apprécié pour son ambiance conviviale et s…</p><p className="text-xs text-muted-foreground">📍 Lyon, Auvergne-Rhône-Alpes</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Sauna Le Bossuet</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Un des plus anciens saunas libertins de Dijon, avec hammam, jacuzzi, sauna et espace mixte/gay.</p><p className="text-xs text-muted-foreground">📍 Dijon, Bourgogne-Franche-Comté</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Sauna Le Candy</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Sauna libertin mixte au centre de Bordeaux</p><p className="text-xs text-muted-foreground">📍 Bordeaux, Nouvelle-Aquitaine</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Sauna Le Cercle</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">https://www.fresha.com/lvp/sauna-le-cercle-avenue-clement-ader-nice-PVqqXJ</p><p className="text-xs text-muted-foreground">📍 Nice, Provence-Alpes-Côte d&#39;Azur</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Sauna Le Différent</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Sauna libertin avec jacuzzi</p><p className="text-xs text-muted-foreground">📍 Bordeaux, Nouvelle-Aquitaine</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Sauna Le Lotus</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Sauna/hammam libertin à Reims ouvert à couples</p><p className="text-xs text-muted-foreground">📍 Reims, Grand Est</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Sauna Le Rive Droite</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Sauna gay/mixte avec hammam</p><p className="text-xs text-muted-foreground">📍 Amfreville-la-Mivoie, Normandie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Sauna Le Rive Droite</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Sauna libertin/hommes à Rouen proche Caen</p><p className="text-xs text-muted-foreground">📍 Amfreville-la-Mivoie, Normandie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Sauna Le Saint</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Sauna gay/mixte avec hammam</p><p className="text-xs text-muted-foreground">📍 Bordeaux, Nouvelle-Aquitaine</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Sauna Les Salins</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Sauna Les Salins est un espace gay-friendly et mixte à Clermont-Ferrand, avec hammam et zones détente, cité…</p><p className="text-xs text-muted-foreground">📍 Clermont-Ferrand, Auvergne-Rhône-Alpes</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Sauna Nikki Club</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Sauna mixte avec hammam</p><p className="text-xs text-muted-foreground">📍 Bordeaux, Nouvelle-Aquitaine</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Sauna Puy-de-Dôme</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Sauna mixte cité dans annuaires locaux.</p><p className="text-xs text-muted-foreground">📍 Clermont-Ferrand, Auvergne-Rhône-Alpes</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Sauna Salvator</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Sauna libertin mixte à Marseille</p><p className="text-xs text-muted-foreground">📍 Marseille, Provence-Alpes-Côte d&#39;Azur</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Sauna Secret Caen</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Petit sauna privé mixte situé près de Caen, cité sur forums libertins régionaux.</p><p className="text-xs text-muted-foreground">📍 Caen, Normandie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Sauna Secret Montpellier</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Sauna Secret est un petit sauna libertin discret à Montpellier, mentionné dans plusieurs forums et annuaire…</p><p className="text-xs text-muted-foreground">📍 Montpellier, Occitanie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Spa Gîte normand</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Hôtel spa naturiste libertin avec sauna</p><p className="text-xs text-muted-foreground">📍 Condé-en-Normandie, Normandie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Spa Hôtel Libertine</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700">Gîte libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Apparthôtel réservé aux adultes à Paris, équipé d’un jacuzzi et d’un sauna pour des séjours coquins en toute d…</p><p className="text-xs text-muted-foreground">📍 Paris, Île-de-France</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Spa Secret Normandie</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Spa privatif romantique sauna à Hermanville-sur-Mer.</p><p className="text-xs text-muted-foreground">📍 Hermanville-sur-Mer, Normandie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Stars Club</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Stars Club à Nice est une discothèque/club libertin repéré via Yelp — ambiance festive et clientèle curieuse.</p><p className="text-xs text-muted-foreground">📍 Nice, PACA</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Studio Club Colmar</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Petit club libertin urbain de Colmar, ambiance intime et sélective.</p><p className="text-xs text-muted-foreground">📍 Colmar, Grand Est</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Sweet & Co Orléans</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Bar cocktail LGBT/club cité à Orléans.</p><p className="text-xs text-muted-foreground">📍 Orléans, Centre-Val de Loire</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Sweety Loft</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Loft romantique avec spa/jacuzzi privatif</p><p className="text-xs text-muted-foreground">📍 Friville-Escarbotin, Hauts-de-France</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Taboo Club Discothèque</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Discothèque libertine emblématique de Toulouse, connue pour son ambiance festive et raffinée.</p><p className="text-xs text-muted-foreground">📍 Toulouse, Occitanie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Théâtre ChoChotte</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">Cinéma libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Théâtre ChoChotte est une salle de spectacles érotiques historique à Paris, proposant des shows raffinés et…</p><p className="text-xs text-muted-foreground">📍 Paris, Île-de-France</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Toulouse Film Cabine</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-orange-100 text-orange-700">Sexshop libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Boutique érotique avec cabines vidéo à Toulouse, mentionnée dans les annuaires spécialisés adultes.</p><p className="text-xs text-muted-foreground">📍 Toulouse, Occitanie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Vertige X</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Discothèque libertine lyonnaise repérée sur Yelp.</p><p className="text-xs text-muted-foreground">📍 Lyon, Auvergne-Rhône-Alpes</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Villa Éros La Seyne</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">La Villa Éros est une maison libertine privée située à La Seyne-sur-Mer, réputée pour ses soirées intimistes e…</p><p className="text-xs text-muted-foreground">📍 La Seyne-sur-Mer, PACA</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Villa Mandragore</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700">Gîte libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Gîte libertin naturiste haut de gamme sur île du Levant</p><p className="text-xs text-muted-foreground">📍 Hyères, PACA</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Vous Monsieur | Vous Madame</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-orange-100 text-orange-700">Sexshop libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Concept store érotique haut de gamme situé à Paris, combinant boutique, expositions, soirées privées et projec…</p><p className="text-xs text-muted-foreground">📍 Paris, Île-de-France</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Vous Monsieur | Vous Madame</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-orange-100 text-orange-700">Sexshop libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Concept store érotique haut de gamme à Paris, combinant boutique, galeries et projections privées dans une atm…</p><p className="text-xs text-muted-foreground">📍 Paris, Île-de-France</p>
            </div>
          </div>
          <h2 className="text-2xl font-bold mt-12 mb-6">🇧🇪 Belgique — 97 établissements</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Au Cœur des Désirs</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700">Gîte libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Suite romantique et love-room associée au club Le Frisson, à Florenville. Ambiance raffinée avec jacuzzi, jeux…</p><p className="text-xs text-muted-foreground">📍 Florenville, Wallonie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">B&B Ilmatar</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700">Gîte libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Naturist B&B avec spa privé et sauna, situé à Deerlijk en Flandre occidentale, mentionné sur TripAdvisor.</p><p className="text-xs text-muted-foreground">📍 West Flanders, Flandre occidentale</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Camping Athena Le Perron</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700">Gîte libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Grand camping naturiste adultes-only avec spa & sauna au cœur de Waimes (turn1search5)</p><p className="text-xs text-muted-foreground">📍 Waimes, Wallonie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Charnel Club Tournai</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club libertin moderne situé à Tournai, reconnu pour ses soirées à thème et son ambiance chic et sensuelle.</p><p className="text-xs text-muted-foreground">📍 Tournai, Wallonie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Ciné Paris (fermé)</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">Cinéma libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Ciné Paris était un petit cinéma porno emblématique situé sur le boulevard Adolphe Max à Bruxelles. Fréquen…</p><p className="text-xs text-muted-foreground">📍 Bruxelles, Bruxelles-Capitale</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Cinéma Midi-Minuit</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">Cinéma libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Cinéma Midi-Minuit à Liège est un complexe X historique proposant projections pour adultes et shows privés.…</p><p className="text-xs text-muted-foreground">📍 Liège, Wallonie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Cinéma Nova</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">Cinéma libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Cinéma Nova est un espace culturel indépendant à Bruxelles dédié au cinéma alternatif et engagé. Il accueil…</p><p className="text-xs text-muted-foreground">📍 Bruxelles, Bruxelles-Capitale</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Cinéma Palace</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">Cinéma libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Cinéma Palace à Bruxelles est une salle emblématique proposant une programmation variée, entre films d’aute…</p><p className="text-xs text-muted-foreground">📍 Bruxelles, Bruxelles-Capitale</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Cinéma Palace Privatisation</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">Cinéma libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Cinéma Palace à Bruxelles met à disposition ses salles, de 60 à 373 places, pour des projections privées, a…</p><p className="text-xs text-muted-foreground">📍 Bruxelles, Bruxelles-Capitale</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Cinéma Vendôme</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">Cinéma libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Cinéma Vendôme, situé dans le quartier de Matongé à Bruxelles, est un cinéma d’art et d’essai indépendant. …</p><p className="text-xs text-muted-foreground">📍 Bruxelles, Bruxelles-Capitale</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Cinematek Privé</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">Cinéma libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">La Cinematek à Bruxelles propose des salles de projection privées au sein du Palais des Beaux-Arts. Idéale pou…</p><p className="text-xs text-muted-foreground">📍 Bruxelles, Bruxelles-Capitale</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Club 3000 (fermé)</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Club 3000 était un ancien sauna-club de Bruxelles, réparti sur six étages avec cinéma X, darkrooms et bar. …</p><p className="text-xs text-muted-foreground">📍 Bruxelles, Bruxelles-Capitale</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Club 69 Gent</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club urbain libertin à Gand, ouvert d’esprit et moderne, avec plusieurs espaces privés et dancefloor jusqu’à l…</p><p className="text-xs text-muted-foreground">📍 Gent, Flandre</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Club Adonis Gent</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club échangiste et sauna libertin à Gand, réputé pour son accueil haut de gamme et ses soirées à thème variées…</p><p className="text-xs text-muted-foreground">📍 Gent, Flandre</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Club Eroxx</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Club Eroxx à Anvers est l’un des plus grands clubs de Belgique, réputé pour ses soirées à thème et son ambi…</p><p className="text-xs text-muted-foreground">📍 Anvers, Flandre</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Club Eroxx</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Club Eroxx à Anvers est un immense espace libertin réputé pour ses soirées à thème et son atmosphère torrid…</p><p className="text-xs text-muted-foreground">📍 Anvers, Flandre</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Club Lautrec</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club libertin raffiné et sélectif à Bruxelles, réputé pour son cadre élégant et ses soirées haut de gamme.</p><p className="text-xs text-muted-foreground">📍 Bruxelles, Bruxelles-Capitale</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Club Lautrec</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Club Lautrec est un établissement libertin haut de gamme situé à Nossegem, près de Bruxelles. Raffiné et él…</p><p className="text-xs text-muted-foreground">📍 Nossegem, Flandre</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Club Lautrec</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Club Lautrec, situé à Nossegem près de Bruxelles, est un club libertin raffiné et élégant. Son décor feutré…</p><p className="text-xs text-muted-foreground">📍 Nossegem, Flandre</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Eros Center Bruxelles</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-orange-100 text-orange-700">Sexshop libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">L’Eros Center est un espace libertin discret combinant cabines vidéo, boutique érotique et coin détente. Fréqu…</p><p className="text-xs text-muted-foreground">📍 Bruxelles, Bruxelles-Capitale</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Evasion Club</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">L’Evasion Club à Liège est un bar libertin élégant combinant espace lounge, piste de danse et zones câlines. T…</p><p className="text-xs text-muted-foreground">📍 Liège, Wallonie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Fuse Club</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club électronique emblématique de Bruxelles, connu pour ses soirées libertines et pour accueillir la célèbre L…</p><p className="text-xs text-muted-foreground">📍 Bruxelles, Bruxelles-Capitale</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Gîte du Bois Dormant</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700">Gîte libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Charmant gîte romantique situé à Spa, au cœur des Ardennes. Parfait pour un week-end en couple, il offre jacuz…</p><p className="text-xs text-muted-foreground">📍 Spa, Wallonie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Gîte Les Amants du Bois</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700">Gîte libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Gîte romantique avec spa privatif et vue sur la forêt, idéal pour une escapade à deux dans les hauteurs de Spa…</p><p className="text-xs text-muted-foreground">📍 Spa, Wallonie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Gîte Secret Garden</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700">Gîte libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Niché dans la campagne de Durbuy, le Gîte Secret Garden offre un cadre romantique avec spa extérieur, sauna et…</p><p className="text-xs text-muted-foreground">📍 Durbuy, Wallonie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Hades Club</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Hades Club est un club libertin et fetish situé à Herent, entre Bruxelles et Louvain. Réputé pour ses soiré…</p><p className="text-xs text-muted-foreground">📍 Herent, Flandre</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Hot House</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Hot House est un club gay-friendly mêlant bar et espace de détente au centre de Bruxelles. Ambiance calient…</p><p className="text-xs text-muted-foreground">📍 Bruxelles, Bruxelles-Capitale</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">La Demence Party</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Soirée gay internationale mythique de Bruxelles, organisée chaque mois au Fuse Club, avec DJs, shows et ambian…</p><p className="text-xs text-muted-foreground">📍 Bruxelles, Bruxelles-Capitale</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">La Demence Party</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">La plus grande soirée gay d’Europe, organisée chaque mois à Bruxelles au Fuse Club, avec DJs internationaux, s…</p><p className="text-xs text-muted-foreground">📍 Bruxelles, Bruxelles-Capitale</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">La Griffe Sauna</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Petit sauna gay et lesbien à Bruxelles, ambiance cosy avec hammam et salle vidéo. Référencé sur Petit Futé.</p><p className="text-xs text-muted-foreground">📍 Bruxelles, Bruxelles-Capitale</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">La Griffe Sauna</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Sauna cosy et intimiste à Bruxelles, fréquenté par une clientèle mixte, avec salle vidéo et hammam. Référencé …</p><p className="text-xs text-muted-foreground">📍 Bruxelles, Bruxelles-Capitale</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">La Griffe Sauna</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Sauna cosy et convivial à Bruxelles, avec salle vidéo, hammam et darkroom. Référencé sur Petit Futé comme l’un…</p><p className="text-xs text-muted-foreground">📍 Bruxelles, Bruxelles-Capitale</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">La Griffe Sauna</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Petit sauna cosy au cœur de Bruxelles, avec hammam, salle vidéo et darkroom intimiste. Fréquenté par un public…</p><p className="text-xs text-muted-foreground">📍 Bruxelles, Bruxelles-Capitale</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">La Griffe Sauna</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">La Griffe est un sauna gay intime et chaleureux situé au cœur de Bruxelles. Lieu discret apprécié pour son amb…</p><p className="text-xs text-muted-foreground">📍 Bruxelles, Bruxelles-Capitale</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">La Griffe Sauna</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">La Griffe est un sauna gay cosy et discret à Bruxelles. Lieu intimiste avec hammam, jacuzzi, cabines vidéo et …</p><p className="text-xs text-muted-foreground">📍 Bruxelles, Bruxelles-Capitale</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">La Réserve Club</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">La Réserve est un club mythique de Liège, connu pour son ambiance chic et ses soirées élégantes. Situé en plei…</p><p className="text-xs text-muted-foreground">📍 Liège, Wallonie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Le 139 Sauna</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Sauna gay 100 % masculin à Ans, près de Liège. Espaces détente, cabines, darkroom et ambiance relax entre habi…</p><p className="text-xs text-muted-foreground">📍 Ans, Wallonie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Le 139 Sauna</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le 139 est un sauna gay 100 % masculin situé à Ans, près de Liège. On y trouve hammam, sauna sec, cabines priv…</p><p className="text-xs text-muted-foreground">📍 Ans, Wallonie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Le 139 Sauna</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le 139 Sauna est un sauna situé à Ans, près de Liège. Doté d’un hammam, d’un infra-sauna, de cabines privées e…</p><p className="text-xs text-muted-foreground">📍 Ans, Wallonie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Le Baroque</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club intime à Bruges connu pour ses soirées discrètes à thème, ambiance feutrée et clientèle sélective.</p><p className="text-xs text-muted-foreground">📍 Bruges, Flandre</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Le Chaps</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Chaps est un club fétichiste 100 % masculin situé à Liège. Connu pour ses soirées cuir, rubber et jockstrap…</p><p className="text-xs text-muted-foreground">📍 Liège, Wallonie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Le Chaps</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Chaps est un club fetish 100 % masculin à Liège, célèbre pour ses soirées cuir, latex et underwear. Entre b…</p><p className="text-xs text-muted-foreground">📍 Liège, Wallonie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Le Frisson Club</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club libertin et lounge à Chiny, en Wallonie, connu pour ses soirées thématiques et son ambiance conviviale.</p><p className="text-xs text-muted-foreground">📍 Chiny, Wallonie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Le Frisson Club</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Frisson est un club convivial installé à Chiny, au cœur de la province de Luxembourg belge. Dans une ambian…</p><p className="text-xs text-muted-foreground">📍 Chiny, Wallonie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Le K1 Club</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le K1 Club à Namur est un lieu de rencontre libertin chic et décontracté. On y vient pour ses soirées mixtes, …</p><p className="text-xs text-muted-foreground">📍 Namur, Wallonie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Le Manhattan</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Manhattan Club à Charleroi est un espace libertin moderne et convivial ouvert aux couples et femmes seules.…</p><p className="text-xs text-muted-foreground">📍 Charleroi, Wallonie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Le Nid Secret</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700">Gîte libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Nid Secret à Namur est une love-room élégante équipée d’un spa privatif et d’un lit rond. Ambiance feutrée,…</p><p className="text-xs text-muted-foreground">📍 Namur, Wallonie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Le Sanglier Amoureux</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700">Gîte libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Gîte romantique dans les Ardennes avec suites spa privatives, jacuzzi et sauna, à deux pas de Durbuy. Une adre…</p><p className="text-xs text-muted-foreground">📍 Érezée, Wallonie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Le Spartacus</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club libertin et fetish incontournable à Liège, combinant espace sauna, cruising bar et darkrooms. Fréquentati…</p><p className="text-xs text-muted-foreground">📍 Liège, Wallonie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Le Spartacus</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Spartacus est un club fetish et libertin gay-friendly situé à Liège. Mélange entre bar, sauna et espace cru…</p><p className="text-xs text-muted-foreground">📍 Liège, Wallonie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Le Spartacus</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Spartacus est un club libertin et fetish masculin situé à Liège. Entre bar, sauna et zones sombres, l’établ…</p><p className="text-xs text-muted-foreground">📍 Liège, Wallonie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Le Spartacus</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Spartacus est un club leather et fetish situé au cœur de Liège. Mélange entre bar, sauna et espace cruising…</p><p className="text-xs text-muted-foreground">📍 Liège, Wallonie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Lofts in Town</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700">Gîte libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Les Lofts in Town à Bruxelles proposent deux suites de charme avec jacuzzi XXL, décoration vintage et ambiance…</p><p className="text-xs text-muted-foreground">📍 Bruxelles, Bruxelles-Capitale</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Love Suite Anvers</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700">Gîte libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Love-room moderne et intimiste à Anvers, équipée de jacuzzi, sauna et coin lounge. Parfaite pour un week-end r…</p><p className="text-xs text-muted-foreground">📍 Anvers, Flandre</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Machiavelly Brussels</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Private erotic club situé à Lennik, près de Bruxelles, proposant des soirées libertines élégantes et sélective…</p><p className="text-xs text-muted-foreground">📍 Lennik, Flandre</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Macho Sauna Brussels</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Sauna gay emblématique du centre de Bruxelles, avec hammam, cabines, et soirées à thème, cité sur TripAdvisor …</p><p className="text-xs text-muted-foreground">📍 Bruxelles, Bruxelles-Capitale</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Macho Sauna</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le plus grand sauna gay multi-étagé du centre de Bruxelles, avec hammam, piscine et soirées à thème, référence…</p><p className="text-xs text-muted-foreground">📍 Bruxelles, Bruxelles-Capitale</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Musée MEM</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">Cinéma libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Musée de l’Érotisme et de la Mythologie (MEM) à Bruxelles présente une collection unique d’œuvres sensuelle…</p><p className="text-xs text-muted-foreground">📍 Bruxelles, Bruxelles-Capitale</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Phenix Club</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Phenix Club est l’unique club de la région liégeoise ouvert le week-end. Son ambiance intime et festive att…</p><p className="text-xs text-muted-foreground">📍 Blegny, Wallonie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Phenix Club</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Phenix Club à Blegny, près de Liège, est un club mixte ouvert aux couples, femmes seules et hommes respectu…</p><p className="text-xs text-muted-foreground">📍 Blegny, Wallonie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Phenix Club Sauna</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club libertin et sauna mixte près de Liège, ouvert les week-ends avec soirées gay-friendly et ambiance convivi…</p><p className="text-xs text-muted-foreground">📍 Blegny, Wallonie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Phenix Club Sauna</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club libertin mixte avec sauna et espace détente à Blegny, en province de Liège, ouvert le week-end.</p><p className="text-xs text-muted-foreground">📍 Blegny, Wallonie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Red Sauna</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Red Sauna est un sauna gay discret cité dans le guide Spartacus. Lieu intime avec hammam, cabines privées e…</p><p className="text-xs text-muted-foreground">📍 Bruxelles, Bruxelles-Capitale</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Sauna Kouros</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Sauna gay avec piscine, jardin et espace bien-être, situé à Schoten près d’Anvers. Référencé sur TravelGay et …</p><p className="text-xs text-muted-foreground">📍 Schoten, Flandre</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Sauna Kouros</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Sauna Kouros, situé à Schoten près d’Anvers, est un sauna convivial connu pour son ambiance masculine et dé…</p><p className="text-xs text-muted-foreground">📍 Schoten, Flandre</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Sauna La Griffe</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Sauna libertin et bar lounge à Bruxelles, avec hammam, jacuzzi et salle vidéo érotique.</p><p className="text-xs text-muted-foreground">📍 Bruxelles, Bruxelles-Capitale</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Sauna Le 139</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Sauna gay 100 % masculin près de Liège, avec black-room, cabines privées et soirées thématiques, très populair…</p><p className="text-xs text-muted-foreground">📍 Ans, Wallonie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Sauna Macho</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Grand sauna gay multi-étagé à Bruxelles, avec hammam, bar, darkroom et espace détente sur plusieurs niveaux.</p><p className="text-xs text-muted-foreground">📍 Bruxelles, Bruxelles-Capitale</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Sauna Macho</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Sauna Macho est le plus grand sauna gay de Bruxelles, réparti sur plusieurs étages avec hammam, jacuzzi, ca…</p><p className="text-xs text-muted-foreground">📍 Bruxelles, Bruxelles-Capitale</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Sauna Macho</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Sauna Macho est le plus grand sauna gay multi-étagé de Bruxelles. Il offre hammam, jacuzzi, cabines privées…</p><p className="text-xs text-muted-foreground">📍 Bruxelles, Bruxelles-Capitale</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Sauna Macho</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Sauna Macho est l’un des établissements les plus emblématiques de Bruxelles. Ce vaste complexe multi-étagé …</p><p className="text-xs text-muted-foreground">📍 Bruxelles, Bruxelles-Capitale</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Sauna Nautilus</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Sauna & spa gay-friendly près d’Anvers, avec piscine, hammam, jardin extérieur et soirées à thème relax ou tor…</p><p className="text-xs text-muted-foreground">📍 Avelgem, Flandre</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Sauna Nautilus</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Sauna Nautilus, à Avelgem, est un grand complexe wellness gay-friendly situé entre Courtrai et Gand. On y t…</p><p className="text-xs text-muted-foreground">📍 Avelgem, Flandre</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Sauna Nautilus</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Sauna Nautilus à Avelgem, entre Courtrai et Gand, est un vaste centre wellness gay-friendly. Il dispose d’u…</p><p className="text-xs text-muted-foreground">📍 Avelgem, Flandre</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Sauna Nautilus</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Sauna gay et détente masculine situé à Oudenaarde, mentionné sur TravelGay et guides belges spécialisés.</p><p className="text-xs text-muted-foreground">📍 Oudenaarde, Flandre</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Sauna Spades 4our</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Grand sauna gay moderne à Gand avec rooftop, hammam, bar et salle de projection. Ambiance chic et conviviale p…</p><p className="text-xs text-muted-foreground">📍 Gent, Flandre</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Sauna &#39;t Herenhuis</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Sauna gay et centre de détente situé en périphérie d’Anvers, avec hammam, jacuzzi et soirées thématiques. Réfé…</p><p className="text-xs text-muted-foreground">📍 Anvers, Flandre</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Sauna ’t Herenhuis</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Sauna gay moderne et très bien équipé situé en périphérie d’Anvers, réputé pour son ambiance détendue et ses s…</p><p className="text-xs text-muted-foreground">📍 Berchem, Flandre</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Sauna &#39;t Herenhuis</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Sauna gay haut de gamme en périphérie d’Anvers, avec hammam, jacuzzi, coin détente et soirées à thème très pri…</p><p className="text-xs text-muted-foreground">📍 Berchem, Flandre</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Sauna ’t Herenhuis</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Sauna ’t Herenhuis, situé à Berchem près d’Anvers, est un sauna gay spacieux et très bien équipé. Il propos…</p><p className="text-xs text-muted-foreground">📍 Berchem, Flandre</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Sauna ’t Herenhuis</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Sauna ’t Herenhuis, situé à Berchem près d’Anvers, est un sauna spacieux et bien équipé. On y trouve sauna …</p><p className="text-xs text-muted-foreground">📍 Berchem, Flandre</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Sauna ’t Herenhuis</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Sauna ’t Herenhuis, à Berchem près d’Anvers, est réputé pour son ambiance accueillante et ses équipements c…</p><p className="text-xs text-muted-foreground">📍 Berchem, Flandre</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Sauna ’t Herenhuis</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Sauna ’t Herenhuis, à Berchem près d’Anvers, est un établissement très bien équipé. Entre sauna sec, hammam…</p><p className="text-xs text-muted-foreground">📍 Berchem, Flandre</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Select Club Brussels</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club libertin/sauna à Bruxelles avec hammam & jacuzzi.</p><p className="text-xs text-muted-foreground">📍 Bruxelles, Bruxelles-Capitale</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Spa Privé Liège</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700">Gîte libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Spa privatif à Liège proposant jacuzzi, sauna et coin détente pour une escapade romantique à deux. Un lieu dis…</p><p className="text-xs text-muted-foreground">📍 Liège, Wallonie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Spades 4our (fermé)</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Spades 4our était un grand sauna de Gand, connu pour son design moderne et ses événements festifs. Très pop…</p><p className="text-xs text-muted-foreground">📍 Gand, Flandre</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Spades 4our (fermé)</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Spades 4our fut l’un des saunas les plus populaires de Gand, connu pour son design moderne, son grand hamma…</p><p className="text-xs text-muted-foreground">📍 Gand, Flandre</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Stammbar Cruising Bar</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Stammbar est un bar de cruising moderne et convivial situé dans le quartier gay de Bruxelles. C’est un lieu…</p><p className="text-xs text-muted-foreground">📍 Bruxelles, Bruxelles-Capitale</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Stammbar Cruising</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Stammbar est un bar de cruising 100 % masculin situé au cœur du quartier gay de Bruxelles. Ambiance cuir, l…</p><p className="text-xs text-muted-foreground">📍 Bruxelles, Bruxelles-Capitale</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Subway Sauna</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Subway Sauna est un sauna gay mixte mentionné dans plusieurs guides européens. Connu pour ses projections v…</p><p className="text-xs text-muted-foreground">📍 Bruxelles, Bruxelles-Capitale</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">The Villa Antwerp</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">The Villa Antwerp est un club haut de gamme situé à deux pas de la gare centrale d’Anvers. Connu pour son desi…</p><p className="text-xs text-muted-foreground">📍 Anvers, Flandre</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">UGC De Brouckère</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">Cinéma libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">L’UGC De Brouckère est un grand cinéma art déco du centre de Bruxelles. Certaines de ses salles peuvent être p…</p><p className="text-xs text-muted-foreground">📍 Bruxelles, Bruxelles-Capitale</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Zenhit</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Sauna gay spacieux et luxueux situé dans les Ardennes belges, avec spa, hammam et espaces de détente raffinés.</p><p className="text-xs text-muted-foreground">📍 Neufchâteau, Wallonie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Zenhit</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Sauna gay spacieux et moderne situé dans les Ardennes belges, avec hammam, jacuzzi et espace détente haut de g…</p><p className="text-xs text-muted-foreground">📍 Neufchâteau, Wallonie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Zenhit Sauna</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Zenhit est un sauna gay moderne niché dans les Ardennes belges, à Neufchâteau. Confortable et design, il di…</p><p className="text-xs text-muted-foreground">📍 Neufchâteau, Wallonie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Zenhit Sauna</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Zenhit est un sauna spacieux et moderne niché dans les Ardennes belges, à Neufchâteau. Hammam, jacuzzi, cab…</p><p className="text-xs text-muted-foreground">📍 Neufchâteau, Wallonie</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Zenhit Sauna</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Zenhit Sauna est un établissement haut de gamme situé à Neufchâteau, au cœur des Ardennes belges. Ce lieu d…</p><p className="text-xs text-muted-foreground">📍 Neufchâteau, Wallonie</p>
            </div>
          </div>
          <h2 className="text-2xl font-bold mt-12 mb-6">🇨🇭 Suisse — 65 établissements</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">After Club Nyon</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">L’After Club à Nyon est un club privé et événementiel au bord du lac Léman. Connu pour ses soirées élégantes e…</p><p className="text-xs text-muted-foreground">📍 Nyon, Vaud</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Apollo Sauna</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">L’Apollo Sauna est un sauna gay intime situé au centre de Zurich. Il propose hammam, cabines privées et espace…</p><p className="text-xs text-muted-foreground">📍 Zurich</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Aqualis Sauna</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">L’Aqualis Sauna, à Berne, est un grand espace de détente gay avec hammam, labyrinthe, jacuzzi et vidéo room. A…</p><p className="text-xs text-muted-foreground">📍 Berne</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Camping Club Léman</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700">Gîte libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Camping naturiste privé situé au bord du lac Léman, réservé aux adhérents. Ambiance conviviale et respectueuse…</p><p className="text-xs text-muted-foreground">📍 Préverenges, Vaud</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Central Escalator Sauna</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Central Escalator Sauna est un sauna lifestyle bien connu de Zurich. Situé au cœur de la ville, il combine …</p><p className="text-xs text-muted-foreground">📍 Zurich</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Chalet du Plaisir</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700">Gîte libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Gîte romantique avec spa privatif et ambiance sensuelle situé à Montreux. Idéal pour un week-end à deux entre …</p><p className="text-xs text-muted-foreground">📍 Montreux, Vaud</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Chalet Secret des Alpes</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700">Gîte libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Gîte romantique avec spa privatif et vue panoramique sur les Alpes suisses. Idéal pour un week-end en couple a…</p><p className="text-xs text-muted-foreground">📍 Crans-Montana, Valais</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Ciné 6</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Ciné 6 est un petit club et cruising bar de Berne, cité dans les guides gay suisses. Ambiance intime, proje…</p><p className="text-xs text-muted-foreground">📍 Berne</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Cinéma Corso</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Cinéma Corso à Bâle est un ancien cinéma X de quartier, proposant deux salles et des box privés. Aujourd’hu…</p><p className="text-xs text-muted-foreground">📍 Bâle</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Cinéma Corso</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Ancien cinéma pour adultes à Bâle, disposant de deux salles et de box privés. Maintenant fermé ou transformé, …</p><p className="text-xs text-muted-foreground">📍 Bâle</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Cinéma Mascotte</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Cinéma Mascotte est l’un des derniers cinémas pour adultes de Bâle. Il dispose de plusieurs salles, d’écran…</p><p className="text-xs text-muted-foreground">📍 Bâle</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Cinéma Mascotte</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Cinéma Mascotte de Bâle est un lieu emblématique du cinéma pour adultes, disposant de box semi-privés et d’…</p><p className="text-xs text-muted-foreground">📍 Bâle</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Cinéma Moderne</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Ancien cinéma pornographique à Lausanne, connu pour ses cabines privées et ses projections érotiques. Fermé au…</p><p className="text-xs text-muted-foreground">📍 Lausanne, Vaud</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Cinéma Moderne</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Ancien cinéma pornographique de Lausanne, célèbre pour sa salle unique et ses cabines discrètes. Il a marqué l…</p><p className="text-xs text-muted-foreground">📍 Lausanne, Vaud</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Cinéma Privé Lémanique</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Projection privée pour couples ou soirées organisées en région genevoise, dans un cadre intimiste.</p><p className="text-xs text-muted-foreground">📍 Genève</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Cinéma Roland</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Sex-cinéma à Zurich, avec films gay et cabines d’isolement — information restreinte, adresse approximative.</p><p className="text-xs text-muted-foreground">📍 Zurich</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Club Nautilus Genève</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Club Nautilus est un établissement libertin discret situé à Genève. Réservé aux membres, il organise des so…</p><p className="text-xs text-muted-foreground">📍 Genève</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Club Privé</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Club Privé de Zurich est un établissement discret combinant ambiance libertine et esprit lounge. Mentionné …</p><p className="text-xs text-muted-foreground">📍 Zurich</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Club Rouge</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Club Rouge est un espace libertin et festif à Zurich. Réputé pour son atmosphère feutrée et ses soirées sél…</p><p className="text-xs text-muted-foreground">📍 Zurich</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Club Secret Neuchâtel</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Club Secret est un nouveau lieu libertin discret de Neuchâtel. Conçu pour les couples et les femmes seules,…</p><p className="text-xs text-muted-foreground">📍 Neuchâtel</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Cruising Canyon</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Cruising Canyon est un bar et club gay de Genève, connu pour ses soirées thématiques et son ambiance underg…</p><p className="text-xs text-muted-foreground">📍 Genève</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Cruising Canyon</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Cruising Canyon est un bar et club gay populaire de Genève. Ambiance chaude, soirées thématiques et espace …</p><p className="text-xs text-muted-foreground">📍 Genève</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Dream House Spa</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700">Gîte libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Suite spa privative à Genève offrant sauna, jacuzzi et ambiance romantique. Idéal pour une escapade intime ou …</p><p className="text-xs text-muted-foreground">📍 Genève</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Erotik Factory Zurich</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">L’Erotik Factory est un vaste complexe érotique de Zurich combinant sex-shop, cabines vidéo et mini-salles de …</p><p className="text-xs text-muted-foreground">📍 Zürich</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">ErotikFactory Zurich</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-orange-100 text-orange-700">Sexshop libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">L’ErotikFactory est le plus grand sex-shop de Zurich, combinant espace boutique, cabines vidéo et projections …</p><p className="text-xs text-muted-foreground">📍 Zurich</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Gay Aqua Sauna (fermé)</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Gay Aqua Sauna était un sauna gay situé en périphérie de Zurich, connu pour son atmosphère conviviale et so…</p><p className="text-xs text-muted-foreground">📍 Zurich</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Gay Aqua Sauna (fermé)</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Gay Aqua Sauna était un sauna gay situé en périphérie de Zurich, connu pour son atmosphère conviviale et se…</p><p className="text-xs text-muted-foreground">📍 Zurich</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Gay Glory Hole Basel</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Espace de cruising discret à Bâle, mentionné sur plusieurs guides européens. Lieu confidentiel pour rencontres…</p><p className="text-xs text-muted-foreground">📍 Bâle</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Gîte Romantique des Alpes</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700">Gîte libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Charmant gîte pour couples avec spa privatif et ambiance cocooning au cœur des Alpes suisses. Idéal pour une e…</p><p className="text-xs text-muted-foreground">📍 Sion, Valais</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Hotel Les Trois Rois</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700">Gîte libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Palace historique cinq étoiles au bord du Rhin, combinant élégance classique et spa exclusif avec sauna panora…</p><p className="text-xs text-muted-foreground">📍 Bâle</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Jade & Vicky Espace Privatif</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Jade & Vicky est un espace privatif et club libertin en plein air, situé dans le canton de Neuchâtel. Réser…</p><p className="text-xs text-muted-foreground">📍 Neuchâtel</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Kino Walche</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Kino Walche est un sex-cinéma gay de Zurich avec trois salles, cabines vidéo et projections en continu. Un …</p><p className="text-xs text-muted-foreground">📍 Zürich</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Kurhaus Bergün</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700">Gîte libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Grand hôtel historique Art nouveau avec spa et piscines thermales dans la vallée d’Albula. Un cadre raffiné mê…</p><p className="text-xs text-muted-foreground">📍 Bergün, Grisons</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">L’After Club Nyon</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">L’After Club à Nyon est un club privé accueillant soirées libertines et événements exclusifs. Situé près du la…</p><p className="text-xs text-muted-foreground">📍 Nyon, Vaud</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">L’Amour Secret</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700">Gîte libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Gîte romantique et discret à Montreux proposant jacuzzi privatif et ambiance cocooning pour couples. Une adres…</p><p className="text-xs text-muted-foreground">📍 Montreux, Vaud</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">L’Orangerie Le Club</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">L’Orangerie est un club libertin haut de gamme situé à Genève. Raffiné et sélectif, il organise des soirées th…</p><p className="text-xs text-muted-foreground">📍 Genève</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Le Mix Club Libertin</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Mix est un club libertin chic et moderne à La Chaux-de-Fonds. On y trouve un bar lounge, une piste de danse…</p><p className="text-xs text-muted-foreground">📍 La Chaux-de-Fonds, Neuchâtel</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Le Mix Club Libertin</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Mix est un club libertin chic et convivial situé à La Chaux-de-Fonds. Lieu élégant proposant des soirées pr…</p><p className="text-xs text-muted-foreground">📍 La Chaux-de-Fonds, Neuchâtel</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Les Bains de Lavey</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Les Bains de Lavey sont un complexe thermal réputé pour leurs sources naturelles chaudes et leur espace wellne…</p><p className="text-xs text-muted-foreground">📍 Aigle, Vaud</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Loveland Sauna</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Loveland Sauna, situé dans le centre historique de Berne, est un établissement gay réputé pour son ambiance…</p><p className="text-xs text-muted-foreground">📍 Berne</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Mann o Mann Sauna</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Mann o Mann Sauna, à Saint-Gall, est un grand sauna gay moderne doté d’un hammam, d’espaces vidéo et de coi…</p><p className="text-xs text-muted-foreground">📍 Saint-Gall</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Männerzone</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Männerzone est un bar de cruising gay et leather situé à Zurich. Ce lieu emblématique attire une clientèle …</p><p className="text-xs text-muted-foreground">📍 Zurich</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Männerzone</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Männerzone est un bar cruising gay et leather de Zurich. Ce lieu mythique propose soirées fetish, dancefloo…</p><p className="text-xs text-muted-foreground">📍 Zurich</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Mylord Sauna</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Mylord Sauna est un petit sauna gay convivial de Zurich, apprécié pour son ambiance intime et sa clientèle …</p><p className="text-xs text-muted-foreground">📍 Zurich</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Mylord Sauna</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Mylord Sauna est un sauna gay discret et convivial à Zurich. Très apprécié pour sa propreté et son ambiance…</p><p className="text-xs text-muted-foreground">📍 Zurich</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Phenix Krucial Club</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Phenix Krucial Club est un club gay et fetish privé situé au cœur de Zurich. Réservé à un public averti, il…</p><p className="text-xs text-muted-foreground">📍 Zurich</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Phoenix Sauna</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Phoenix Sauna à Zurich est un sauna moderne et stylé, mentionné parmi les meilleurs d’Europe. Il dispose de…</p><p className="text-xs text-muted-foreground">📍 Zurich</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Renos Relax Sauna</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Renos Relax est un sauna gay réputé de Zurich, avec hammam, jacuzzi et plusieurs darkrooms. L’ambiance y es…</p><p className="text-xs text-muted-foreground">📍 Zurich</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Roemersauna</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Roemersauna à Saint-Gall est un sauna gay convivial avec bio-sauna, hammam et whirlpool. Ce lieu discret et…</p><p className="text-xs text-muted-foreground">📍 Saint-Gall</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Roemersauna</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Roemersauna, à Saint-Gall, est un sauna gay intimiste et accueillant. On y trouve bio-sauna, hammam, whirlp…</p><p className="text-xs text-muted-foreground">📍 Saint-Gall</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Sauna Club Lausanne</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Sauna Club Lausanne est un espace gay-friendly combinant sauna, hammam et zone détente. Convivial et bien t…</p><p className="text-xs text-muted-foreground">📍 Lausanne, Vaud</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Spa by Elle & Lui Suisse</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Spa by Elle & Lui Suisse est un espace intimiste combinant love-room, jacuzzi et sauna privatif. Situé à Ge…</p><p className="text-xs text-muted-foreground">📍 Genève</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Spazio Gay</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Spazio Gay à Lugano est un sauna et club gay moderne du Tessin. Lieu de détente et de rencontres, il combin…</p><p className="text-xs text-muted-foreground">📍 Massagno (Lugano), Tessin</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Sternen Erotic Cinema</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Cinéma porno à Zurich avec salle principale et cabines privés. Adresse historique du cinéma pour adultes dans …</p><p className="text-xs text-muted-foreground">📍 Zurich</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Substation X-World</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Substation X-World est un sex-club et sexshop gay à Genève réparti sur plusieurs étages. Il propose cabines…</p><p className="text-xs text-muted-foreground">📍 Genève</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Sundeck Sauna</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Sundeck Sauna, à Berne, est un sauna gay original combinant espace bien-être et rooftop lounge. Fréquenté p…</p><p className="text-xs text-muted-foreground">📍 Berne</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Sunnyday Club Sauna</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Sunnyday Club Sauna à Bâle est un grand sauna gay avec bar, hammam, darkrooms et coin détente. Très populai…</p><p className="text-xs text-muted-foreground">📍 Bâle</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Swiss Cruising Lounge</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">La Swiss Cruising Lounge est un espace discret de Genève dédié aux rencontres masculines. Ambiance feutrée, ba…</p><p className="text-xs text-muted-foreground">📍 Genève</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">The Chedi Andermatt</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700">Gîte libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Palace de montagne cinq étoiles à Andermatt, avec suites privatives dotées de sauna, jacuzzi et vue panoramiqu…</p><p className="text-xs text-muted-foreground">📍 Andermatt, Uri</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Trafick Le Sexe Club</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Trafick est un sex-club de Lausanne ouvert aux publics gay et mixtes. Réputé pour ses soirées BDSM et fetis…</p><p className="text-xs text-muted-foreground">📍 Lausanne</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Velvet Club</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Velvet Club est un bar lounge chic de Genève, mêlant élégance et sensualité. Ambiance feutrée, cocktails ra…</p><p className="text-xs text-muted-foreground">📍 Genève</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Vernier Sauna Club</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Vernier Sauna Club est un sauna gay et cruising situé en périphérie de Genève. Mentionné dans le guide Mist…</p><p className="text-xs text-muted-foreground">📍 Genève</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Vernier Sauna Club</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Sauna libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Vernier Sauna Club, situé en périphérie de Genève, est un sauna gay-friendly avec hammam, cabines et espace…</p><p className="text-xs text-muted-foreground">📍 Genève</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Villa de Vals</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700">Gîte libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Maison troglodytique spectaculaire creusée dans la montagne à Vals. Véritable cocon design mêlant architecture…</p><p className="text-xs text-muted-foreground">📍 Vals, Grisons</p>
            </div>
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Zurich Fetish Club</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Le Zurich Fetish Club est un espace réservé aux amateurs de cuir, latex et BDSM. Ce club privé organise des so…</p><p className="text-xs text-muted-foreground">📍 Zurich</p>
            </div>
          </div>
          <h2 className="text-2xl font-bold mt-12 mb-6">🇱🇺 Luxembourg — 1 établissements</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground leading-tight">Club Mystik Luxembourg</span>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Club libertin</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Club libertin moderne du Luxembourg, avec jacuzzi, coins câlins et soirées à thème pour couples et femmes seul…</p><p className="text-xs text-muted-foreground">📍 Luxembourg</p>
            </div>
          </div>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default AnnuaireClubs;
