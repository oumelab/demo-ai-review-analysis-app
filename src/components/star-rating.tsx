import { Star } from "lucide-react";

export default function StarRating ({ rating }: { rating: number }) {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<Star key={i} className="stroke-neutral-300 size-5 fill-yellow-400" />);
    } else {
      stars.push(<Star key={i} className="stroke-neutral-300 size-5 fill-transparent" />);
    }
  }
  return <div className="flex">{stars}</div>;
};