// 찜상품 조회 페이지로 이동하는 버튼 
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LikePageButton: React.FC = () => {

    const navigate = useNavigate();

    // 찜 조회 페이지로 이동 
    const handleLikePageClick = () => {
        navigate('/item/wish');
    };

    return (
        <button onClick={handleLikePageClick}>찜 상품 조회</button>
    );
};

export default LikePageButton;