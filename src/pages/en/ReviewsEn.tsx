import ContentPageLayout from "@/components/layout/ContentPageLayout";
import HreflangTags from "@/components/seo/HreflangTags";
import ReviewsList from "@/components/reviews/ReviewsList";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://akoky.com/en" },
    { "@type": "ListItem", "position": 2, "name": "Reviews", "item": "https://akoky.com/en/reviews" },
  ],
};

const PAGE_SCHEMA = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "AKOKY Reviews – Verified Member Testimonials",
    "description": "Read authentic and verified reviews from AKOKY members. Real testimonials about the experience, events, partner clubs and premium membership.",
    "url": "https://akoky.com/en/reviews",
    "inLanguage": "en",
    "isPartOf": { "@type": "WebSite", "name": "AKOKY", "url": "https://akoky.com" },
  },
  BREADCRUMB_SCHEMA,
];

const ReviewsEn = () => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="AKOKY" />
        <meta name="twitter:site" content="@akoky_official" />
      </Helmet>
      <HreflangTags slug="reviews" />

      <ContentPageLayout
        lang="en"
        title="AKOKY Reviews – Verified Member Testimonials & Feedback"
        description="Read authentic and verified reviews from AKOKY members. Real testimonials about the experience, events, partner clubs and premium membership."
        canonical="https://akoky.com/en/reviews"
        heroTitle="AKOKY Member Reviews – Verified Testimonials"
        heroSubtitle="Discover over 60 authentic testimonials from the AKOKY community, Europe's leading libertine social network"
        heroImage="/images/jeux-cover.webp"
        breadcrumb={[{ label: "Reviews" }]}
        faq={[
          { question: "Are AKOKY reviews authentic and verified?", answer: "Yes, 100% of our reviews are authentic and verified. Every testimonial comes from an active member of our community and is checked by our moderation team before publication. Unlike some competing platforms, we never publish fake reviews or sponsored testimonials. Our commitment: complete transparency to build a trusted libertine community." },
          { question: "What is AKOKY's average rating?", answer: "AKOKY receives an average rating of 4.7/5 based on over 60 verified member reviews. This rating reflects the overall satisfaction of our community regarding platform quality, event safety, partner club atmosphere and respect for consent." },
          { question: "How can I leave a review on AKOKY?", answer: "If you are an active AKOKY member, you can share your testimonial by contacting our team via the contact page. We favour detailed reviews that address your real experience: atmosphere at events, quality of encounters, ease of use of the mobile application, and respect for consent rules. The best reviews can earn you up to 12 months of free premium subscription." },
          { question: "Can I earn a subscription by leaving a review?", answer: "Yes! Authentic and detailed testimonials can earn you up to 12 months of AKOKY premium subscription. We reward members who take the time to share their experience constructively and honestly." },
          { question: "Is AKOKY better rated than Wyylde or NousLibertins?", answer: "With a rating of 4.7/5, AKOKY is positioned as one of the best-rated libertine platforms in Europe. Our premium approach, focused on quality rather than quantity, distinguishes us from competitors like Wyylde, NousLibertins, Libertic or SexyLib." },
        ]}
        schema={PAGE_SCHEMA}
      >
        {/* Intro SEO */}
        <section className="py-16 px-4">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Why AKOKY Reviews Matter</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>In the world of <Link to="/en/libertinage" className="text-primary hover:underline">libertine platforms</Link>, transparency and authenticity are essential. Unlike standard dating sites or competitors like Wyylde and NousLibertins, AKOKY focuses on community quality over quantity. Every review published on this page comes from a verified member who has genuinely participated in our <Link to="/en/events" className="text-primary hover:underline">libertine events</Link> or used our premium services.</p>
              <p>Our testimonials cover every aspect of the AKOKY experience: the atmosphere in <Link to="/en/clubbing" className="text-primary hover:underline">partner libertine clubs</Link>, the quality of our <Link to="/en/app" className="text-primary hover:underline">mobile application</Link>, respect for consent at events, community moderation and the benefits of <Link to="/en/vip" className="text-primary hover:underline">VIP membership</Link>. These real-life reviews help new members understand our philosophy and join an ethical, welcoming libertine community.</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <span className="text-4xl mb-4 block">⭐</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider block mb-1">★★★★★</span>
                <span className="text-5xl font-black text-primary block">4.7</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider">Average rating</span>
              </div>
              <div className="text-center">
                <span className="text-4xl mb-4 block">🧾</span>
                <span className="text-5xl font-black text-primary block">60+</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider">verified reviews</span>
              </div>
              <div className="text-center">
                <span className="text-4xl mb-4 block">✅</span>
                <span className="text-5xl font-black text-primary block">100%</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider">Authentic reviews</span>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews from CSV */}
        <ReviewsList lang="en" />

        {/* CTA */}
        <section className="py-16 px-4 bg-card/30 border-y border-border">
          <div className="container max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Share Your AKOKY Experience & Win Up to 12 Months VIP</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Are you a member of our libertine community? Your testimonial is valuable and could earn you up to <strong className="text-foreground">12 months of premium subscription</strong>. Share your authentic experience about our <Link to="/en/events" className="text-primary hover:underline">libertine events</Link>, our <Link to="/en/app" className="text-primary hover:underline">application</Link> or <Link to="/en/clubbing" className="text-primary hover:underline">partner venues</Link>, and help the AKOKY community grow with kindness and respect.
            </p>
            <a href="https://akoky.com/en/contact" className="inline-flex items-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-opacity">
              👉 I want to share a testimonial
            </a>
          </div>
        </section>
      </ContentPageLayout>
    </>
  );
};

export default ReviewsEn;
