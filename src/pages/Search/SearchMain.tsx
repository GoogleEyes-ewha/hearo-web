import React from 'react';
import SettingModal from '../../components/Settings/SettingModal';
import Header from '../../components/Header';
import CategoryBar from '../../components/CategoryBar';
import InputBox from '../../components/Search/SearchBox';
import styled from 'styled-components';
import VoiceSearchButton from '../../components/Search/VoiceSearchButton';

const SearchMain: React.FC = () => {

    return (
        <Container>
            <SettingModal/>
            <Header/>
            <CategoryContainer>
                <CategoryBar/>
            </CategoryContainer>
            <InputBoxContainer>
                <InputBox />
            </InputBoxContainer>
            <MicButtonContainer>
                <VoiceSearchButton width="100px" height="100px"/>
            </MicButtonContainer>
        </Container>
    );
};

export default SearchMain;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    margin-top: 20px;
    `

const CategoryContainer = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    margin-top: 150px;
`
const InputBoxContainer = styled.div`
    margin-top: 100px;
`
const MicButtonContainer = styled.div`
    margin-top: 50px;
`
