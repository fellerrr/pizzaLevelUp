import React from 'react';

const Categories = ({category, setCategory}) => {
    const categories = ['Все','Мясные','Вегетарианская','Гриль','Острые','Закрытые']

    return (
        <div className="categories">
            <ul>
                {categories.map((el,idx)=>
                    <li key={idx} onClick={()=>setCategory(idx)} className={category === idx ? 'active' : ''}>{el}</li>)}
            </ul>
        </div>
    );
};

export default Categories;