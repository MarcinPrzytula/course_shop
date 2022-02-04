import React from 'react';

import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectCourse } from '../store/actions/userActions';

import '../styles/Product.scss';

const ProductInUserPanel = ({
  title,
  img,
  vid,
  price,
  authors,
  id,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();
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
      <button
        onClick={() => {
          dispatch(selectCourse(id));
          history.push('/selected_product');
        }}
      >
        Go to the course
      </button>
    </div>
  );
};

export default ProductInUserPanel;
