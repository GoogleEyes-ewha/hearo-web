import React from 'react';
import Logo from '../assets/images/logo.png';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Header: React.FC = () => {
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate('/main');
    };

    return (
        <Container>
            <LogoImgBox onClick={handleClick}/>
            <LikePageButton />
        </Container>
    );
};

const LikePageButton: React.FC = () => {
    const navigate = useNavigate();

    const handleLikePageClick = () => {
        navigate('/item/wish');
    };

    return (
        <StyledButton onClick={handleLikePageClick}>
            <FavoriteIcon className="icon" />
        </StyledButton>
    )
};

const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0A1128; 
    color: white;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0A1128; 
    }

    .icon {
        margin-right: 8px; 
    }
`

const Container = styled.div`
    position: fixed;
    top: 0;
    display: flex; 
    justify-content: space-between;
    padding: 22px 39.784px 22.583px 51px;
    align-items: center;
    background-color: #73788a;
    width: 100%;
    height: 35.4px;
`

const LogoImgBox = styled.div`
    width: 165px;
    height: 33px;
    background: url(${Logo});
    cursor: pointer;
`

export default Header;