import {Review} from "@/types";
import useSWR, { Fetcher } from "swr";

const SHEET_API_KEY = import.meta.env.VITE_SHEET_API_KEY;
const SHEET_ID = import.meta.env.VITE_SHEET_ID;
const SHEET_NAME = import.meta.env.VITE_SHEET_NAME;
const URL =
  `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}?key=${SHEET_API_KEY}`;

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
