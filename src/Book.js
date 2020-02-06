import React from "react";
import PropTypes from "prop-types";
import "./Book.css";

function Book({ rank, title, image, priceStandard, priceSales, summary, buy }) {
  function numberFormat(inputNumber) {
    return inputNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <div className="book">
      <img src={image} alt={title} />
      <div className="book__data">
        <h3 className="book__rank">Rank # {rank}</h3>
        <h3 className="book__title">제목 : {title}</h3>
        <h4 className="book__price">정가 : {numberFormat(priceStandard)} 원</h4>
        <h4 className="book__sale">할인가 : {numberFormat(priceSales)} 원</h4>
        <p className="book__summary">{summary.slice(0, 150)}...</p>
        <div className="book__link">
          <a href={buy}>사러가기</a>
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  rank: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  priceStandard: PropTypes.number.isRequired,
  priceSales: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  buy: PropTypes.string.isRequired
};

export default Book;
