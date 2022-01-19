import React from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import { addUser } from '../store/actions/userActions';

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
      `Gratulacje! Konto zostało założone, twój login to:  ${values.login} , zapamiętaj swoje hasło i nigdy go nikomu nie podawaj!`
    );
  };

  return (
    <Formik
      initialValues={{
        login: '',
        password: '',
      }}
      validate={values => {
        const errors = {};
        const validation = users.filter(
          item => item.login === values.login
        );

        if (values.login.length < 3) {
          errors.login =
            'Wprowadz login (minimum 3 znaki)';
        } else if (values.password.length < 4) {
          errors.password =
            'Wprowadz haslo (minimum 4 znaki)';
        } else if (validation.length) {
          errors.login =
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
              name="login"
              component="div"
            />
            <span>Login</span>
            <Field
              name="login"
              placeholder="login"
            />
          </div>
          <div className="password">
            <ErrorMessage
              name="password"
              component="div"
            />
            <span>Password</span>
            <Field
              placeholder="password"
              name="password"
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
