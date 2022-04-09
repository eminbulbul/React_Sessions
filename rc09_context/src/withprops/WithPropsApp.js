import React from "react";
import { useState } from "react";
import ProductList from "./ProductList";
const initialProducts = [
  { id: 1, products: "Basketball", price: 12.99 },
  { id: 2, products: "Baseball", price: 9.99 },
  { id: 3, products: "Tennis Racquet", price: 89.99 },
];

const WithPropsApp = () => {
  const [products, setProducts] = useState(initialProducts);
  console.log(products);
  return (
    <div>
      <h3>WithPropsApp</h3>
      <ProductList products={products} />
    </div>
  );
};

export default WithPropsApp;
