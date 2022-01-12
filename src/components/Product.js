import React from 'react';

import '../styles/Product.scss';

import {
  useSelector,
  useDispatch,
} from 'react-redux';

import { takeId } from '../store/actions/coursesActions';
import { addCourseToTheUser } from '../store/actions/userActions';

import { useHistory } from 'react-router-dom';

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
  const history = useHistory();

  const loggedUser = users.find(
    user => user.logged === true
  );
  let checkIfTheCourseIsBought = null;
  let checkIfTheCourseInCart = null;

  //   if (loggedUser) {
  //     // const checkIfTheCourseAlreadyThere =
  //     //   loggedUser.courses.find(
  //     //     course => course.id === id
  //     //   );

  //     const checkIfTheCourseAlreadyThere =
  //       courses.find(course => course.id === id);
  //     // checkIfTheCourseIsBought =
  //     //   checkIfTheCourseAlreadyThere;
  //     checkIfTheCourseInCart =
  //       checkIfTheCourseAlreadyThere;
  //   }
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
        checkIfTheCourseIsBought ? (
          'You bought this course'
        ) : (
          <button
            onClick={() => {
              //   history.push('/transaction_form');
              //   console.log(id);
              dispatch(takeId(id));

              //   dispatch(
              //     addCourseToTheUser(
              //       loggedUser.id,
              //       {
              //         title,
              //         img,
              //         price,
              //         authors,
              //         id,
              //       }
              //     )
              //   );
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
