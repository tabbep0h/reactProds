import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


const Review = ({ review }) => {
  return (
    <div className="review">
      <h3>{review.name}</h3>
      <p>{review.text}</p>
    </div>
  );
};

const ProductPage = ({ products, setProducts }) => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const params = useParams();
  const product = products.find((x) => x.id === +params.id);

  const addReview = (event) => {
    event.preventDefault();
    setProducts(
      products.map((item) =>
        item.id === product.id ? {...product,reviews: [...product.reviews, { name: name, text: text }],}: item
      )
    );
    setName("");
    setText("");
  };

  return (
    <div>
      <h1>{product.title}</h1>
      <Link to={"/"}>На главную</Link>
      <p>{product.description}</p>
      <h3>{product.reviews ? "Отзывы:" : "Отзывов нет"}</h3>
      {product.reviews.map((review) => (
        <Review review={review} />
      ))}
      <form className="review__form">
        <input type="text" placeholder="Имя"onChange={(event) => setName(event.target.value)} value={name} />
        <textarea placeholder="Отзыв" onChange={(event) => setText(event.target.value)} value={text}></textarea>
        <button type="submit" onClick={addReview}>Добавить отзыв</button>
      </form>
    </div>
  );
};

export default ProductPage;