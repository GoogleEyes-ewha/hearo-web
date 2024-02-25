/* API 관련 */
export interface ApiResponse {
    status: number;
    message: string;
    data: any;
};

/* Wish 관련 */
export interface WishItem {
    id: number;
    name: string;
    img: string;
    info: string;
    price: string;
}
  
export interface WishListResponse {
    code: number;
    inSuccess: boolean;
    message: string;
    result: {
      itemCount: string;
      wishList: WishItem[];
    };
}
  
export interface WishActionResponse {
    code: number;
    inSuccess: boolean;
    message: string;
    result: string;
}

/* Product 관련 */
export interface Product {
    id: number;
    name: string;
    img: string;
    info: string;
    price: number;
};

/* Search 관련 */
export interface CategorySearchResponse {
    itemCount: number;
    itemList: Product[]; // 카테고리 검색 응답
}

export interface KeywordSearchResponse {
    keyword: string;
    itemCount: number;
    list: Product[]; // 키워드 검색 응답
}

export interface SearchAPIResponse {
    code: number;
    inSuccess: boolean;
    message: string;
    result: CategorySearchResponse | KeywordSearchResponse;
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

/* UserSettings 관련 */
export enum ComponentType {
    ONE = "ONE",
    THREE = "THREE",
    SIX = "SIX",
    DEFAULT = "",
}



