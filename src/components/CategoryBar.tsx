import React from 'react';
import  CategoryButton  from './elements/Category/CategoryButton';

const categories = [{id:1, name:'국•반찬•메인요리'}, {id:2, name:'수산•해산•건어물'}, {id:3, name:'유제품'},
{id:4, name:'간식•과자•떡'}, {id:5, name:'과일•견과•쌀'}, {id:6, name:'정육•가공육•계란'}, {id:7, name:'간편식•밀키트•샐러드'}, {id:8, name:'베이커리'}];

const CategoryBar: React.FC = () => {
    return (
        <div>
            {categories.map((category) => (
                <CategoryButton key={category.id} category={category} />
            ))}
        </div>
    )
};

export default CategoryBar;

