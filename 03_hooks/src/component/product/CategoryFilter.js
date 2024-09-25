import React from "react";

function CategoryFilter({onCategoryChange}) {
    return (
        <div>
            <button onClick={()=> onCategoryChange("모든 카테고리")}>모든 카테고리</button>
            <button onClick={()=> onCategoryChange("전자제품")}>전자제품</button>
            <button onClick={()=> onCategoryChange("의류")}>의류</button>
            <button onClick={()=> onCategoryChange("가전제품")}>가전제품</button>
        </div>
    )
}

export default CategoryFilter;