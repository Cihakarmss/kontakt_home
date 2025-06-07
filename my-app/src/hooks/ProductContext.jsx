'use client';
import React, { createContext, useContext, useState } from "react";
import electronics from "@/data/productCardData";

const ProductContext = createContext();

export function ProductProvider({ children }) {
    const [category, setCategory] = useState("telefon");
    const filteredProducts = electronics.filter(product => product.category === category);

    return (
        <ProductContext.Provider value={{
            category,
            setCategory,
            filteredProducts
        }}>
            {children}
        </ProductContext.Provider>
    );
}

export function useProduct() {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error('useProduct must be used within ProductProvider');
    }
    return context;
}
export default ProductContext;