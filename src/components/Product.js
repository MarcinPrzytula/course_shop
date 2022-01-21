import React from 'react';

import '../styles/Product.scss';

import {
  useSelector,
  useDispatch,
} from 'react-redux';

import { addCourseToShoppingCart } from '../store/actions/userActions';

const Product = ({
  title,
  img,
  price,
  authors,
  id,
}) => {
  const users = useSelector(store => store.users);
  const dispatch = useDispatch();

  const loggedUser = users.find(
    user => user.logged === true
  );
  let checkIfTheCourseInCart = null;
  let checkIfTheCourseIsBought = null;

  if (loggedUser) {
    checkIfTheCourseInCart =
      loggedUser.shoppingCart.find(
        courseId => courseId === id
      );
    checkIfTheCourseIsBought =
      loggedUser.purchasedCourses.find(
        courseId => courseId === id
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
        ) : checkIfTheCourseIsBought ? (
          'bought'
        ) : (
          <button
            onClick={() => {
              dispatch(
                addCourseToShoppingCart(id)
              );
            }}
          >
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
