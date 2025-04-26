import { Review } from "@/types";

const URL = "https://sheets.googleapis.com/v4/spreadsheets/1MESw82pdLGuyrVMWGb0vMk_p5LIiKpK_2QtJw2C9Jp4/values/mock-reviews?key=AIzaSyABLrOoN2FKx-p8fhpUBrG9j_IWblt1s0w";

export const fetchReviews = async (): Promise<Review[]> => {
  const res = await fetch(URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch reviews");
  }
  const data = await res.json();
  const values = data.values.slice(1);
  const reviews: Review[] = values.map((row: string[]) => ({
    id: parseInt(row[0]),
    author: row[1],
    rating: parseInt(row[2]),
    content: row[3], 
    date: row[4],
    }));

  return reviews;
};