import React from "react";
import PropTypes from "prop-types";
import "./Book.css";

function Book({
  year,
  best,
  author,
  rating,
  title,
  summary,
  poster,
  price,
  sale,
  buy
}) {
  return (
    <div className="book">
      <h1 className="book__rank">Rank # {best}</h1>
      <h1 className="book__title">{title}</h1>
      <img src={poster} alt={title} width="200" height="300" />
      <h3>{author}</h3>
      <h3>{year}</h3>
      <h3 className="book__rank">평점 : {rating} / 10</h3>
      <h5 className="book__desc">{summary}</h5>
      <h4 className="book__price">정가 : {price}</h4>
      <h2 className="book__salePrice">할인가 : {sale}</h2>
      <div className="book__buy">
        <a className="book__link" href={buy}>
          사러가기
        </a>
      </div>
    </div>
  );
}

Book.propTypes = {
  year: PropTypes.string.isRequired,
  best: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  sale: PropTypes.number.isRequired,
  buy: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

export default Book;
