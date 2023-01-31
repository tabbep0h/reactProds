import React from "react";
import { useNavigate } from "react-router";

const Product = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="product" onClick={() => navigate(`/product/${product.id}`)}>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
    </div>
  );
};

const Products = ({ products }) => {
  return products.map((item) => {
    return <Product key={item.id} product={item} />;
  });
};

export default Products;
