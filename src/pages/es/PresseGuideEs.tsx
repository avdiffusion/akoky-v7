import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ: { question: string; answer: string }[] = [];

const BRANDING = [
  { img: "/images/branding/tshirts-akoky-premium.webp", alt: "Camisetas y ropa Akoky premium con logo AK" },
  { img: "/images/branding/casquette-akoky-premium.webp", alt: "Gorras y accesorios Akoky premium con logo AK" },
  { img: "/images/branding/goodies-akoky-premium.webp", alt: "Merchandising Akoky premium con logo AK" },
  { img: "/images/branding/affiche-akoky-premium.webp", alt: "Soportes de comunicación Akoky con logo AK" },
];

const PresseGuideEs = () => (
  <>
    <MetaTags
      title="Prensa y Colaboraciones AKOKY – Kit de Medios y Contacto | AKOKY"
      description="Espacio de prensa AKOKY: dossier de medios, recursos gráficos, estadísticas y contacto para colaboraciones. Únete al ecosistema libertino premium europeo."
      canonical="https://akoky.com/es/sala-de-prensa"
      lang="es"
      ogImage="/images/presse-libertine.webp"
    />
    <HreflangTags slug="sala-de-prensa" />
    <ContentPageLayout
      lang="es"
      title="Prensa y Colaboraciones AKOKY"
      description="Kit de prensa, recursos para medios y colaboraciones AKOKY"
      canonical="https://akoky.com/es/sala-de-prensa"
      heroTitle="Prensa y Colaboraciones"
      heroSubtitle="Espacio de prensa AKOKY: dossier de medios, estadísticas y contacto para relaciones con los medios."
      heroImage="/images/es-prensa-cover.webp"
      breadcrumb={[{ label: "Prensa y Colaboraciones" }]}
      faq={FAQ}
    >

      <section className="py-12 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">Akoky, la plataforma libertina premium europea</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">Akoky es mucho más que un simple sitio libertino: es una plataforma libertina premium diseñada para estructurar y modernizar el ecosistema libertino europeo. Nacida de la voluntad de sus fundadores de ofrecer una alternativa elegante, segura y respetuosa a las plataformas libertinas tradicionales, Akoky se impone hoy como un actor imprescindible del libertinaje online en España, Francia, Bélgica y toda Europa.</p>
          <p className="text-muted-foreground leading-relaxed mb-3">Akoky reúne una comunidad de parejas, mujeres y hombres libertinos exigentes, que buscan encuentros auténticos en un entorno premium. La plataforma ofrece un directorio completo de clubes libertinos de Europa, una agenda de eventos privados, lives exclusivos, así como un sistema de perfiles certificados y mensajería segura a través de AKOKY Safe.</p>
          <p className="text-muted-foreground leading-relaxed mb-3">Más allá de la plataforma, Akoky desarrolla un verdadero ecosistema: merchandising, colaboraciones con clubes europeos, programa de afiliación para profesionales del sector, y contenidos editoriales destinados a valorar una sexualidad libre, sin complejos y respetuosa. Es esta visión global la que hace de Akoky un proyecto serio, estructurado y sostenible.</p>
        </div>
      </section>

      <section className="py-12 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">Espacio de Prensa y Medios</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">El espacio de prensa de Akoky está dedicado a periodistas, medios de comunicación, blogueros y profesionales de la comunicación que deseen cubrir la actualidad de la plataforma libertina más moderna de Europa. Aquí encontraréis todos los recursos necesarios para la redacción de vuestros artículos y reportajes.</p>
          <p className="text-muted-foreground leading-relaxed mb-3">Ya sea que estéis redactando un artículo para una revista lifestyle, un dossier para un medio especializado, o que deseéis entrevistar a los fundadores de Akoky, nuestro dossier de prensa os ofrece todas las claves para entender nuestro proyecto y nuestra visión.</p>
          <p className="text-muted-foreground leading-relaxed mb-3">Disponible en ES, FR, EN, DE, IT, PT</p>
        </div>
      </section>

      <section className="py-12 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">Afiliación y Colaboraciones by Akoky</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">Únete al programa de afiliación libertina más eficaz de Europa</p>
          <p className="text-muted-foreground leading-relaxed mb-3">El programa de afiliación de Akoky se dirige a clubes libertinos, organizadores de eventos privados, medios especializados, influencers y profesionales del sector adulto que desean monetizar su audiencia ofreciendo al mismo tiempo un servicio de calidad a su comunidad. Al convertirte en afiliado de Akoky, te integras en un ecosistema premium donde calidad, ética y rendimiento van de la mano.</p>
          <p className="text-muted-foreground leading-relaxed mb-3">¿Gestionas un club libertino en Europa? Akoky te ofrece una visibilidad máxima ante miles de miembros VIP activos. Al integrarte en nuestro directorio premium y nuestro programa de afiliación, te beneficias de tráfico cualificado, reservas online y comisiones atractivas por cada suscripción generada.</p>
        </div>
      </section>

      <section className="py-12 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">Ecosistema y Datos Akoky</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">Una plataforma construida sobre cimientos sólidos y estructurados</p>
          <p className="text-muted-foreground leading-relaxed mb-3">Akoky no se ha construido en unas semanas. Detrás de la plataforma hay un trabajo de fondo colosal realizado por los fundadores y el equipo técnico: recopilación, estructuración y actualización permanente de una base de datos exhaustiva sobre el universo libertino europeo. Esta base de datos fiables y verificados constituye la columna vertebral del conjunto de nuestros servicios.</p>
          <p className="text-muted-foreground leading-relaxed mb-3">Base de datos estructurada que recoge los clubes libertinos de Europa con coordenadas verificadas, horarios de apertura, precios, fotos, opiniones certificadas y geolocalización precisa. Actualización semanal por nuestro equipo.</p>
        </div>
      </section>

      <section className="py-12 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">Identidad Visual y Merchandising</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">El universo visual de Akoky al servicio de la prensa, los colaboradores y los eventos</p>
          <p className="text-muted-foreground leading-relaxed mb-3">La identidad visual de Akoky ha sido diseñada para encarnar los valores de la marca: elegancia, modernidad, seguridad y excelencia. Desde el logotipo minimalista hasta los códigos de color cuidadosamente elegidos, cada elemento gráfico refleja el ADN premium de la plataforma.</p>
          <p className="text-muted-foreground leading-relaxed mb-3">Más allá de la plataforma digital, Akoky desarrolla una gama completa de productos derivados destinados a los miembros, colaboradores y eventos: camisetas, gorras, merchandising exclusivo y soportes de comunicación.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {BRANDING.map((b, i) => (
              <div key={i} className="bg-card border border-border rounded-xl overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img src={b.img} alt={b.alt} className="w-full h-full object-cover hover:scale-105 transition-transform" loading="lazy" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">Convertirse en colaborador de Akoky</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">¿Eres un club libertino, un organizador de eventos, un medio especializado, una marca lifestyle o un profesional del sector adulto? Únete al ecosistema Akoky y benefíciate de la visibilidad de una plataforma libertina premium en pleno crecimiento.</p>
        </div>
      </section>

      <section className="py-12 px-4 bg-card/50">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Contacto de Prensa y Relaciones con los Medios</h2>
          <div className="flex flex-wrap gap-4 justify-center mt-6">
            <a href="mailto:presse@akoky.com" className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">📩 presse@akoky.com</a>
            <a href="mailto:partenariats@akoky.com" className="border border-border px-6 py-3 rounded-lg font-semibold hover:border-primary hover:text-primary transition-colors">🤝 colaboraciones@akoky.com</a>
          </div>
        </div>
      </section>

    </ContentPageLayout>
  </>
);

export default PresseGuideEs;
