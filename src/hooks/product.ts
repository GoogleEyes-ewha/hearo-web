import { useQuery } from "react-query";
import { getItem } from "../api/product";

export const useGetItem = (itemId: string | undefined) => {
    return useQuery(['item', itemId], () => getItem(itemId), {
      enabled: !!itemId, // itemId가 존재할 때만 쿼리 실행
    });
  };