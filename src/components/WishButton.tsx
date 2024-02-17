import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { addWishItem, removeWishItem } from '../api/wish';

interface WishButtonProps {
    itemId: number;
    isWished: boolean;
}

const WishButton: React.FC<WishButtonProps> = ({ itemId, isWished }) => {
    const queryClient = useQueryClient();
  
    const addMutation = useMutation(() => addWishItem(itemId), {
      onSuccess: () => {
        queryClient.invalidateQueries('wishItems');
      },
    });
  
    const removeMutation = useMutation(() => removeWishItem(itemId), {
      onSuccess: () => {
        queryClient.invalidateQueries('wishItems');
      },
    });
  
    return (
      <button
        onClick={() => {
          if (isWished) {
            removeMutation.mutate();
          } else {
            addMutation.mutate();
          }
        }}
        disabled={addMutation.isLoading || removeMutation.isLoading}
      >
        {isWished ? '찜 해제' : '찜하기'}
      </button>
    );
};
  
export default WishButton;