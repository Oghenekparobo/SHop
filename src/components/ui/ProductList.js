import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({product}) => {
  return (
    <>
    {product?.map((item)=>(
    <ProductCard key={item.id} item={item}/>
    ))}
  
    
    </>
  );
};

export default ProductList;
