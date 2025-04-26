// import { mockReviews } from "@/constants/data";
import Footer from "./components/footer";
import ReviewList from "./components/review-list";
import ReviewSummary from "./components/review-summary";
import { Button } from "./components/ui/button";
import {useReview} from "./hooks/useReview";
// import { Review } from "./types";

export default function App() {
  const {reviews, isError, isLoading, mutate} = useReview();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return (
      <div className="flex flex-col justify-center items-center gap-4 w-fit mx-auto h-screen">
        <p>レビューの取得に失敗しました。</p>
        <p><Button onClick={()=> mutate}>再試行</Button></p>
      </div>
    );
  }

  return (
    <>
      <div className="lg:h-[calc(100vh-84px)] flex flex-col md:flex-row gap-1 lg:gap-16 overflow-y-hidden">
        <div className="lg:w-2/5 lg:min-w-[528px] px-5 py-6 overflow-hidden">
          <ReviewSummary />
        </div>
        <div className="lg:w-3/5 px-5 py-6 overflow-y-auto">
          <div className="lg:max-w-[600px]">
            <h2 className="text-lg font-bold mb-6">全てのレビュー</h2>
            {reviews.map((review) => (
              <ReviewList review={review} key={review.id} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
