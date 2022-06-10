import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { buyCourse, fetchUserData } from '../store/actions/userActions';
import { fetchCoursesData } from '../store/actions/courseActions';

import { Formik } from 'formik';
import * as yup from 'yup';
import '../styles/TransactionFormPage.scss';

const TransactionFormPage = () => {
  const { user, courses } = useSelector(store => store);
  const history = useHistory();
  const dispatch = useDispatch();
  let coursesToBuy = null;
  let coursesToBuyId = null;

  useEffect(() => {
    dispatch(fetchUserData());
    dispatch(fetchCoursesData());
  }, [dispatch]);

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
        {({ handleSubmit, handleChange, values, isValid }) => (
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
          </form>
        )}
      </Formik>
    </>
  );
};

export default TransactionFormPage;
