import React from 'react';

import '../styles/Product.scss';

import {
  useSelector,
  useDispatch,
} from 'react-redux';

const Product = ({
  title,
  img,
  price,
  authors,
  id,
}) => {
  const { users, courses } = useSelector(
    store => store
  );

  const dispatch = useDispatch();

  const loggedUser = users.find(
    user => user.logged === true
  );
  let checkIfTheCourseInCart = null;

  if (loggedUser) {
    checkIfTheCourseInCart = courses.find(
      course => course.id === id
    );
  }
  return (
    <div className="product">
      <div className="product__video"></div>
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

      {loggedUser ? (
        checkIfTheCourseInCart ? (
          'The course has been added to the cart'
        ) : (
          <button onClick={() => {}}>
            <span>Buy</span>
          </button>
        )
      ) : (
        'Log in if you want to buy a course'
      )}
    </div>
  );
};

export default Product;
