import React, { useState } from 'react';
import {
  Formik,
  Field,
  ErrorMessage,
} from 'formik';

import { useSelector } from 'react-redux';

import '../styles/LoginPage.scss';
const validationData = {
  userExist: '',
  login: '',
};

function LoginPage() {
  const users = useSelector(store => store.users);

  const [userLoginData, setUserLoginData] =
    useState('');

  const validation = () => {
    const checkIfTheUserExists = users.filter(
      item =>
        item.userLogin ===
          userLoginData.userLogin &&
        item.userPassword ===
          userLoginData.userPassword
    );

    if (
      userLoginData &&
      checkIfTheUserExists.length > 0
    ) {
      validationData.login = 'successful';
      validationData.userExist =
        checkIfTheUserExists;
    } else if (
      userLoginData &&
      checkIfTheUserExists.length === 0
    ) {
      validationData.login = 'failed';
      validationData.userExist =
        checkIfTheUserExists;
    }
    return validationData;
  };

  if (userLoginData) {
    validation();
  }

  const loginPanel = (
    <Formik
      initialValues={{
        userLogin: '',
        userPassword: '',
      }}
      validate={values => {
        const errors = {};

        if (values.userLogin.length < 3) {
          errors.userLogin =
            'Wprowadz login (minimum 3 znaki)';
        } else if (
          values.userPassword.length < 4
        ) {
          errors.userPassword =
            'Wprowadz haslo (minimum 4 znaki)';
        }
        return errors;
      }}
      onSubmit={values =>
        setUserLoginData(values)
      }
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className="login">
            {validationData.login === 'failed' ? (
              <div>
                Podano złą nazwę użytkownika lub
                hasło
              </div>
            ) : null}
            <div>
              <ErrorMessage
                name="userLogin"
                component="div"
              />
            </div>

            <span>Login</span>
            <Field
              name="userLogin"
              placeholder="login"
            />
          </div>
          <div className="password">
            <ErrorMessage
              name="userPassword"
              component="div"
            />
            <span>Password</span>
            <Field
              placeholder="password"
              name="userPassword"
              type="password"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
  return (
    <>
      {validationData.login === 'successful'
        ? 'Zostałeś zalogowany'
        : loginPanel}
    </>
  );
}

export default LoginPage;
