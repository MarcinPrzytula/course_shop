import React from 'react';

import '../styles/HomePage.css';

import {
  useSelector,
  useDispatch,
} from 'react-redux';

import {
  Formik,
  Field,
  ErrorMessage,
} from 'formik';

import { useHistory } from 'react-router-dom';
import { buyCourse } from '../store/actions/userActions';
import allCoursesList from '../store/allCoursesList';

const TransactionFormPage = () => {
  const users = useSelector(store => store.users);
  const history = useHistory();
  const dispatch = useDispatch();

  const loggedUser = users.find(
    user => user.logged === true
  );
  let coursesToBuy = null;
  let coursesToBuyId = null;

  if (loggedUser) {
    coursesToBuy = allCoursesList.filter(course =>
      loggedUser.shoppingCart.find(
        shoppingCartCourseId =>
          shoppingCartCourseId === course.id
      )
    );
    coursesToBuyId = coursesToBuy.map(
      item => item.id
    );
  }
  const submit = () => {
    console.log('x');
    if (loggedUser) {
      dispatch(buyCourse(coursesToBuyId));
      history.push('/user_panel');
    } else return null;
  };

  return (
    <>
      <div>
        <span>
          You want to purchase a total of{' '}
          {loggedUser
            ? loggedUser.shoppingCart.length
            : 0}{' '}
          courses
        </span>
      </div>
      <Formik
        initialValues={{
          cardHolderName: '',
          cardNumber: '',
          expirationDate: '',
          securityCode: '',
        }}
        validate={values => {
          const errors = {};
          console.log(values.cardNumber.length);
          if (values.cardHolderName.length < 2) {
            errors.cardHolderName =
              'Enter the name of the cardholder';
          } else if (
            values.cardNumber.length !== 16
          ) {
            errors.cardNumber =
              'Enter the 16-digit card number';
          } else if (
            values.expirationDate.length !== 4
          ) {
            errors.expirationDate =
              'Enter expiration year';
          } else if (
            values.securityCode.length !== 3
          ) {
            errors.securityCode =
              'Enter the 3 digit pin';
          }
          console.log(errors);
          return errors;
        }}
        onSubmit={(
          values,
          { setSubmitting, resetForm }
        ) => {
          submit(values);
          resetForm();
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="cardHolderName">
              <div>
                <ErrorMessage
                  name="cardHolderName"
                  component="div"
                />
              </div>
              <span>Card holder:</span>
              <Field
                name="cardHolderName"
                placeholder="name card holder"
              />
            </div>

            <div className="cardNumber">
              <ErrorMessage
                name="cardNumber"
                component="div"
              />
              <span>Card number:</span>
              <Field
                name="cardNumber"
                placeholder="16-dig card number"
                // type="number"
              />
            </div>

            <div className="expirationDate">
              <ErrorMessage
                name="expirationDate"
                component="div"
              />
              <span>Expiration card date:</span>
              <Field
                name="expirationDate"
                placeholder="Date of expiration card"
              />
            </div>

            <div className="securityCode">
              <ErrorMessage
                name="securityCode"
                component="div"
              />
              <span>Security code: </span>
              <Field
                name="securityCode"
                type="password"
                placeholder="3-dig security card code"
              />
            </div>

            <button type="submit">
              Pay by card
            </button>
          </form>
        )}
      </Formik>
      {/* <button
        onClick={
          loggedUser
            ? () => {
                dispatch(
                  buyCourse(coursesToBuyId)
                );
                history.push('/user_panel');
              }
            : null
        }
      >
        {' '}
        Purchase and pay
      </button> */}
    </>
  );
};

export default TransactionFormPage;
