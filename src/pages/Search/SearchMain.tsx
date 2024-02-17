import React, { useEffect } from 'react';
import SettingModal from '../../components/Settings/SettingModal';
import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import CategoryBar from '../../components/CategoryBar';
import InputBox from '../../components/Search/SearchBox';
import CategoryButtons from '../../components/CategoryBar';
import VoiceSearchButton from '../../elements/Search/VoiceSearchButton';
import SettingModal from '../../components/Settings/SettingModal';
import VoiceSearchButton from '../../components/Search/VoiceSearchButton';
import { useGetUserSettings } from '../../hooks/settings';
import { useRecoilState } from 'recoil';
import { SearchState } from '../../recoil/atoms/SearchAtom';
import SearchBar from '../../components/SearchBar';
import styled from 'styled-components';

const SearchMain: React.FC = () => {
    const [search,setSearch] = useRecoilState(SearchState);

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

export default SearchMain;