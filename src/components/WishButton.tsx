import React from 'react';
import { useAddWishItem, useRemoveWishItem } from '../hooks/wishList';  

interface WishButtonProps {
    itemId: number;
    isWished: boolean; // 찜 상태 
}

const WishButton: React.FC<WishButtonProps> = ({ itemId, isWished }) => {

    const addWishItem = useAddWishItem();
    const removeWishItem = useRemoveWishItem();

    const handleClick = async () => {
      if(isWished) {
        await removeWishItem(itemId);
      }
      else {
        await addWishItem(itemId);
      }
    };
    
    
    return (
      <button onClick={handleClick}>
        {isWished ? '찜 해제' : '찜하기'}
      </button>
    );
};
  
export default WishButton;