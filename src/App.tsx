// import { mockReviews } from "@/constants/data";
import Footer from "./components/footer";
import ReviewList from "./components/review-list";
import ReviewSummary from "./components/review-summary";
// import { Review } from "./types";

export default function App() {

  return (
    <>
      <div className="lg:h-[calc(100vh-84px)] flex flex-col md:flex-row gap-1 lg:gap-16 overflow-y-hidden">
        <div className="lg:w-2/5 lg:min-w-[528px] px-5 py-6 overflow-hidden">
          <ReviewSummary />
        </div>
        <div className="lg:w-3/5 px-5 py-6 overflow-y-auto">
          <ReviewList />
        </div>
      </div>
      <Footer />
    </>
  );
}
