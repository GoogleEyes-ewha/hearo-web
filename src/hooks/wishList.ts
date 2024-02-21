import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isLogin, wishListState } from '../recoil/recoil';
import { addWishItem, removeWishItem, fetchWishItems } from '../api/wish';

export const useFetchWishListOnLogin = () => {
    const isLoggedIn = useRecoilValue(isLogin);
    const setWishList = useSetRecoilState(wishListState);

    useEffect(() => {
        const fetchAndSetWishList = async () => {
          if (isLoggedIn === 'login') {

            try {
              const response = await fetchWishItems();
              if (response.inSuccess) {
                setWishList(response.result.wishList);
              }
            } 
            catch (e) {
              console.error('Fetching wish list failed:',e);
            }
          }
        };
        fetchAndSetWishList();
    }, [isLoggedIn, setWishList]);
};

export const useAddWishItem = () => {
  const setWishList = useSetRecoilState(wishListState);

  const addWishItemAndUpdateState = async(itemId:number) => {
    try{
      const response = await addWishItem(itemId);
      if(response.inSuccess) {
        setWishList((oldWishList) => [...oldWishList, response.result]);
      }
    }
    catch(e) {
      console.error('Adding wish item failed:', e); 
    }
  };

  return addWishItemAndUpdateState;
};

export const useRemoveWishItem = () => {
  const setWishList = useSetRecoilState(wishListState);

  const removeWishItemAndUpdateState = async(itemId:number) => {
    try{
      const response = await removeWishItem(itemId);
      // if(response.inSuccess) {
      //   setWishList((oldWishList) => oldWishList.filter((item) => item.id !== itemId));
      // }
    }
    catch(e) {
      console.error('Removing wish item failed:', e); 
    }
  };

  return removeWishItemAndUpdateState;
}