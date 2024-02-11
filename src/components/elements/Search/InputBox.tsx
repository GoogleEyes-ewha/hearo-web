import React, { useState }from 'react';
import { useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { searchState } from '../../../recoil/atoms/SearchAtom';

const SearchBar: React.FC = () => {

    const [searchTerm, setSearchTerm ] = useState('');
    const setSearchState = useSetRecoilState(searchState);
    const navigate = useNavigate();
    
    // 엔터키 입력시 검색어 전달
    const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter') {
            setSearchState((prevState) => ({
                ...prevState,
                keyword: searchTerm,
                searchHistory: [...prevState.searchHistory,searchTerm]
            }));
            navigate(`/search/item?keyword=${searchTerm}`);
        }
    };

    // 취소 버튼 클릭시 검색어 초기화
    const handleReset = () => {
        setSearchTerm('');
    };

    return (
        
    )
}