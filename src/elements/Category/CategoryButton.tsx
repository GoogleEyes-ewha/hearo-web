import React from 'react';
import { useSetRecoilState } from 'recoil';
import CategoryButton from '../../components/CategoryBar';


const categories = ['국•반찬•메인요리','수산•해산•건어물','유제품','간식•과자•떡','과일•견과•쌀','정육•가공육•계란','간편식•밀키트•샐러드','베이커리'];

const CategoryBar: React.FC = () => {

    // search state 업데이트 하는거랑
    // history push 하는거 추가구현 
    /*
    const setSearch = useSetRecoilState(SearchState);
    const history = useHistory();

    const handleCategoryClick = (category: string) => {
        setSearch((prevState) => ({
            ...prevState,
            selectedCategory: category,
            searchTerm: '',
        }));
        history.push(`/search?category=${encodeURIComponent(category)}`);
    };
    */

    return (
        <>
            {categories.map((category) => (
                <CategoryButton
                    key={category} onClick={() => handelCategoryClick(category)}>
                        {category}
                </CategoryButton>
            ))}
        </>
    )

}