import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface CategoryButtonProps {
    category: { id: number; name: string;};
};

const categories = [
    {id: 1, name: '국•반찬•메인요리'},
    {id: 2, name: '수산•해산•건어물'},
    {id: 3, name: '유제품'},
    {id: 4, name: '간식•과자•떡'},
    {id: 5, name: '과일•견과•쌀'},
    {id: 6, name: '정육•가공육•계란'},
    {id: 7, name: '간편식•밀키트•샐러드'},
    {id: 8, name: '베이커리'}
];

const CategoryButton: React.FC<CategoryButtonProps> = ({ category }) => {
    const navigate = useNavigate();

    const handleCategoryClick = () => {
        navigate(`/item/category/${category.id}`);
    };

    return (
        <CategoryBarButton onClick={handleCategoryClick}>{category.name}</CategoryBarButton>
    );
}

const CategoryBar: React.FC = () => {
    return (
        <CategoryBarContainer>
            {categories.map((category) => (
                <CategoryButton key={category.id} category={category} />
            ))}
        </CategoryBarContainer>
    );
};

const CategoryBarButton = styled.button`
    width: 227px;
    height: 63px;
    flex-shrink: 0;

    border-radius: 30px;
    border: 3px solid #ffffff88;
    background-color: transparent; 
    color: #FFF;
    margin: 10px;
    cursor: pointer;

    font-family: SUIT;
    font-weight: bold;
    font-size: 18px;

    &:hover {
        background-color: #FFF;
        color: #000;
    }
`

const CategoryBarContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 20px;
    /* gap: 20px; */
    /* margin-top: 50px;  */
`


export default CategoryBar;