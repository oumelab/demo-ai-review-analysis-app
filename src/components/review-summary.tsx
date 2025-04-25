import AiSummaryCard from "./ai-summary-card";

export default function ReviewSummary() {
  return (
    <div className="w-fit lg:w-[500px] mx-auto space-y-6">
      <h1 className="text-md text-indigo-500 font-semibold">TESTIMONIAL</h1>
      <h2 className="text-5xl leading-snug font-bold">
        参加者からの
        <br />
        率直なレビューを読む
      </h2>
      <AiSummaryCard />
    </div>
  );
}
