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
          const { login, password } = values;
          const res = dispatch(loginUser(login, password));

          res.then(res => {
            if (res.data !== 'Invalid username or password') {
              history.push('/');
            } else {
              return alert('Invalid username or password');
            }
          });

          resetForm();
        }}
      >
        {({ handleSubmit, values }) => (
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
                value={values.login
                  .toLowerCase()
                  .replace(/\s/g, '')
                  .replace(/</g, '')
                  .replace(/>/g, '')
                  .trim()}
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
// .then(res => {
//     if (res.data !== 'User Already Exsists') {
//       alert(
//         `Congratulations! An account has been created, your login is: ${login}, remember your password and never give it to anyone!`
//       );
//       dispatch(loginUser(values));

//       return 'ok';
//     } else {
//       alert('User Already Exsists');

//       return res.data;
//     }
//   });
