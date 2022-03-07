import React, { useState } from 'react';

import {
  useSelector,
  useDispatch,
} from 'react-redux';

import { useHistory } from 'react-router-dom';
import { addRating } from '../store/actions/courseActions';
import {
  addCourseToShoppingCart,
  selectCourse,
} from '../store/actions/userActions';

import Modal from 'react-modal';
import {
  Formik,
  Field,
  ErrorMessage,
} from 'formik';

import StarRatings from 'react-star-ratings';

import '../styles/Product.scss';

const ProductInProductsList = ({
  title,
  img,
  price,
  authors,
  id,
  category,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [rating, setRating] = useState(0);
  const [showEditModal, setShowEditModal] =
    useState(false);
  const [showEditModal2, setShowEditModal2] =
    useState(false);

  const { users, courses } = useSelector(
    store => store
  );
  const loggedUser = users.find(
    user => user.logged === true
  );

  const actuallyCourse = courses.find(
    course => course.id === id
  );
  console.log(actuallyCourse);
  let checkIfTheUserHasRated = '';
  let checkIfTheCourseIsBought = '';

  if (loggedUser) {
    checkIfTheUserHasRated =
      actuallyCourse.rating.find(
        item => item.userId === loggedUser.id
      );
    checkIfTheCourseIsBought =
      loggedUser.purchasedCourses.find(
        courseId => courseId === id
      );
  }

  const courseStatus = () => {
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
      } else if (
        checkIfTheCourseIsBought &&
        window.location.pathname ===
          '/course_shop/user_panel'
      ) {
        return (
          <button
            className="product__button product__biggerButton"
            onClick={() => {
              dispatch(selectCourse(id));
              history.push('/selected_product');
            }}
          >
            Go to the course
          </button>
        );
      } else if (checkIfTheCourseIsBought) {
        return (
          <span>
            You already have this course
          </span>
        );
      } else
        return (
          <button
            className="product__button"
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

  const ratingBoard = () => {
    let x = 0;
    let score = 0;

    actuallyCourse.rating.forEach(item => {
      x += item.rating;
    });
    score =
      x / actuallyCourse.rating.length.toFixed(2);

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
            onClick={() =>
              setShowEditModal2(true)
            }
          >
            View opinions
          </button>

          <Modal
            ariaHideApp={false}
            className="modal"
            isOpen={showEditModal2}
          >
            <button
              className="product__button"
              onClick={() =>
                setShowEditModal2(false)
              }
            >
              X
            </button>
            <div className="product__commentsList">
              {actuallyCourse.rating.length > 0
                ? actuallyCourse.rating.map(
                    ({
                      rating,
                      comment,
                      userId,
                    }) => {
                      const user = users.find(
                        user => user.id === userId
                      );
                      return (
                        <div key={comment}>
                          author: {user.login} /
                          comment: {comment} /
                          rating: {rating}
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
      loggedUser &&
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
              className="product__button"
              onClick={() =>
                setShowEditModal(false)
              }
            >
              X
            </button>
            <div className="product__rating">
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
                      id,
                      loggedUser.id,
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
                      <span>Comment:</span>
                      <ErrorMessage
                        name="formValue"
                        component="div"
                      />
                      <Field
                        name="formValue"
                        placeholder="add your opinion"
                      />
                    </div>
                    <button type="submit">
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
      loggedUser &&
      checkIfTheCourseIsBought &&
      checkIfTheUserHasRated
    ) {
      return `You have rated this course on ${checkIfTheUserHasRated.rating}`;
    }
  };

  return (
    <div className="product">
      <div className="product__video"></div>
      <div className="product__title">
        <span>
          {title} ({category})
        </span>
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
      <div className="product__rating">
        {ratingBoard()}
      </div>
      {userRatingPanel()}

      <div className="product__status">
        {courseStatus()}
      </div>
    </div>
  );
};

export default ProductInProductsList;
