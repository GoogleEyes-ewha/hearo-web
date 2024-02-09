import React from 'react';
import { useRecoilState} from 'recoil';
import { SearchState } from '../recoil/atoms/SearchAtom';

const SearchBar: React.FC = () => {
    const [search, setSearch] = useRecoilState(SearchState);

    const updateSearchTerm = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch({...search, searchTerm: event.target.value});
    };
    
    const clearSearchTerm = () => {
        setSearch({...search, searchTerm: ''});
    };
    
    return (
        <div>
            <input
                type="text"
                value={search.searchTerm}
                onChange={updateSearchTerm}
                placeholder="검색어를 입력하세요"   
            />
            {search.searchTerm && (
                <button onClick={clearSearchTerm}> X </button>
            )}
        </div>
    );
};

export default SearchBar;

