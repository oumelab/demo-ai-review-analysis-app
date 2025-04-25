export type Review = {
  id: number;
  author: string;
  rating: number;
  content: string;
  date: string;
};

export type AISummary = {
  summary: string;
  positivePoints: string[];
  negativePoints: string[];
};
