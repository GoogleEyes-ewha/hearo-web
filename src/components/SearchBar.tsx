import React, { useState } from 'react';
import styled from 'styled-components';
import SearchBox from './Search/SearchBox';
import VoiceSearchButton from './Search/VoiceSearchButton';

export default function SearchBar() {
    return (
        <Container>
            <SearchBox/>
            <VoiceSearchButton/>
        </Container>    
        );
};

const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 600px;
    margin: 0 auto; /* 마진을 통해 상단과 하단의 간격 조정 */
    padding: 20px 0; /* 위 아래 패딩 추가 */
`;

