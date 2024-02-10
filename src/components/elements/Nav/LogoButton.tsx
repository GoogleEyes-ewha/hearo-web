// 로고버튼 홈 화면으로 이동 
import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';

const LogoButton: React.FC = () => {
    const navigate = useNavigate();

    // 로고 클릭시 메인 페이지로 이동 
    const handleClick = () => {
        navigate('/main');
    };

    return (
        <button onClick={handleClick} style={{ border: 'none', background: 'transparent' }}>
            <img src={logo} alt="로고" style={{ cursor: 'pointer' }}/>
        </button>
    );
};

export default LogoButton;