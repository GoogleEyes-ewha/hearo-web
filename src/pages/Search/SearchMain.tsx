import React from 'react';
import SettingModal from '../../components/Settings/SettingModal';

import Header from '../../components/Header';
import CategoryBar from '../../components/CategoryBar';
import InputBox from '../../components/Search/SearchBox';
import VoiceSearchButton from '../../components/Search/VoiceSearchButton';

import styled from 'styled-components';

const SearchMain: React.FC = () => {

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

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`