import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  addCourseToShoppingCart,
  selectCourse,
} from '../store/actions/userActions';

import Modal from 'react-modal';

import StatusButton from './StatusButton';
import RatingBoard from './RatingBoard';
import RatingForm from './RatingForm';

import '../styles/Product.scss';

const Product = ({ title, price, authors, _id, category }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [rating, setRating] = useState(0);
  const { user, courses } = useSelector(store => store);
  const [showEditModal, setShowEditModal] = useState(false);

  const actuallyCourse = courses.find(course => course._id === _id);
  let checkIfTheUserHasRated = '';
  let checkIfTheCourseIsBought = '';
  let checkIfTheCourseInCart = '';
  let buttonConfig = {
    info: null,
    optionalClickEvent: null,
    classes: null,
    icon: null,
  };

  if (user) {
    checkIfTheCourseInCart = user.shoppingCart.find(
      courseId => courseId === _id
    );
    checkIfTheCourseIsBought = user.purchasedCourses.find(
      courseId => courseId === _id
    );
    checkIfTheUserHasRated = actuallyCourse.rating.find(
      item => item.userLogin === user.login
    );

    if (
      checkIfTheCourseIsBought &&
      window.location.href.includes('user_panel')
    ) {
      buttonConfig = {
        info: 'Play course',
        optionalClickEvent: () => {
          dispatch(selectCourse(_id));
          history.push('/selected_product');
        },
        classes: 'product__icon-course-status-in-user-panel',
        icon: 'faPlayCircle',
      };
    } else if (checkIfTheCourseIsBought) {
      buttonConfig = {
        info: 'You bought this course',
        optionalClickEvent: null,
        classes: 'product__icon-course-status-buyed',
        icon: 'faCheck',
      };
    } else if (checkIfTheCourseInCart) {
      buttonConfig = {
        info: 'The course is already in the basket',
        optionalClickEvent: null,
        classes:
          'product__icon-course-status-add-to-cart product__icon-course-status-add-to-cart--no-active',
        icon: 'faCartPlus',
      };
    } else if (!checkIfTheCourseInCart) {
      buttonConfig = {
        info: 'Click if you want add to cart',
        optionalClickEvent: () => {
          dispatch(addCourseToShoppingCart(_id));
        },
        classes: 'product__icon-course-status-add-to-cart',
        icon: 'faCartPlus',
      };
    }
  } else {
    buttonConfig = {
      info: 'Log in if you want to buy a course',
      optionalClickEvent: null,
      classes:
        'product__icon-course-status-add-to-cart product__icon-course-status-add-to-cart--no-active',
      icon: 'faCartPlus',
    };
  }

  const importAll = require => {
    let images = {};
    require.keys().map(item => {
      return (images[item.replace('./', '')] = require(item));
    });
    return images;
  };

  const images = importAll(
    require.context('../assets/images', false, /\.(png|jpe?g|jpg|svg)$/)
  );
  const x = Object.keys(images);
  const y = x.filter(x => x.includes(title.replace(' ', '_').toLowerCase()));
  console.log(x);
  console.log(y[0] === 'advanced_maths.jpg');

  return (
    <>
      <div className="product">
        <div className="product__title">
          <span>{title}</span>
        </div>
        <div className="product__category">
          <span>({category})</span>
        </div>

        <div className="product__imgContainer">
          <img src={images[`${y[0]}`].default} alt="product " />
        </div>
        <div className="product__price">
          <span>Price: </span>
          <span>{price}</span>
        </div>
        <div className="product__authors">
          <span>Authors: </span>
          <span>{authors}</span>
        </div>
        <div className="product__rating">
          <RatingBoard
            actuallyCourse={actuallyCourse}
            handleModal={() => {
              setShowEditModal(true);
            }}
          />
        </div>
        <div className="product__status">
          <StatusButton config={buttonConfig} />
        </div>
      </div>

      <Modal ariaHideApp={false} className="modal" isOpen={showEditModal}>
        <button
          className="product__button product__button-right"
          onClick={() => setShowEditModal(false)}
        >
          X
        </button>

        <RatingForm
          user={user}
          checkIfTheCourseIsBought={checkIfTheCourseIsBought}
          checkIfTheUserHasRated={checkIfTheUserHasRated}
          rating={rating}
          setRating={setRating}
          _id={_id}
        />

        <div className="modal__ratings-list">
          {actuallyCourse.rating.length > 0 ? (
            actuallyCourse.rating.map(({ rating, comment, userLogin }) => {
              return (
                <div key={userLogin} className="modal__rating">
                  <div>author: {userLogin} </div>
                  <div>comment: {comment}</div>
                  <div>rating: {rating}</div>
                </div>
              );
            })
          ) : (
            <div className="modal__rating">
              This course has not been rated yet
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};

export default Product;
