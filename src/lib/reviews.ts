export interface Review {
  id: string;
  lang: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  verified: boolean;
  helpful: number;
}

let cachedReviews: Review[] | null = null;

function parseCSV(csv: string): Review[] {
  const lines = csv.trim().split("\n");
  if (lines.length < 2) return [];
  const reviews: Review[] = [];

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    if (!line.trim()) continue;

    // Handle quoted text field containing commas
    const match = line.match(/^([^,]+),([^,]+),([^,]+),(\d+),"(.+)",(\d{4}-\d{2}-\d{2}),(true|false),(\d+)$/);
    if (match) {
      reviews.push({
        id: match[1],
        lang: match[2],
        author: match[3],
        rating: parseInt(match[4], 10),
        text: match[5],
        date: match[6],
        verified: match[7] === "true",
        helpful: parseInt(match[8], 10),
      });
    }
  }
  return reviews;
}

export async function loadReviews(): Promise<Review[]> {
  if (cachedReviews) return cachedReviews;
  try {
    const res = await fetch("/data/reviews.csv");
    const csv = await res.text();
    cachedReviews = parseCSV(csv);
    return cachedReviews;
  } catch {
    return [];
  }
}

export function getReviewsByLang(reviews: Review[], lang: string): Review[] {
  return reviews
    .filter((r) => r.lang === lang)
    .sort((a, b) => b.helpful - a.helpful);
}

export function computeStats(reviews: Review[]): { avg: string; count: number; five: number } {
  if (reviews.length === 0) return { avg: "0", count: 0, five: 0 };
  const sum = reviews.reduce((a, r) => a + r.rating, 0);
  const five = reviews.filter((r) => r.rating === 5).length;
  return {
    avg: (sum / reviews.length).toFixed(1),
    count: reviews.length,
    five: Math.round((five / reviews.length) * 100),
  };
}
