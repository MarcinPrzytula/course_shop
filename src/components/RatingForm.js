import { Formik, Field, ErrorMessage } from 'formik';
import StarRatings from 'react-star-ratings';
import { addRating } from '../store/actions/courseActions';
import { useDispatch } from 'react-redux';

const RatingForm = ({
  user,
  checkIfTheCourseIsBought,
  checkIfTheUserHasRated,
  rating,
  setRating,
  _id,
}) => {
  const dispatch = useDispatch();
  if (user && checkIfTheCourseIsBought && !checkIfTheUserHasRated) {
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
                errors.formValue = 'Enter comment (minimum 10 characters)';
              } else if (rating === 0) {
                errors.formValue = 'Rate a course from 1 to 5';
              }

              return errors;
            }}
            onSubmit={(values, { resetForm }) => {
              dispatch(addRating(_id, user.login, rating, values));
              resetForm();
            }}
          >
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <div className="formValue">
                  <div className="product__title">Comment:</div>
                  <ErrorMessage name="formValue" component="div" />
                  <Field
                    className="product__formInput"
                    name="formValue"
                    placeholder="add your opinion"
                    component="textarea"
                  />
                </div>
                <button className="product__button" type="submit">
                  Submit
                </button>
              </form>
            )}
          </Formik>
        </div>
      </>
    );
  } else if (user && checkIfTheCourseIsBought && checkIfTheUserHasRated) {
    return (
      <div className="modal__user-rate">
        You have rated this course on: {checkIfTheUserHasRated.rating}
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

export default RatingForm;
