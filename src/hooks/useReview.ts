import {Review} from "@/types";
import useSWR, { Fetcher } from "swr";

const URL =
  "https://sheets.googleapis.com/v4/spreadsheets/1MESw82pdLGuyrVMWGb0vMk_p5LIiKpK_2QtJw2C9Jp4/values/mock-reviews?key=AIzaSyABLrOoN2FKx-p8fhpUBrG9j_IWblt1s0w";

  interface GoogleSheetResponse {
    values: string[][];
  }

const fetcher: Fetcher<GoogleSheetResponse, string> = (url: string) =>
  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

export const useReview = () => {
  const {data, error, mutate} = useSWR<GoogleSheetResponse, Error>(URL, fetcher);

  console.log("data", data);
  const valuesWithoutHeader = data?.values.slice(1);
  const reviews: Review[] = valuesWithoutHeader?.map((row: string[]) => ({
    id: parseInt(row[0]),
    author: row[1],
    rating: parseInt(row[2]),
    content: row[3],
    date: row[4],
  })) || [];

  return {
    reviews,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};
