import React, { useEffect } from 'react';
//import SettingModal from '../../components/Settings/SettingModal';
//import { useUserSettings } from '../../hooks/settings';

import Header from '../../components/Header';
import CategoryBar from '../../components/CategoryBar';
import SearchBar from '../../components/SearchBar';
import ProductContainer from '../../components/Product/ProductContainer';

import styled from 'styled-components';

const SearchResult: React.FC = () => {

    //useUserSettings();

    return (
        <Container>
            {/* <SettingModal/> */}
            <Header/>
            <CategoryBar/>
            <SearchBar />
            <ProductContainer />
            
        </Container>
    );
};

export default SearchResult;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh; // 전체 화면 높이
`;
