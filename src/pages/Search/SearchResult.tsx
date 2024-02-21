import React from 'react';

import Header from '../../components/Header';
import CategoryBar from '../../components/CategoryBar';
import SearchBar from '../../components/Search/SearchBar';
import ProductContainer from '../../components/Product/ProductContainer';

import styled from 'styled-components';

const SearchResult: React.FC = () => {

    return (
        <Container>
            <Header/>
            <CategoryContainer>
                <CategoryBar/>
            </CategoryContainer>
            <SearchBar />
            <Wrapper>
                <ProductContainer />
            </Wrapper>
        </Container>
    );
};

export default SearchResult;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 100vh; // 전체 화면 높이
`;

const CategoryContainer = styled.div`
    width: 90%;
    justify-content: center;
    margin-top: 80px;
`
const Wrapper = styled.div`
    margin-top: 20px;
`
