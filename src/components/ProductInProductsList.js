import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import '../styles/Product.scss';

import {
  useSelector,
  useDispatch,
} from 'react-redux';

import {
  Formik,
  Field,
  ErrorMessage,
} from 'formik';

import { addCourseToShoppingCart } from '../store/actions/userActions';
import { addRating } from '../store/actions/courseActions';
import StarRatings from 'react-star-ratings';
const ProductInProductsList = ({
  title,
  img,
  price,
  authors,
  id,
  category,
}) => {
  const { users, courses } = useSelector(
    store => store
  );
  const loggedUser = users.find(
    user => user.logged === true
  );

  const dispatch = useDispatch();

  const actuallyCourse = courses.find(
    course => course.id === id
  );
  const [rating, setRating] = useState(0);
  const [showEditModal, setShowEditModal] =
    useState(false);
  //   const {checkIfTheUserHasRated, setcheckIfTheUserHasRated} = useState("")
  let checkIfTheUserHasRated = '';
  let checkIfTheCourseIsBought = '';

  if (loggedUser) {
    checkIfTheUserHasRated =
      actuallyCourse.rating.find(
        item => item.userId === loggedUser.id
      );
    console.log(checkIfTheUserHasRated);
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
  const ratingPanel = () => {
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

    if (
      loggedUser &&
      checkIfTheCourseIsBought &&
      !checkIfTheUserHasRated
    ) {
      return (
        <>
          rating component
          <StarRatings
            rating={rating}
            starRatedColor="blue"
            changeRating={e => {
              setRating(e);
              dispatch(
                addRating(id, loggedUser.id, e)
              );
            }}
            numberOfStars={5}
            name="rating"
            starDimension="30px"
            starSpacing="5px"
          />
          <div>
            {score}/5 Opinions(
            {actuallyCourse.rating.length})
          </div>
        </>
      );
    } else if (
      (loggedUser && !checkIfTheCourseIsBought) ||
      !loggedUser ||
      checkIfTheUserHasRated
    ) {
      return (
        <>
          <div>bar component score: {score}</div>
          <StarRatings
            rating={score}
            starRatedColor="blue"
            numberOfStars={5}
            name="rating"
            starDimension="30px"
            starSpacing="5px"
          />
          <div>
            {score}/5 Opinions(
            {actuallyCourse.rating.length})
          </div>
        </>
      );
    }
  };

  const addComment = values => {
    console.log(values);
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
        <div className="product__rating_panel">
          <StarRatings
            rating={score}
            starRatedColor="blue"
            numberOfStars={5}
            name="rating"
            starDimension="30px"
            starSpacing="5px"
          />

          <div>
            {score}/5 Opinions(
            {actuallyCourse.rating.length})
          </div>
        </div>
      </div>
      {loggedUser &&
      checkIfTheCourseIsBought &&
      !checkIfTheUserHasRated ? (
        <div id="modal">
          <button
            onClick={() => setShowEditModal(true)}
          >
            Rating and comment this course
          </button>
          <Modal
            ariaHideApp={false}
            className="modal"
            //   overlayClassName="overlay"
            isOpen={showEditModal}
            // onRequestClose={() =>
            //   setShowEditModal(false)
            // }
            //   contentLabel="Rat this course"
          >
            <button
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
                  dispatch(
                    addRating(
                      id,
                      loggedUser.id,
                      e
                    )
                  );
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
                  addComment(values);
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
      ) : null}
      <div className="product__status">
        {courseStatus()}
      </div>
    </div>
  );
};

export default ProductInProductsList;
