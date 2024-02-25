import React, { useState } from 'react';
import styled from 'styled-components';
import SearchBox from './SearchBox';
import VoiceSearchButton from './VoiceSearchButton';

export default function SearchBar() {
    return (
        <Container>
            <SearchBox/>
            <ButtonContainer>
                <VoiceSearchButton width="90px" height="90px"/>
            </ButtonContainer>
        </Container>    
        );
};

const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    /* max-width: 600px; */
    padding: 10px;
`;

const ButtonContainer = styled.div`
    margin-left: 20px;
`

