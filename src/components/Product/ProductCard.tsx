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
};

const ProductCard: React.FC<ProductCardProps> = ({ product, isWished }) => {

  const isLoggedIn = useRecoilValue(isLogin); 
  const loginStatus = isLoggedIn === 'login' ? true : false;
  const navigate = useNavigate(); 
  // 개수에 따른 card 크기 조절
  // 로그인 상태에 따른 찜 상태 표시 

  const handleCardClick = () => {
    navigate(`/item/${product.id}`);  
  }

  return (
    <Container onClick={handleCardClick}>
      <ProductInfo>
        <img src={product.img} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.price}원</p>
        <p>{product.info}</p>
      </ProductInfo>
      {loginStatus && <WishButton itemId={product.id} isWished={isWished} />}
    </Container>
  )
};

const Container = styled.div`
  border-radius: 5px;
  background-size: cover;
  background-position: center;
  cursor: pointer; // 클릭 가능한 항목임을 나타내는 마우스 커서
  /* overflow: hidden; // 내용이 넘칠 경우 숨김 처리 */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); // 그림자 효과 추가
  transition: transform 0.2s; // 호버 시 애니메이션 효과

  &:hover {
    transform: translateY(-5px); // 호버 시 약간 위로 올라가는 효과
  }
`;

const ProductInfo = styled.div`
  width: 300px;
  height: 180px;
  flex-shrink: 0;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.85);
  color: #FFF;
`

export default ProductCard;
