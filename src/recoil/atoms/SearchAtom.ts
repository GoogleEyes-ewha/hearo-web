// 검색 관련 상태를 저장하는 atom 
import { atom } from 'recoil';
import { SearchState } from '../../types';

export const searchState = atom<SearchState>({
    key: 'SearchState',
    default: {
        keyword: '',
        categoryId: null,
        searchHistory: [], 
    }
})

