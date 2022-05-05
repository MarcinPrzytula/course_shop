import React, { useState } from 'react';

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
// import vid from '../../assets/videos/vid1.mp4';

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
  const [showEditModal2, setShowEditModal2] =
    useState(false);
  const { user, courses } = useSelector(store => store);

  const actuallyCourse = courses.find(
    course => course._id === _id
  );

  let checkIfTheUserHasRated = '';
  let checkIfTheCourseIsBought = '';
  let checkIfTheCourseInCart = '';

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
        return 'The course has been added to the cart';
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
        return <span>You already have this course</span>;
      } else
        return (
          <button
            className="product__button"
            onClick={() => {
              dispatch(addCourseToShoppingCart(_id));
            }}
          >
            <span>Add the product to your cart</span>
          </button>
        );
    } else return 'Log in if you want to buy a course';
  };

  const ratingBoard = () => {
    let x = 0;
    let score = 0;

    actuallyCourse.rating.forEach(item => {
      x += item.rating;
    });
    score = x / actuallyCourse.rating.length.toFixed(2);

    if (isNaN(score)) {
      score = 0;
    }

    return (
      <>
        <StarRatings
          rating={score}
          starRatedColor="blue"
          starEmptyColor="white"
          numberOfStars={5}
          name="rating"
          starDimension="30px"
          starSpacing="5px"
        />
        <div>
          {score}/5 Opinions(
          {actuallyCourse.rating.length})
        </div>
        <div id="modal">
          <button
            className="product__button"
            onClick={() => setShowEditModal2(true)}
          >
            View opinions
          </button>

          <Modal
            ariaHideApp={false}
            className="modal"
            isOpen={showEditModal2}
          >
            <button
              className="product__button product__button-right"
              onClick={() => setShowEditModal2(false)}
            >
              X
            </button>
            <div className="product__commentsList">
              {actuallyCourse.rating.length > 0
                ? actuallyCourse.rating.map(
                    ({ rating, comment, userLogin }) => {
                      return (
                        <div
                          className="product__commentList_userComment"
                          key={comment}
                        >
                          <div>author: {userLogin} </div>
                          comment:
                          <div className="product__commentList_userComment_input">
                            {comment}
                          </div>
                          <div> rating: {rating}</div>
                        </div>
                      );
                    }
                  )
                : 'dont have opinions'}
            </div>
          </Modal>
        </div>
      </>
    );
  };

  const userRatingPanel = () => {
    if (
      user &&
      checkIfTheCourseIsBought &&
      !checkIfTheUserHasRated
    ) {
      return (
        <div id="modal">
          <button
            className="product__button"
            onClick={() => setShowEditModal(true)}
          >
            Rating and comment this course
          </button>

          <Modal
            ariaHideApp={false}
            className="modal"
            isOpen={showEditModal}
          >
            <button
              className="product__button product__button product__button-right"
              onClick={() => setShowEditModal(false)}
            >
              X
            </button>
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
                validate={formValue => {
                  const errors = {};
                  if (formValue.length < 3) {
                    errors.formValue =
                      'Enter login (minimum 3 characters)';
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
          </Modal>
        </div>
      );
    } else if (
      user &&
      checkIfTheCourseIsBought &&
      checkIfTheUserHasRated
    ) {
      return `You have rated this course on ${checkIfTheUserHasRated.rating}`;
    }
  };

  return (
    <div className="product">
      <div className="product__title">
        <span>{title}</span>
      </div>
      <div className="product__category">
        <span>({category})</span>
      </div>

      <div className="product__img">
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
