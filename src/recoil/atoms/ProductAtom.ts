import { atom } from 'recoil';
import { Product } from '../../types';

// 상황에 맞는 상품 리스트 
export const productListState = atom<Product[]>({
    key: 'productListState',
    default: [],
});


