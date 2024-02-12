import React, { useEffect } from 'react';
import Header from '../../components/Header';
import styled from 'styled-components';
import SettingModal from '../../components/Settings/SettingModal';
import { useUserSettings } from '../../hooks/settings';

const SearchMain: React.FC = () => {

    useUserSettings();

    return (
        <Container>
            <SettingModal/>
            <Header/>
        </Container>
    );
};

export default SearchMain;

const Container = styled.div`
`