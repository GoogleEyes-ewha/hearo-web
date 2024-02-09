
/* Product 관련 */
export interface Product {
    id: number;
    name: string;
    img: string;
    info: string;
    price: number;
};

/* Search 관련 */

export interface SearchResult {
    keyword: string;
    itemCount: number;
    list: Product[];
};

export interface SearchState {
    keyword: string;
    categoryId: string | null;
    searchHistory: string[]; // 검색기록 
}

/* Auth 관련 */
export interface UserInfo {
    id: string;
    name: string;
};


export interface UserState {
    isAuthenticated: boolean;
    accessToken: string;
    refreshToken: string;
    userInfo?: UserInfo;
};