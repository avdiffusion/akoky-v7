import { useState, useEffect } from "react";
import { loadReviews, getReviewsByLang, computeStats, type Review } from "@/lib/reviews";
import { Star, CheckCircle, ThumbsUp } from "lucide-react";
import { Helmet } from "react-helmet-async";

type Lang = "fr" | "en" | "es" | "de" | "it" | "pt";

interface ReviewsListProps {
  lang: Lang;
}

const LABELS: Record<Lang, { verified: string; helpful: string; title: string; reviews: string }> = {
  fr: { verified: "Vérifié", helpful: "utile", title: "Témoignages vérifiés", reviews: "avis" },
  en: { verified: "Verified", helpful: "helpful", title: "Verified testimonials", reviews: "reviews" },
  es: { verified: "Verificado", helpful: "útil", title: "Testimonios verificados", reviews: "reseñas" },
  de: { verified: "Verifiziert", helpful: "hilfreich", title: "Verifizierte Erfahrungsberichte", reviews: "Bewertungen" },
  it: { verified: "Verificato", helpful: "utile", title: "Testimonianze verificate", reviews: "recensioni" },
  pt: { verified: "Verificado", helpful: "útil", title: "Testemunhos verificados", reviews: "avaliações" },
};

const ReviewCard = ({ review, lang }: { review: Review; lang: Lang }) => {
  const labels = LABELS[lang];
  return (
    <article
      className="bg-card border border-border rounded-2xl p-6 hover:border-primary/20 transition-colors"
      itemScope
      itemType="https://schema.org/Review"
    >
      <div className="flex items-start justify-between mb-3">
        <div itemProp="author" itemScope itemType="https://schema.org/Person">
          <p className="font-bold text-foreground" itemProp="name">{review.author}</p>
          <time className="text-xs text-muted-foreground" dateTime={review.date} itemProp="datePublished">
            {new Date(review.date).toLocaleDateString(
              lang === "fr" ? "fr-FR" : lang === "de" ? "de-DE" : lang === "es" ? "es-ES" : lang === "it" ? "it-IT" : lang === "pt" ? "pt-PT" : "en-US"
            )}
          </time>
        </div>
        <div className="flex items-center gap-0.5" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
          <meta itemProp="ratingValue" content={String(review.rating)} />
          <meta itemProp="bestRating" content="5" />
          <meta itemProp="worstRating" content="1" />
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < review.rating ? "fill-primary text-primary" : "text-muted-foreground/30"}`}
            />
          ))}
        </div>
      </div>

      <p className="text-muted-foreground leading-relaxed mb-4" itemProp="reviewBody">
        {review.text}
      </p>

      <div className="flex items-center justify-between text-xs text-muted-foreground/70">
        {review.verified && (
          <span className="flex items-center gap-1 text-green-500">
            <CheckCircle className="h-3.5 w-3.5" /> {labels.verified}
          </span>
        )}
        <span className="flex items-center gap-1">
          <ThumbsUp className="h-3.5 w-3.5" /> {review.helpful} {labels.helpful}
        </span>
      </div>

      <div itemProp="itemReviewed" itemScope itemType="https://schema.org/SoftwareApplication" className="hidden">
        <meta itemProp="name" content="AKOKY" />
        <meta itemProp="applicationCategory" content="SocialNetworkingApplication" />
      </div>
    </article>
  );
};

const ReviewsList = ({ lang }: ReviewsListProps) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadReviews().then((all) => {
      setReviews(getReviewsByLang(all, lang));
      setLoading(false);
    });
  }, [lang]);

  const stats = computeStats(reviews);
  const labels = LABELS[lang];

  // JSON-LD AggregateRating schema for better Google indexation
  const aggregateRatingSchema = reviews.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AKOKY",
    "applicationCategory": "SocialNetworkingApplication",
    "operatingSystem": "Web, iOS, Android",
    "url": "https://akoky.com",
    "image": "https://akoky.com/images/logo-akoky.webp",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": stats.avg,
      "reviewCount": stats.count,
      "bestRating": "5",
      "worstRating": "1",
    },
    "review": reviews.slice(0, 10).map((r) => ({
      "@type": "Review",
      "author": { "@type": "Person", "name": r.author },
      "datePublished": r.date,
      "reviewRating": { "@type": "Rating", "ratingValue": r.rating, "bestRating": 5 },
      "reviewBody": r.text,
    })),
  } : null;

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <div className="h-8 w-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (reviews.length === 0) return null;

  return (
    <>
      {aggregateRatingSchema && (
        <Helmet>
          <script type="application/ld+json">{JSON.stringify(aggregateRatingSchema)}</script>
        </Helmet>
      )}

      <section className="py-16 px-4">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-2 text-center font-display">
            {labels.title}
          </h2>

          {/* Stats bar */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-10 text-center">
            <div>
              <span className="text-4xl font-black text-primary">{stats.avg}</span>
              <span className="text-lg text-muted-foreground">/5</span>
              <div className="flex items-center justify-center gap-0.5 mt-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < Math.round(parseFloat(stats.avg)) ? "fill-primary text-primary" : "text-muted-foreground/30"}`} />
                ))}
              </div>
            </div>
            <div className="h-10 w-px bg-border hidden sm:block" />
            <div>
              <span className="text-2xl font-black text-foreground">{stats.count}</span>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">{labels.reviews}</p>
            </div>
            <div className="h-10 w-px bg-border hidden sm:block" />
            <div>
              <span className="text-2xl font-black text-foreground">{stats.five}%</span>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">5★</p>
            </div>
          </div>

          {/* Reviews grid — all rendered for SEO */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} lang={lang} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ReviewsList;
