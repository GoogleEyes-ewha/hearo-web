import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isLogin, wishListState } from '../recoil/recoil';
//import { fetchWishItems } from '../api/wish';

export const useFetchWishListOnLogin = () => {
    const isLoggedIn = useRecoilValue(isLogin);
    const setWishList = useSetRecoilState(wishListState);

    useEffect(() => {
        // const fetchAndSetWishList = async () => {
        //   if (isLoggedIn === 'login') {
        //     //const response = await fetchWishItems();
        //     if (response.inSuccess) {
        //       setWishList(response.result.wishList);
        //     }
        //   }
        // };
    
        //fetchAndSetWishList();
      }, [isLoggedIn, setWishList]);
    };