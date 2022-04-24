import React, { useEffect } from 'react';
import { Formik, Field, ErrorMessage } from 'formik';

import { useDispatch } from 'react-redux';

import { fetchUserData } from '../store/actions/userActions';

import { useHistory } from 'react-router-dom';

import '../styles/LoginPage.scss';

import axios from 'axios';

function LoginPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  const history = useHistory();

  const errorActive = null;

  const submit = userLoginData => {
    const { formLogin, formPassword } = userLoginData;
    const URL = process.env.REACT_APP_API
      ? `${process.env.REACT_APP_API.trim()}api/login`
      : `http://localhost:3001/api/login`;

    axios({
      method: 'post',
      data: {
        username: formLogin,
        password: formPassword,
      },
      withCredentials: true,
      url: URL,
    }).then(res => {
      if (res.data !== 'No User Exsist') {
        history.push('/');
      } else {
        alert('Invalid username or password');
      }
    });
  };

  const validateForm = values => {
    const errors = {};

    if (values.formLogin.length < 3) {
      errors.formLogin =
        'Enter login (minimum 3 characters)';
    } else if (values.formPassword.length < 4) {
      errors.formPassword =
        'Enter password (minimum 4 characters)';
    }
    return errors;
  };

  const loginPanel = (
    <Formik
      initialValues={{
        formLogin: '',
        formPassword: '',
      }}
      validate={values => validateForm(values)}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        submit(values);
        resetForm();
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className="login">
            {errorActive ? (
              <div>
                The wrong username or password was entered
              </div>
            ) : null}

            <div>
              <ErrorMessage
                name="newError"
                component="div"
              />
            </div>
            <div className="loginPage__loginWrapper">
              <ErrorMessage
                name="formLogin"
                component="div"
              />
            </div>

            <span>Login</span>
            <Field
              className="loginPage__input"
              name="formLogin"
              placeholder="login"
            />
          </div>
          <div className="password">
            <ErrorMessage
              name="formPassword"
              component="div"
            />
            <span>Password</span>
            <Field
              className="loginPage__input"
              placeholder="password"
              name="formPassword"
              type="password"
            />
          </div>
          <button
            className="loginPage__button"
            type="submit"
          >
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
  return <>{loginPanel}</>;
}

export default LoginPage;
