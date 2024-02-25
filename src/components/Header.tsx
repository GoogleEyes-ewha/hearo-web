import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import axiosInstance from '../api/axios';

import { isLogin, userNameState } from '../recoil/recoil'

import styled from 'styled-components';
import loginButton from '../assets/images/loginButton.png';
import Logo from '../assets/images/logo.png';
import Cookies from 'js-cookie';
import { useGetUserInfo } from '../hooks/settings';
import { QueryClient } from 'react-query';
//import FavoriteIcon from '@mui/icons-material/Favorite';

const queryClient = new QueryClient();

// Header
const Header: React.FC = () => {
    const navigate = useNavigate();
    const [loginState, setLoginState] = useRecoilState(isLogin);
    const [username, setUsername] = useRecoilState(userNameState);

    useGetUserInfo();


    const handleLoginClick = () => {
        if(loginState === 'login') {
            Cookies.remove('accessToken');
            Cookies.remove('refreshToken');
            queryClient.invalidateQueries('userInfo');
            setLoginState('logout');
            navigate('/main');
        }
        navigate('/login');

    };

    const handleClick = () => {
        navigate('/main');
    };

    return (
        <Container>
            <LogoImgBox onClick={handleClick}/>
            <>
            {loginState === 'login' && username ? 
            (
                <>
                    <WelcomeMessage>{username} ! welcome :D</WelcomeMessage>
                    <StyledLogoutButton onClick={handleLoginClick}>Logout</StyledLogoutButton>
                </>
            ):(
                <StyledButton onClick={handleLoginClick}>
                    <img src={loginButton} alt="login" />
                </StyledButton>
            )}
        </>
            {/* <LikePageButton /> */}
        </Container>
    );
};

// // Like Page 
// const LikePageButton: React.FC = () => {
//     const navigate = useNavigate();

//     const handleLikePageClick = () => {
//         navigate('/item/wish');
//     };

//     return (
//         <StyledButton onClick={handleLikePageClick}>
//             <FavoriteIcon className="icon" />
//         </StyledButton>
//     )
// };

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
const StyledLogoutButton = styled.button`
    border-radius: 30px;
    border: none;
    width: 150px;
    height: 50px;

    color: #FFF;
    background-color:#0A1128;
    font-family: SUIT;
    font-size: 25px;
    font-weight: bold;
    margin-top: 5px;

    &:hover {
        color: #0A1128;
        background-color: #FFF2B2; 
    }
`

const WelcomeMessage = styled.div`
    color: #fff;
    font-family: SUIT;
    font-weight: bold;
    font-size: 25px;

    margin-top: 5px;
`

const Container = styled.div`
    position: fixed;
    top: 0;
    display: flex; 
    justify-content: space-between;
    padding: 22px 39.784px 22.583px 51px;
    align-items: center;
    background-color: #73788a;
    width: 98%;
    height: 35.4px;
    z-index: 100;
`

const LogoImgBox = styled.div`
    width: 165px;
    height: 33px;
    background: url(${Logo});
    cursor: pointer;
`

export default Header;