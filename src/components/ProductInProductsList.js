import React from 'react';

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

  const ratingPanel = () => {
    if (
      loggedUser &&
      !checkIfTheUserHasRated &&
      checkIfTheCourseIsBought
    ) {
      return (
        <>
          <span>Add rating for 1 to 5: </span>

          <span
            className="fa fa-star checked"
            onClick={() => {
              dispatch(
                addRating(id, loggedUser.id, 1)
              );
            }}
          ></span>
          <span
            className="fa fa-star "
            onClick={() => {
              dispatch(
                addRating(id, loggedUser.id, 2)
              );
            }}
          ></span>
          <span
            className="fa fa-star checked"
            onClick={() => {
              dispatch(
                addRating(id, loggedUser.id, 3)
              );
            }}
          ></span>
          <span
            className="fa fa-star checked"
            onClick={() => {
              dispatch(
                addRating(id, loggedUser.id, 4)
              );
            }}
          ></span>
          <span
            className="fa fa-star checked"
            onClick={() => {
              dispatch(
                addRating(id, loggedUser.id, 5)
              );
            }}
          ></span>
        </>
      );
    } else if (
      loggedUser &&
      checkIfTheUserHasRated
    ) {
      return `You have rated the course on ${checkIfTheUserHasRated.rating}`;
    }
  };

  const viewRating = () => {
    let x = 0;

    actuallyCourse.rating.forEach(item => {
      x += item.rating;
    });

    if (actuallyCourse.rating.length === 0) {
      return 'The course has not yet been evaluated';
    } else {
      return `Average rating of ${
        actuallyCourse.rating.length
      } opinions: ${(
        x / actuallyCourse.rating.length
      ).toFixed(2)}`;
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
          {ratingPanel()}
        </div>
        <div className="product__ratingBoard">
          <span>{viewRating()}</span>
        </div>
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
      <div className="product__status">
        {courseStatus()}
      </div>
    </div>
  );
};

export default ProductInProductsList;
