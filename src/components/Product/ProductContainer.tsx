import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil'; 
import { wishListState } from '../../recoil/recoil';    

// types
import { SearchAPIResponse, CategorySearchResponse, KeywordSearchResponse } from '../../types';

// api 
import { getSearchResult } from '../../api/search';
import { getCategoryItems } from '../../api/category';

// component
import ProductCard from './ProductCard';
import Pagination from './Pagination';

// style
import styled from 'styled-components'; 

function useQueryParams() {
    return new URLSearchParams(useLocation().search);
}

function isCategorySearchResponse(response: CategorySearchResponse | KeywordSearchResponse): response is CategorySearchResponse {
    return (response as CategorySearchResponse).itemList !== undefined;
}

const ProductContainer: React.FC = () => {

    const queryParam = useQueryParams();
    const { categoryId } = useParams();
    const keyword = queryParam.get('keyword'); // 키워드로 검색한 경우
    //const categoryId = queryParam.get('categoryId'); // 카테고리 기반 검색한 경우 
    const itemsPerPage = 3; // 일단 3개의 항목을 보여준다고 하드코딩 

    const [currentPage, setCurrentPage] = useState(1);

    // Recoil로부터 찜 목록 상태를 가져옵니다.
    const wishList = useRecoilValue(wishListState);

    useEffect(() => {
        // 검색어 또는 카테고리 ID 가 변경되면 페이지 번호를 1로 초기화
        setCurrentPage(1);
    }, [categoryId, keyword]);

    const queryKey = categoryId ? ['categoryItems',categoryId] : ['searchResults',keyword];
    const queryFn = categoryId 
    ? () => getCategoryItems(Number(categoryId))
    : () => getSearchResult(keyword || '');

    const { data, isLoading, error } = useQuery<SearchAPIResponse,Error>(
        queryKey,
        queryFn,
        { enabled: !!keyword || !!categoryId }
    );

    // 스타일 입히기 
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>An error occurred: {error.message}</div>;
    if (!data) return <div>No results found</div>;
    
    const items = isCategorySearchResponse(data.result) ? data.result.itemList : data.result.list || [];
    const totalItems = data.result.itemCount;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const currentPageItems = items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);


    return (
        <>
        <CardsContainer>
            {currentPageItems.map((product) => (
                <ProductCard key={product.id} product={product} isWished={wishList.some(wishItem => wishItem.id === product.id)}/>
            ))}
        </CardsContainer>
        <PaginationContainer>
            <Pagination totalPages={totalPages} currentPage={currentPage} setPage={setCurrentPage} />
        </PaginationContainer>
        </>
    )
}

/* ProductContainer 컴포넌트 내 CardsContainer 스타일 */
const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    width: 100%;
    max-width: 1200px; // 브라우저 너비에 따라 조정
    margin: 0 auto; // 중앙 정렬
    margin-bottom: 40px; // Pagination과의 간격 조정
`;

const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px 0; // 상하 패딩 추가
    box-sizing: border-box; // 패딩을 너비에 포함
    margin-top: auto; // 부모 컨테이너에서 가능한 모든 여백을 상단에 추가
`;

export default ProductContainer;