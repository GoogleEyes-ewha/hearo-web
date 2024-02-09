import { atom } from 'recoil';
import { Product } from '../../types';

// 상품 리스트 
// -> 그 때 그 때 카테고리, 검색값에 API 요청 GET 으로 받아올 수 있음 
// export const productListState = atom<Product[]>({
//     key: 'productListState',
//     default: [], 
// });


export const productListState = atom<Product[]>({
    key: 'productListState',
    default: [],
});


// 관심 상품 상태
export const favoriteState = atom<String[]>({
    key: 'favoritesState',
    default: [],
});