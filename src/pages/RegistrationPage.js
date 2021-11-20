import React from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import { addUser } from '../actions/userActions';

import {
  Formik,
  Field,
  ErrorMessage,
} from 'formik';

import '../styles/RegistrationPage.scss';

function RegistrationPage() {
  const users = useSelector(store => store.users);

  const dispatch = useDispatch();
  const registrationSuccessful = values => {
    dispatch(addUser(values));
    alert(
      `Gratulacje! Konto zostało założone, twój login to:  ${values.userLogin} , a twoje hasło to:  ${values.userPassword} zapamiętaj je!`
    );
  };

  return (
    <Formik
      initialValues={{
        userLogin: '',
        userPassword: '',
      }}
      validate={values => {
        const errors = {};
        const validation = users.filter(
          item =>
            item.userLogin === values.userLogin
        );

        if (values.userLogin.length < 3) {
          errors.userLogin =
            'Wprowadz login (minimum 3 znaki)';
        } else if (
          values.userPassword.length < 4
        ) {
          errors.userPassword =
            'Wprowadz haslo (minimum 4 znaki)';
        } else if (validation.length) {
          errors.userLogin =
            'Nazwa użytkownika jest zajęta';
        }
        return errors;
      }}
      onSubmit={(
        values,
        { setSubmitting, resetForm }
      ) => {
        registrationSuccessful(values);
        resetForm();
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className="login">
            <ErrorMessage
              name="userLogin"
              component="div"
            />
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
}

export default RegistrationPage;
