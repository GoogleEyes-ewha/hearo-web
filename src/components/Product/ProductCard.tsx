import React from 'react';
import styled from 'styled-components';

import { useRecoilValue } from 'recoil'; // Recoil 훅 import
import { isLogin } from '../../recoil/recoil'; // 상태 관리 파일에서 isLogin 상태 import
import { Product } from '../../types';
import { useNavigate } from 'react-router-dom';

import WishButton from '../WishButton';

interface ProductCardProps {
  product: Product;
  isWished: boolean; // 찜 상태
  itemsPerPage: number;
};

const ProductCard: React.FC<ProductCardProps> = ({ product, isWished, itemsPerPage }) => {

  const isLoggedIn = useRecoilValue(isLogin); 
  const loginStatus = isLoggedIn === 'login' ? true : false;
  const navigate = useNavigate(); 

  const handleCardClick = () => {
    navigate(`/item/${product.id}`);  
  }

  return (
    <Container itemsPerPage={itemsPerPage} onClick={handleCardClick}>
      <ImgContainer>
        <ProductImg src={product.img} alt={`${product.name} 이미지`}/>  
      </ImgContainer>
      <ProductInfo>
        <h3>{product.name}</h3>
        <p>{product.price}원</p>
        <p>{product.info}</p>
      </ProductInfo>
      {/* {loginStatus && <WishButton itemId={product.id} isWished={isWished} />} */}
    </Container>
  )
};

const Container = styled.div<{ itemsPerPage: number }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  cursor: pointer; 
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); 
  transition: transform 0.2s; 
  position: relative;

  &:hover {
    transform: translateY(-5px); // 호버 시 약간 위로 올라가는 효과
    opacity: 1;
    visibility:1 ;
  }
`;

const ImgContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const ProductImg = styled.img`
  border-radius: 20px;
  object-position: center;
  object-fit: cover;
`

const ProductInfo = styled.div`
  height: 180px;
  border-radius: 5px;
  background: transparent;
  font-family: SUIT;
  font-style: bold;
  color: #fff;
`

export default ProductCard;
