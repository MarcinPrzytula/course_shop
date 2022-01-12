import React from 'react';

import '../styles/Product.scss';

const UserProduct = ({
  title,
  img,
  price,
  authors,
  id,
}) => {
  return (
    <div className="product">
      <div className="product__title">
        <span>{title}</span>
      </div>
      <div className="product__img">
        <img src={img} alt="product " />
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
  );
};

export default UserProduct;
