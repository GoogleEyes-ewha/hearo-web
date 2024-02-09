import React from 'react';

// 개별 카테고리 버튼 컴포넌트 

interface CategoryButtonProps {
    category: string;
    onClick: () => void;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ category, onClick }) => {
    return (
        <button onClick={onClick}>
            {category}
        </button>
    );
}

export default CategoryButton;