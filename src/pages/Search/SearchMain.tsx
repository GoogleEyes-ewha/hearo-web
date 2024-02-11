import React from 'react';
import Navbar from '../../components/Navbar';
import CategoryButtons from '../../components/CategoryBar';
import VoiceSearchButton from '../../components/elements/Search/VoiceSearchButton';
import { useRecoilState } from 'recoil';
import { SearchState } from '../../recoil/atoms/SearchAtom';
import SearchBar from '../../components/SearchBar';

const SearchMain: React.FC = () => {
    const [search,setSearch] = useRecoilState(SearchState);

    // 검색로직 추가 

    return (
        <>
            <Navbar />
            <CategoryButtons />
            <SearchBar />
            <VoiceSearchButton />
            {/* 검색 관련 컴포넌트들 추가 */}
        </>
    );
};

export default SearchMain;