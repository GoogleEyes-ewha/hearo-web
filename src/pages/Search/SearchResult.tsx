import React from 'react';
import { useRecoilState } from 'recoil';
import { userSettingsState } from '../../recoil/recoil';

import Header from '../../components/Header';
import CategoryBar from '../../components/CategoryBar';
import SearchBar from '../../components/Search/SearchBar';
import ProductContainer from '../../components/Product/ProductContainer';

import styled from 'styled-components';

import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const SearchResult: React.FC = () => {

    // const [userSettings, setUserSettings] = useRecoilState(userSettingsState);

    // const handleFloatingButtonClick = () => {

    // };

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
    display: flex;
    width: 100%;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
`
const FloatingButton = styled(Fab)`
    position: absolute; /* 플로팅 버튼의 위치를 조정하기 위해 절대 위치 설정 */
    bottom: 20px; /* 아래에서 20px 떨어진 위치에 배치 */
    right: 20px; /* 오른쪽에서 20px 떨어진 위치에 배치 */
    width: 50px; /* 버튼의 너비 */
    height: 50px; /* 버튼의 높이 */
    background-color: #007bff; /* 배경색 설정 */
    color: #fff; /* 텍스트 색상 설정 */
    border: none; /* 테두리 제거 */
    border-radius: 50%; /* 원형 모양으로 만들기 위해 border-radius 적용 */
    cursor: pointer; /* 마우스 포인터를 버튼 위에 올렸을 때 손가락 모양으로 변경 */
    display: flex; /* 아이콘과 텍스트를 가로 정렬하기 위해 flex 사용 */
    justify-content: center; /* 아이콘과 텍스트를 가운데 정렬하기 위해 사용 */
    align-items: center; /* 아이콘과 텍스트를 세로 가운데 정렬하기 위해 사용 */
    font-size: 24px; /* 아이콘 크기 설정 */
`
