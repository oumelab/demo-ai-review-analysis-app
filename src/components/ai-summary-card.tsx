import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
// import { Button } from "./ui/button";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {ThumbsUp, ThumbsDown, Pen} from "lucide-react";
import {mockAISummary as AISummary} from "@/constants/data";
import StarRating from "./star-rating";
import useAISummaryLogic from "@/hooks/useAISummaryLogic";

export default function AiSummaryCard() {
  // 静的デプロイのためモックデータに書き換え
  // const { averageRating, AISummary, handleClick, error, isLoading } = useAISummaryLogic();
  const {averageRating} = useAISummaryLogic();

  return (
    <Card className="w-full lg:w-[500px] min-h-[380px] bg-linear-to-tl from-indigo-50 to-white">
      <CardHeader className="text-center">
        <CardTitle className="text-lg">AIによるレビュー分析</CardTitle>
        <CardDescription className="text-xs">
          全レビューの総合的な洞察
        </CardDescription>
        <div className="mt-3 flex justify-center items-center gap-4">
          <span className="text-3xl font-bold">{averageRating}</span>
          <StarRating rating={Math.round(averageRating)} />
        </div>
      </CardHeader>

      {/* {error && !isLoading && (
        <CardContent className="flex justify-center">
          <p className="text-red-500">{error}</p>
        </CardContent>
      )}

      {isLoading && (
        <CardContent className="flex justify-center">
          <p className="text-gray-500">Loading...</p>
        </CardContent>
      )} */}

      {/* {(AISummary === null) && !isLoading ? (
         <CardContent className="flex justify-center">
         <Button onClick={handleClick} className="w-full md:w-fit">
           Generate
         </Button>
       </CardContent>
      ) : !isLoading && AISummary && (      */}
      <CardContent>
        <Tabs defaultValue="summary" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 gap-2">
            <TabsTrigger value="summary">
              <Pen />
              要約
            </TabsTrigger>
            <TabsTrigger value="positive">
              <ThumbsUp />
              評価ポイント
            </TabsTrigger>
            <TabsTrigger value="negative">
              <ThumbsDown />
              改善点
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="summary"
            className="text-sm leading-loose text-gray-600 dark:text-gray-400 max-[524px]:w-full max-w-[480px]"
          >
            {AISummary?.summary}
          </TabsContent>
          <TabsContent value="positive" className="max-[524px]:w-full w-[480px]">
            {AISummary?.positivePoints.map((point, index) => (
              <Badge key={index} variant="outline" className="m-1 py-1">
                {point}
              </Badge>
            ))}
          </TabsContent>
          <TabsContent value="negative" className="max-[524px]:w-full w-[480px]">
            {AISummary?.negativePoints.map((point, index) => (
              <Badge key={index} variant="destructive" className="m-1 py-1">
                {point}
              </Badge>
            ))}
          </TabsContent>
        </Tabs>
      </CardContent>
      {/* )} */}
    </Card>
  );
}
