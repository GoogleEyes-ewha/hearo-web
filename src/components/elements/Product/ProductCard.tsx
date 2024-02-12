import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { authAtom } from '../../../recoil/atoms/AuthAtom';
import { favoriteState } from '../../../recoil/atoms/UserAtom';
import { Product } from '../../../types';

interface ProductCardProps {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  
  const { isAuthenticated } = useRecoilValue(authAtom); // 인증 상태
  const favorites = useRecoilValue(favoriteState);
  

  const isFavorited = favorites.some((favoriteProduct) => favoriteProduct.id === product.id);

  const handleFavoriteClick = () => {
    console.log(`${isFavorited} ? '찜해제' : '찜하기' : ${product.id }`);
  }

  return (
    <Container className="product-card">
      <ProductInfo>
        <h3>{product.name}</h3>
        <p>{product.price.toLocaleString()}원</p>
        <p>{product.info}</p>
        {isAuthenticated && (
          isFavorited ? (
            <button onClick={handleFavoriteClick}>찜해제</button>
          ) : (
            <button onClick={handleFavoriteClick}>찜하기</button>
          )
        )}
      </ProductInfo>
    </Container>
  ) 
};

const Container = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 5px;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: url(product.img), lightgray 50%  / cover no-repeat;
`

const ProductInfo = styled.div`
  padding: 16px;
  background: 
`

const ProductInfo = styled.div`
  width: 300px;
  height: 180px;
  flex-shrink: 0;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.85);
`

export default ProductCard;
