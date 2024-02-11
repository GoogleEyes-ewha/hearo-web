import React from 'react';
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
    <div className="product-card">
      <img src={product.img} alt={product.name} style={{ width: '100%' }} />
      <h3>{product.name}</h3>
      <p>{product.price.toLocaleString()}원</p>
      <p>{product.info}</p>
      {isAuthenticated && (
        isFavorited ? (
          <button onClick={handleFavoriteClick}>찜해제하기</button>
        ) : (
          <button onClick={handleFavoriteClick}>찜하기</button>
        )
      )}
    </div>
  ) 
};

export default ProductCard;
