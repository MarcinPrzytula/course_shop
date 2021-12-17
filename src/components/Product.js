import React from 'react';

import '../styles/Product.scss';

import {
  useSelector,
  useDispatch,
} from 'react-redux';
import { addCourseToTheUser } from '../actions/userActions';

const Product = ({
  title,
  img,
  price,
  authors,
  id,
}) => {
  const users = useSelector(store => store.users);
  const dispatch = useDispatch();

  const loggedUser = users.filter(
    user => user.logged === true
  );

  let checkIfTheCourseIsBought = null;

  if (loggedUser.length > 0) {
    const checkIfTheCourseAlreadyThere =
      loggedUser[0].courses.find(
        course => course.id === id
      );

    checkIfTheCourseIsBought =
      checkIfTheCourseAlreadyThere;
  }
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

      {loggedUser.length > 0 ? (
        checkIfTheCourseIsBought ? (
          'You bought this course'
        ) : (
          <button
            onClick={() => {
              dispatch(
                addCourseToTheUser(
                  loggedUser[0].id,
                  {
                    title,
                    img,
                    price,
                    authors,
                    id,
                  }
                )
              );
            }}
          >
            <span>Buy</span>
          </button>
        )
      ) : (
        'Log in'
      )}
    </div>
  );
};

export default Product;
