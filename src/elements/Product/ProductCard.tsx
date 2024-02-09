import React from 'react';
import { Product } from '../../recoil/atoms/ProductAtom';

interface ProductCardProps {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // 찜하기 상태와 로직 추가 필요 

  return (
    <div className="product-card">
      <img src={product.img} alt={product.name} style={{ width: '100%' }} />
      <h3>{product.name}</h3>
      <p>{product.price.toLocaleString()}원</p>
      <p>{product.info}</p>
      <button onClick={() => console.log(`찜하기: ${product.id}`)}>찜하기</button>
    </div>
  ) 
};

export default ProductCard;
