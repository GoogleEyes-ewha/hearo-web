import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil'; 
import { wishListState, userSettingsState } from '../../recoil/recoil';    

// types
import { SearchAPIResponse, CategorySearchResponse, KeywordSearchResponse, ComponentType } from '../../types';

// api 
import { getSearchResult } from '../../api/search';
import { getCategoryItems } from '../../api/category';

// component
import ProductCard from './ProductCard';
import Pagination from './Pagination';

// style
import styled from 'styled-components'; 
import { useGetUserSettings } from '../../hooks/settings';

function useQueryParams() {
    return new URLSearchParams(useLocation().search);
}

function isCategorySearchResponse(response: CategorySearchResponse | KeywordSearchResponse): response is CategorySearchResponse {
    return (response as CategorySearchResponse).itemList !== undefined;
}

const ProductContainer: React.FC = () => {
    const {data: userInfo} = useGetUserSettings();
    const queryParam = useQueryParams();
    const keyword = queryParam.get('keyword'); // 키워드로 검색한 경우
    const { categoryId } = useParams();

    console.log('componentType'+JSON.stringify(userInfo));
    const componentTypeNum = userInfo?.result?.componentType;
    
    const itemsPerPage = componentTypeNum == ComponentType.THREE ? 3  
                        : (componentTypeNum == ComponentType.ONE ? 1 : 6);

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
        <Container>
        <CardsContainer itemsPerPage={itemsPerPage}>
            {currentPageItems.map((product) => (
                <ProductCard key={product.id} product={product} isWished={wishList.some(wishItem => wishItem.id === product.id)} itemsperpage={itemsPerPage}/>
            ))}
        </CardsContainer>
        <PaginationContainer>
            <Pagination totalPages={totalPages} currentPage={currentPage} setPage={setCurrentPage} />
        </PaginationContainer>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    justify-content: center;
`
const CardsContainer = styled.div<{ itemsPerPage: number }>`
    /* display: grid;
    grid-template-columns: repeat(${props => props.itemsPerPage}, 1fr);
    grid-gap: 20px;
    padding: 20px;
    width: 100%; */

    display: grid;
    grid-gap: 20px; /* 그리드 아이템 사이의 간격 */
    justify-content: center; /* 그리드 아이템을 중앙 정렬 */
    ${props => props.itemsPerPage === 1 && `
        grid-template-columns: repeat(1, 1fr);
    `}
    ${props => props.itemsPerPage === 3 && `
        grid-template-columns: repeat(3, 1fr);
    `}
    ${props => props.itemsPerPage === 6 && `
        grid-template-columns: repeat(3, 1fr); /* 2행 3열을 위해 3개의 열을 정의 */
    `}
    width: 100%; /* 컨테이너의 전체 너비 */
    margin-bottom: 100px;

    /* display: flex;
    flex-wrap: wrap;
    gap: 20px; 
    justify-content: center;
    ${props => props.itemsPerPage === 1 && `
    & > div {
        flex: 0 0 100%;
    }
    `}
    ${props => props.itemsPerPage === 3 && `
    & > div {
        flex: 0 0 calc(33.333% - 20px);
    }
    `}
    ${props => props.itemsPerPage === 6 && `
    & > div {
        flex: 0 0 calc(50% - 20px);
    }
    `} */
`;

const PaginationContainer = styled.div`
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px 0; // 상하 패딩 추가
    box-sizing: border-box; // 패딩을 너비에 포함
    bottom: 20px;
`;

export default ProductContainer;