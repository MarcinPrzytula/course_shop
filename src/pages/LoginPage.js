import React, {
  useState,
  useEffect,
} from 'react';
import {
  Formik,
  Field,
  ErrorMessage,
} from 'formik';

import {
  useSelector,
  useDispatch,
} from 'react-redux';

import {
  changeLoginStatus,
  fetchUsersData,
} from '../store/actions/userActions';

import { useHistory } from 'react-router-dom';

import '../styles/LoginPage.scss';

function LoginPage() {
  const users = useSelector(store => store.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsersData());
  }, [dispatch]);

  const history = useHistory();

  const validationData = {
    loggedUser: '',
    login: '',
  };

  const [errorActive, setErrorActive] =
    useState(false);

  const submit = userLoginData => {
    const { formLogin, formPassword } =
      userLoginData;

    const returnTheUserIfTheExists = users.find(
      ({ login, password }) =>
        login === formLogin &&
        password === formPassword
    );

    if (
      userLoginData &&
      returnTheUserIfTheExists
    ) {
      returnTheUserIfTheExists.logged = true;
      validationData.login = 'successful';
      validationData.loggedUser =
        returnTheUserIfTheExists;
      dispatch(
        changeLoginStatus(
          validationData.loggedUser.id,
          validationData.loggedUser.logged
        )
      );
      //   alert('You are logged now!');
      setTimeout(() => {
        history.push('/');
      }, 3);
    } else if (
      userLoginData &&
      returnTheUserIfTheExists === undefined
    ) {
      validationData.login = 'failed';
      validationData.loggedUser =
        returnTheUserIfTheExists;
      setErrorActive(true);
    } else return console.log('empty execution');
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
          <div className="login">
            {errorActive ? (
              <div>
                The wrong username or password was
                entered
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
