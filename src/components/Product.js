import React from 'react';

import '../styles/Product.scss';

const Product = ({
  title,
  img,
  price,
  authors,
}) => {
  return (
    <div className="product">
      <div className="product__title">
        <span>{title}</span>
        <div className="product__img">
          <img src={img} alt="product image" />
        </div>
        <div className="product__price">
          <span>Price: </span>
          <span>{price}</span>
        </div>
        <div className="product__author">
          <span>Authors: </span>
          <span>{authors}</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
