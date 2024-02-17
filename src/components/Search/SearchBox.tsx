import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  
import styled from 'styled-components';

const SearchBox: React.FC = () => {

    const [keyword, setKeyword] = useState('');
    const navigate = useNavigate();

    const handleSearch = (event:React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key == 'Enter' && keyword.trim()) { // keyword 가 비어있지 않은 경우에만 
            navigate(`/item?keyword=${encodeURIComponent(keyword)}`);
        }
    };

    return (
        <InputContainer>
            <StyledInput type="text" value={keyword} onChange={(e)=>setKeyword(e.target.value)} onKeyDown={handleSearch} />
            <CloseIcon viewBox="0 0 50 50" onClick={() => setKeyword('')}>
                <path d="M24.9998 45.8337C36.5061 45.8337 45.8332 36.5066 45.8332 25.0003C45.8332 13.4941 36.5061 4.16699 24.9998 4.16699C13.4936 4.16699 4.1665 13.4941 4.1665 25.0003C4.1665 36.5066 13.4936 45.8337 24.9998 45.8337ZM31.2498 33.3337L18.7498 16.667L31.2498 33.3337ZM18.7498 33.3337L24.9998 25.0003L31.2498 16.667" fill="#D9D9D9"/>
                <path d="M31.2498 33.3337L18.7498 16.667M18.7498 33.3337L24.9998 25.0003L31.2498 16.667M24.9998 45.8337C36.5061 45.8337 45.8332 36.5066 45.8332 25.0003C45.8332 13.4941 36.5061 4.16699 24.9998 4.16699C13.4936 4.16699 4.1665 13.4941 4.1665 25.0003C4.1665 36.5066 13.4936 45.8337 24.9998 45.8337Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </CloseIcon>
        </InputContainer>
    )
}

const InputContainer = styled.div`
    position: relative;
    width: 901px;
    height: 92px;

    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

const StyledInput = styled.input`
    width: 100%;
    height: 100%;
    padding-right: 60px; // Make room for the icon
    box-sizing: border-box;

    border: 5px solid #FFF;
    border-radius: 46px; // Half of the height to make it perfectly round
    background-color: #fff;
    color: #000;
    font-size: 20px; // Adjust font size as needed

    &:focus {
        outline: none;
  }
`

const CloseIcon = styled.svg`
    position: absolute;
    top: 21px; // Centers the icon vertically inside the input
    right: 21px; // Position from the right edge of the input container
    width: 50px;
    height: 50px;
    fill: #D9D9D9;
    cursor: pointer;
`

export default SearchBox;