import { useState } from "react";
import ProductList from "./ProductList";
import CategoryFilter from "./CategoryFilter";
import { products } from "./Products";

function ProductPage() {

    const [category, setCategory] = useState("모든 카테고리");

    const handleCategoryChange = (selectedCategory) => {
        setCategory(selectedCategory);
    }

    const filteredProducts = category === "모든 카테고리"
                            ? products
                            : products.filter(products => 
                                products.category === category);

                                console.log(products);


    return (
        <>
            <h1>상품 목록</h1>
            <CategoryFilter onCategoryChange={handleCategoryChange} />
            <h1>총 {filteredProducts.length}개의 상품</h1>
            <ProductList products={filteredProducts}/>
        </>
    )
}

export default ProductPage;