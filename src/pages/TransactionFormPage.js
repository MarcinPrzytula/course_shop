import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { buyCourse } from '../store/actions/userActions';

import { Formik, Field, ErrorMessage } from 'formik';
import '../styles/TransactionFormPage.scss';

const TransactionFormPage = () => {
  const { user, courses } = useSelector(store => store);
  const history = useHistory();
  const dispatch = useDispatch();
  let coursesToBuy = null;
  let coursesToBuyId = null;

  if (user) {
    coursesToBuy = courses.filter(course =>
      user.shoppingCart.find(
        shoppingCartCourseId => shoppingCartCourseId === course._id
      )
    );
    coursesToBuyId = coursesToBuy.map(item => item._id);
  }
  const submit = () => {
    if (user) {
      dispatch(buyCourse(coursesToBuyId));
      history.push('/user_panel');
    } else {
      history.push('/login');
    }
  };

  return (
    <>
      <span>
        You want to purchase a total of {user ? user.shoppingCart.length : 0}{' '}
        courses
      </span>

      <Formik
        initialValues={{
          cardNumber: '',
          name: '',
          validThru: '',
          cvc: '',
        }}
        validate={({ cardNumber, name, validThru, cvc }) => {
          const errors = {};
          if (cardNumber.toString().length < 16) {
            errors.cardNumber = 'Format XXXX XXXX XXXX XXXX';
          } else if (name.length < 1) {
            errors.name = 'It cannot be empty';
          } else if (validThru.toString().length < 4) {
            errors.validThru = 'Format XX/XX';
          } else if (cvc.toString().length < 3) {
            errors.cvc = 'Format XXX or XXXX';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          submit();
          resetForm();
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="cardNumber">
              <ErrorMessage name="cardNumber" component="div" />
              <Field
                // className="product__formInput"
                name="cardNumber"
                placeholder="Card Number"
                type="number"
              />
            </div>
            <div className="name">
              <ErrorMessage name="name" component="div" />
              <Field
                // className="product__formInput"
                name="name"
                placeholder="Name"
              />
            </div>
            <div className="validThru">
              <ErrorMessage name="validThru" component="div" />
              <Field
                // className="product__formInput"
                name="validThru"
                placeholder="Valid Thru"
                type="number"
              />
            </div>
            <div className="cvc">
              <ErrorMessage name="cvc" component="div" />
              <Field
                // className="product__formInput"
                name="cvc"
                placeholder="CVC"
                type="number"
              />
            </div>
            <button className="product__button" type="submit">
              Submit
            </button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default TransactionFormPage;
