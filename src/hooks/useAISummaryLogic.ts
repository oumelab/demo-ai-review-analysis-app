import { mockReviews } from "@/constants/data";
// import { type AISummary } from "@/types";
// import { GoogleGenAI } from "@google/genai";
// import { useState } from "react";

// レビューの平均評価を計算する関数
const calculateAverageRating = (reviews: { rating: number }[]): number => {
  if (reviews.length === 0) {
    return 0;
  }
  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
  const average =  totalRating / reviews.length;
  return Math.round(average * 10) / 10;
};

export default function useAISummaryLogic() {
  // const [AISummary, setAISummary] = useState<null | AISummary>(null);
  // const [error, setError] = useState<string | null>(null);
  // const [isLoading, setIsLoading] = useState(false);

  // レビューの平均評価を計算する関数
  const averageRating = calculateAverageRating(mockReviews);

  // const genAI = new GoogleGenAI({apiKey: import.meta.env.VITE_GEMINI_API_KEY});

  // const prompt = `Write a summary of the reviews for the tech event.
  //     The event's average rating is ${averageRating} out of 5 stars. 
  //     Your goal is to highlight the most common themes and sentiments expressed by customers.
  //     If multiple themes are present, try to capture the most important ones.
  //     If no patterns emerge but there is a shared sentiment, capture that instead.
  //     Try to use natural language and keep the summary concise.
  //     Use a maximum of 4 sentences and 30 words.
  //     Don't include any word count or character count.
  //     No need to reference which reviews you're summarizing.
  //     Do not reference the star rating in the summary.
  //     And the final results should be output in Japanese.
  
  //     Output should be only plain text, like a single JSON object, such as:
  //     {
  //         summary: "",
  //         positivePoints: [],
  //         negativePoints: [],
  //     };
  
  //     Here are examples of a good summarie:
  //     Example 1: 講演やパネルディスカッションが印象的で、多くの参加者が内容を高く評価しました。ネットワーキングの機会が豊富で、人脈作りに役立ったという声もありました。一方、会場の音響設備に改善の余地を感じた意見がありました。全体的に運営のスムーズさが参加者に好評でした。
  
  //     Accompanying the output is an array of 1 to 3 concise "positivePoints" and "negativePoints".
  
  //     The customer reviews to summarize are as follows:
  //     ${mockReviews
  //       .map((review, i) => `Review ${i + 1}:\n${review.content}`)
  //       .join("\n\n")}`;

  // const handleClick = async () => {
  //   try {
  //     setIsLoading(true);
  //     const response = await genAI.models.generateContent({
  //       model: "gemini-1.5-flash",
  //       contents: prompt,
  //     });
  //     const text = response.text;
  //     if (text) {
  //       const jsonData = JSON.parse(text) as AISummary;
  //       setAISummary(jsonData);
  //       setError(null);
  //       setIsLoading(false);
  //     }
  //   } catch (error) {
  //     setIsLoading(false);
  //     console.error(error);
  //     setError("レビュー要約の生成に失敗しました。");
  //   }
  // };
  return {
    // AISummary,
    averageRating,
    // handleClick,
    // error,
    // isLoading,
  };
}