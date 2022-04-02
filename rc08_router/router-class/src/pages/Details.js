import React from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const params = useParams();
  fetch(`https://fakestoreapi.com/products/${params.productId}`)
    .then((res) => res.json())
    .then((json) => console.log(json));

  return <div>Details</div>;
};

export default Details;
