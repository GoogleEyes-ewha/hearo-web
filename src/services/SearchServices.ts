import axios from 'axios';
import { SearchResult } from '../types';

// category 검색 
export const fetchProductsByCategory = async (categoryId: string) => {
    try {
        const response = await axios.get<SearchResult>(`/item/${categoryId}`);
        return response.data; // 데이터 형식에 따라 조정 필요
    }
    catch (error) {
        throw new Error('상품을 불러오는데 실패했습니다.');
    }
};

// search bar 검색 
export const fetchProductsByKeyword = async (keyword: string) => {
    const response = await axios.get(`/item?keyword=${keyword}`);
    return response.data; // 데이터 형식에 따라 조정 필요 
}
