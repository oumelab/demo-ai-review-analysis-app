import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader
} from "@/components/ui/card";
import { Review } from "@/types";
import { QuoteIcon } from "lucide-react";
import StarRating from "./star-rating";

export default function ReviewList({ review }: { review: Review }) {

  return (
    <Card className="mb-4">
      <CardHeader className="flex justify-between">
      <QuoteIcon className="rotate-180 h-6 w-6 fill-indigo-100 text-indigo-100" />
      <StarRating rating={review.rating} />
    </CardHeader>
      <CardContent>
        <CardDescription>{review.content}</CardDescription>
      </CardContent>
      <CardFooter>
        <p className="text-xs text-gray-400">{review.author}</p>
      </CardFooter>
    </Card>
  )
}
