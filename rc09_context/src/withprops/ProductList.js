import React from "react";
import Product from "./Product";

const ProductList = ({ products }) => {
  console.log(products);
  return (
    <div>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
      <Product />
    </div>
  );
};

export default ProductList;
