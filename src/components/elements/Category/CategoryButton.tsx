// 카테고리 버튼 
import React from 'react';
import  { useNavigate } from 'react-router-dom';

interface CategoryButtonProps {
    category: { id: number; name: string }; 
}; 

const CategoryButton: React.FC<CategoryButtonProps> = ({ category }) => {
    const navigate = useNavigate();

    const handleCategoryClick = () => {
        // URL 로 카테고리 id 전달
        navigate(`/item/${category.id}`);
    };

    return (
        <button onClick={handleCategoryClick}>{category.name}</button>
    );
};

export default CategoryButton;

