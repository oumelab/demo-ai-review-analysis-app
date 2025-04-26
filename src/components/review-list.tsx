import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {Review} from "@/types";
import {QuoteIcon} from "lucide-react";
import StarRating from "./star-rating";
import {useReview} from "@/hooks/useReview";
import {Button} from "./ui/button";

export default function ReviewList() {
  const {reviews, isError, isLoading, mutate} = useReview();

  return (
    <div className="lg:max-w-[600px]">
      <h2 className="text-lg font-bold mb-6">全てのレビュー</h2>
      {isLoading ? (
        <div className="grid place-content-center h-screen w-fit mx-auto text-lg text-neutral-300 font-bold">
          Loading...
        </div>
      ) : isError ? (
        <ErrorFallback mutate={mutate} />
      ) : reviews.length === 0 ? (
        <div className="grid place-content-center h-screen w-fit mx-auto text-lg text-neutral-300 font-bold">
        レビューはありません。
      </div>
      ) : (
        reviews.map((review) => <ReviewCard review={review} key={review.id} />)
      )}
    </div>
  );
}

const ReviewCard = ({review}: {review: Review}) => {
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
  );
};

const ErrorFallback = ({mutate}: {mutate: () => void}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 w-fit mx-auto h-screen">
      <p>レビューの取得に失敗しました。</p>
      <p>
        <Button
          onClick={() => {
            mutate();
          }}
        >
          再試行
        </Button>
      </p>
    </div>
  );
};
