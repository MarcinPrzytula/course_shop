import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { buyCourse } from '../store/actions/userActions';

import { Formik, Field } from 'formik';
import * as yup from 'yup';
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
  const getSchema = () =>
    yup.object().shape({
      cardNumber: yup.string().required().min(19, 'not less than 16'),
      cardHolder: yup.string().required(),
      cardMonth: yup.string().required(),
      cardYear: yup.string().required(),
      cvv: yup.string().required(),
    });
  return (
    <>
      <span>
        You want to purchase a total of {user ? user.shoppingCart.length : 0}{' '}
        courses
      </span>

      <Formik
        initialValues={{
          cardNumber: '',
          cardHolder: '',
          cardMonth: '',
          cardYear: '',
          cvv: '',
        }}
        onSubmit={(values, formikBag) => {
          submit();
          formikBag.resetForm();
        }}
        validationSchema={getSchema()}
      >
        {({
          handleSubmit,
          handleChange,
          values,
          errors,
          isValid,
          touched,
          handleBlur,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="form">
              <label className="label">Card Number </label>
              <input
                type="text"
                onChange={handleChange}
                value={values.cardNumber
                  .replace(/[^\d]/g, '')
                  .replace(/\s/g, '')
                  .replace(/(\d{4})/g, '$1 ')
                  .trim()}
                name="cardNumber"
                maxLength="19"
              />

              <label className="label">Card Holder</label>
              <input
                type="text"
                name="cardHolder"
                onChange={handleChange}
                value={values.cardHolder}
              />
              <div className="row">
                <div className="column">
                  <label className="label">Expiration Date</label>
                  <div>
                    <select
                      type="text"
                      placeholder="Month"
                      name="cardMonth"
                      onChange={handleChange}
                      value={values.cardMonth}
                    >
                      <option hidden>Month</option>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((m, i) => (
                        <option key={m} value={m}>
                          {m < 10 ? `0${m}` : m}
                        </option>
                      ))}
                    </select>

                    <select
                      type="text"
                      name="cardYear"
                      onChange={handleChange}
                      value={values.cardYear}
                    >
                      <option hidden>Year</option>
                      {[
                        2020, 2021, 2023, 2024, 2025, 2026, 2027, 2028, 2029,
                        2030, 2031, 2032,
                      ].map((y, i) => (
                        <option key={y} value={y}>
                          {y}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>{' '}
                <div className="column">
                  <label className="label">CVV</label>
                  <input
                    type="text"
                    value={values.cvv}
                    name="cvv"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <button type="submit" disabled={!isValid}>
                Submit
              </button>
            </div>
            {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
          </form>
        )}
      </Formik>
    </>
  );
};

export default TransactionFormPage;

{
  /* <Formik
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
      </Formik> */
}
