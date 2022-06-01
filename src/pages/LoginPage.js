import React, { useEffect } from 'react';
import { Formik, Field, ErrorMessage } from 'formik';

import { useDispatch } from 'react-redux';

import { fetchUserData, loginUser } from '../store/actions/userActions';

import { useHistory } from 'react-router-dom';

import '../styles/LoginPage.scss';

function LoginPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  const history = useHistory();

  const validateForm = ({ login, password }) => {
    const errors = {};

    if (login.length < 3) {
      errors.formLogin = 'Enter login (minimum 3 characters)';
    } else if (password.length < 4) {
      errors.formPassword = 'Enter password (minimum 4 characters)';
    }
    return errors;
  };

  const loginPanel = (
    <>
      <div className="panel__user-info">
        <span>Log in to your account!</span>
      </div>
      <Formik
        initialValues={{
          login: '',
          password: '',
        }}
        validate={values => validateForm(values)}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          dispatch(loginUser(values));
          //   history.push('/');
          resetForm();
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="login">
              <div className="loginPage__loginWrapper">
                <ErrorMessage name="login" component="div" />
              </div>

              <span>Login</span>
              <Field
                className="loginPage__input"
                name="login"
                placeholder="login"
              />
            </div>
            <div className="password">
              <ErrorMessage name="password" component="div" />
              <span>Password</span>
              <Field
                className="loginPage__input"
                placeholder="password"
                name="password"
                type="password"
              />
            </div>
            <button className="loginPage__button" type="submit">
              Submit
            </button>
          </form>
        )}
      </Formik>
    </>
  );
  return <>{loginPanel}</>;
}

export default LoginPage;
