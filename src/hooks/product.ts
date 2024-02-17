import { useQuery } from "react-query";
import { getItem, getItemReviews, getItemAllReviews } from "../api/product";

interface ReviewData {
  code: number;
  inSuccess: boolean;
  message: string;
  result: {
      positiveSummary: string;
      negativeSummary: string;
  };
}

interface ReviewItem {
  reviewId: number;
  content: string;
}

interface AllReviewData {
  code: number;
  inSuccess: boolean;
  message: string;
  result: {
      reviewCount: number;
      reviewList: ReviewItem[];
  };
}

export const useGetItem = (itemId: string | undefined) => {
  return useQuery(['item', itemId], () => getItem(itemId), {
    enabled: !!itemId, // itemId가 존재할 때만 쿼리 실행
    refetchOnWindowFocus: false,
  });
};

export const useGetItemReviews = (itemId: string | undefined): { data: ReviewData | undefined, isLoading: boolean, error: any }=> {
  return useQuery(['itemReviews', itemId], () => getItemReviews(itemId),{
    enabled: !!itemId,
    refetchOnWindowFocus: false,
  });
};

export const useGetItemAllReviews = (itemId: string | undefined): { data: AllReviewData | undefined, isLoading: boolean, error: any } => {
  return useQuery(['itemAllReviews', itemId], () => getItemAllReviews(itemId),{
    enabled: !!itemId,
  });
};