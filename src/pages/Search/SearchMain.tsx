import React, { useEffect } from 'react';
import SettingModal from '../../components/Settings/SettingModal';
import Header from '../../components/Header';
import CategoryBar from '../../components/CategoryBar';
import InputBox from '../../components/Search/SearchBox';
import CategoryButtons from '../../components/CategoryBar';
import { useGetUserSettings } from '../../hooks/settings';
import { useRecoilState } from 'recoil';
import SearchBar from '../../components/SearchBar';
import styled from 'styled-components';
import VoiceSearchButton from '../../components/Search/VoiceSearchButton';

const SearchMain: React.FC = () => {

    // 검색로직 추가 

    return (
        <Container>
            <SettingModal/>
            <Header/>
            <CategoryBar/>
            <InputBox />
            <VoiceSearchButton />
            
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    `

export default SearchMain;