import React, { useState, useRef } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { useHistory } from 'react-router-dom';
import { addRating } from '../store/actions/courseActions';
import {
  addCourseToShoppingCart,
  selectCourse,
} from '../store/actions/userActions';

import Modal from 'react-modal';
import { Formik, Field, ErrorMessage } from 'formik';

import StarRatings from 'react-star-ratings';

import '../styles/Product.scss';

import img from '../assets/images/img1.PNG';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faCartPlus,
} from '@fortawesome/free-solid-svg-icons';

const ProductInProductsList = ({
  title,
  price,
  authors,
  _id,
  category,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [rating, setRating] = useState(0);
  const [showEditModal, setShowEditModal] = useState(false);

  const { user, courses } = useSelector(store => store);

  const actuallyCourse = courses.find(
    course => course._id === _id
  );

  let checkIfTheUserHasRated = '';
  let checkIfTheCourseIsBought = '';
  let checkIfTheCourseInCart = '';

  const infoRef = useRef(null);

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
  }
  const courseStatus = () => {
    if (user) {
      if (checkIfTheCourseInCart) {
        return (
          <>
            <div
              ref={infoRef}
              className="product__log-out-user-info"
            >
              The course is already in the basket
            </div>
            <button
              className="product__icon-course-add-to-cart product__icon-course-add-to-cart--no-active"
              onMouseOver={() => {
                infoRef.current.classList.add(
                  'product__log-out-user-info--active'
                );
              }}
              onMouseOut={() => {
                infoRef.current.classList.remove(
                  'product__log-out-user-info--active'
                );
              }}
            >
              <FontAwesomeIcon icon={faCartPlus} />
            </button>
          </>
        );
      } else if (
        checkIfTheCourseIsBought &&
        window.location.href.includes('user_panel')
      ) {
        return (
          <button
            className="product__button product__biggerButton"
            onClick={() => {
              dispatch(selectCourse(_id));
              history.push('/selected_product');
            }}
          >
            Go to the course
          </button>
        );
      } else if (checkIfTheCourseIsBought) {
        return (
          <div className="product__icon-course-status-buyed ">
            <FontAwesomeIcon icon={faCheck} />
          </div>
        );
      } else
        return (
          <button
            className="product__icon-course-add-to-cart"
            onClick={() => {
              dispatch(addCourseToShoppingCart(_id));
            }}
          >
            <FontAwesomeIcon icon={faCartPlus} />
          </button>
        );
    } else
      return (
        <>
          <div
            ref={infoRef}
            className="product__log-out-user-info"
          >
            Log in if you want to buy a course
          </div>
          <button
            className="product__icon-course-add-to-cart product__icon-course-add-to-cart--no-active"
            onMouseOver={() => {
              infoRef.current.classList.add(
                'product__log-out-user-info--active'
              );
            }}
            onMouseOut={() => {
              infoRef.current.classList.remove(
                'product__log-out-user-info--active'
              );
            }}
          >
            <FontAwesomeIcon icon={faCartPlus} />
          </button>
        </>
      );
  };

  const ratingBoard = () => {
    let x = 0;
    let score = 0;

    actuallyCourse.rating.forEach(item => {
      x += item.rating;
    });

    score = (x / actuallyCourse.rating.length).toFixed(1);

    if (isNaN(score)) {
      score = 0;
    }

    return (
      <>
        <button
          className="product__rating-stars"
          onClick={() => setShowEditModal(true)}
        >
          <StarRatings
            rating={Number(score)}
            starRatedColor="blue"
            starEmptyColor="white"
            numberOfStars={5}
            name="rating"
            starDimension="30px"
            starSpacing="5px"
          />
          {score}/5 ({actuallyCourse.rating.length})
        </button>
      </>
    );
  };
  const userRatingPanel = () => {
    const ratingPanel = () => {
      if (
        user &&
        checkIfTheCourseIsBought &&
        !checkIfTheUserHasRated
      ) {
        return (
          <>
            <div className="product__rating">
              <div className="product__title">Ratio:</div>
              <StarRatings
                rating={rating}
                starRatedColor="blue"
                changeRating={e => {
                  setRating(e);
                }}
                numberOfStars={5}
                name="rating"
                starDimension="30px"
                starSpacing="5px"
              />
            </div>
            <div className="product__comment">
              <Formik
                initialValues={{
                  formValue: '',
                }}
                validate={values => {
                  const errors = {};
                  if (values.formValue.length < 10) {
                    errors.formValue =
                      'Enter comment (minimum 10 characters)';
                  } else if (rating === 0) {
                    errors.formValue =
                      'Rate a course from 1 to 5';
                  }

                  return errors;
                }}
                onSubmit={(
                  values,
                  { setSubmitting, resetForm }
                ) => {
                  dispatch(
                    addRating(
                      _id,
                      user.login,
                      rating,
                      values
                    )
                  );
                  resetForm();
                }}
              >
                {({ handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="formValue">
                      <div className="product__title">
                        Comment:
                      </div>
                      <ErrorMessage
                        name="formValue"
                        component="div"
                      />
                      <Field
                        className="product__formInput"
                        name="formValue"
                        placeholder="add your opinion"
                        component="textarea"
                      />
                    </div>
                    <button
                      className="product__button"
                      type="submit"
                    >
                      Submit
                    </button>
                  </form>
                )}
              </Formik>
            </div>
          </>
        );
      } else if (
        user &&
        checkIfTheCourseIsBought &&
        checkIfTheUserHasRated
      ) {
        return (
          <div className="modal__user-rate">
            You have rated this course on:{' '}
            {checkIfTheUserHasRated.rating}
          </div>
        );
      } else {
        return (
          <div className="modal__user-rate">
            Buy this course if you want add rate
          </div>
        );
      }
    };
    return (
      <div>
        <Modal
          ariaHideApp={false}
          className="modal"
          isOpen={showEditModal}
        >
          <button
            className="product__button product__button-right"
            onClick={() => setShowEditModal(false)}
          >
            X
          </button>

          {ratingPanel()}

          <div className="modal__ratings-list">
            {actuallyCourse.rating.length > 0 ? (
              actuallyCourse.rating.map(
                ({ rating, comment, userLogin }) => {
                  return (
                    <div className="modal__rating">
                      <div>author: {userLogin} </div>
                      <div>comment: {comment}</div>
                      <div>rating: {rating}</div>
                    </div>
                  );
                }
              )
            ) : (
              <div className="modal__rating">
                dont have opinions
              </div>
            )}
          </div>
        </Modal>
      </div>
    );
  };

  return (
    <div className="product">
      <div className="product__title">
        <span>{title}</span>
      </div>
      <div className="product__category">
        <span>({category})</span>
      </div>

      <div className="product__imgContainer">
        <img src={img} alt="product " />
      </div>
      <div className="product__price">
        <span>Price: </span>
        <span>{price}</span>
      </div>
      <div className="product__authors">
        <span>Authors: </span>
        <span>{authors}</span>
      </div>
      <div className="product__rating">{ratingBoard()}</div>
      {userRatingPanel()}
      <div className="product__status">
        {courseStatus()}
      </div>
    </div>
  );
};

export default ProductInProductsList;
