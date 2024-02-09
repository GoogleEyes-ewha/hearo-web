import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { productListState, userPreferenceState } from '../../recoil/atoms/ProductAtom';
import ProductItem from '../../elements/Product/ProductCard';
import Navbar from '../../components/Navbar';
import SearchBar from '../../components/SearchBar';
import VoiceSearchButton from '../../elements/Search/VoiceSearchButton';

const SearchList: React.FC = () => {
    const userPreference = useRecoilValue(userPreferenceState);
    const productList = useRecoilValue(productListState);

    // 현재 페이지 상태 
    const [currentPage, setCurrentPage] = useState(1);

    // 사용자가 설정한 페이지 당 아이템 개수 
    const itemPerPage = userPreference.itemPerPage;

    // 현재 페이지에 따른 상품 목록 계산
    const indexOfLastItem = currentPage * itemPerPage;
    const indexOfFirstItem = indexOfLastItem - itemPerPage;
    const currentItems = productList.slice(indexOfFirstItem, indexOfLastItem);

    // 페이지 변경 함수 
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <>
        <Navbar />
        <SearchBar />
        <VoiceSearchButton />
        <div className="product-list">
          {currentItems.map(product => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>

        <div className="pagination">

          <button 
            onClick={() => setCurrentPage(currentPage - 1)} 
            disabled={currentPage === 1}
          >
            {'<'}
          </button>

          <button 
            onClick={() => setCurrentPage(currentPage + 1)} 
            disabled={currentPage === Math.ceil(productList.length / itemPerPage)}
          >
            {'>'}
          </button>
        </div>
      </>
    );
};

export default SearchList;