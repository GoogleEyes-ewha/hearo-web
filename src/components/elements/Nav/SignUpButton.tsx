// 로그인, 로그아웃 버튼 
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';

const SignUpButton: React.FC = () => {
    const navigate = useNavigate();
    const { isAuthenticated, logout } = useAuth();

    const handleSignUpClick = () => {
        if(isAuthenticated) {
            // 로그인이 되어 있을 경우 로그아웃 처리 
            logout();
        }
        else {
            // 로그인이 되어 있지 않을 경우 로그인 페이지로 이동
            navigate('user/login');
        }
    }

    return (
        <button onClick={handleSignUpClick}>
            {isAuthenticated ? '로그아웃' : '로그인'}
        </button>
    );
};

export default SignUpButton;
