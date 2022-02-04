import React from 'react';

import '../styles/Product.scss';
import ReactPlayer from 'react-player';

import {
  useSelector,
  useDispatch,
} from 'react-redux';

import { addCourseToShoppingCart } from '../store/actions/userActions';

const ProductInProductsList = ({
  title,
  img,
  price,
  authors,
  id,
}) => {
  const users = useSelector(store => store.users);
  const dispatch = useDispatch();

  const render = () => {
    const loggedUser = users.find(
      user => user.logged === true
    );

    if (loggedUser) {
      const checkIfTheCourseInCart =
        loggedUser.shoppingCart.find(
          courseId => courseId === id
        );
      const checkIfTheCourseIsBought =
        loggedUser.purchasedCourses.find(
          courseId => courseId === id
        );
      if (checkIfTheCourseInCart) {
        return 'The course has been added to the cart';
      } else if (checkIfTheCourseIsBought) {
        return 'You already have this course';
      } else
        return (
          <button
            onClick={() => {
              dispatch(
                addCourseToShoppingCart(id)
              );
            }}
          >
            <span>
              Add the product to your cart
            </span>
          </button>
        );
    } else
      return 'Log in if you want to buy a course';
  };
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

      {render()}
    </div>
  );
};

export default ProductInProductsList;
