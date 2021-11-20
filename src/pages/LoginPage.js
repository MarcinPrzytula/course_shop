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

import { editUser } from '../actions/userActions';

import { useHistory } from 'react-router-dom';

import '../styles/LoginPage.scss';

function LoginPage() {
  const users = useSelector(store => store.users);

  const dispatch = useDispatch();

  const history = useHistory();

  const isLogged = users.filter(
    ({ logged }) => logged === true
  );
  if (isLogged.length > 0) {
    history.push('/user_panel');
  }

  const validationData = {
    loggedUser: '',
    login: '',
  };

  const [errorActive, setErrorActive] =
    useState(false);

  const validation = userLoginData => {
    const { formLogin, formPassword } =
      userLoginData;

    const returnTheUserIfTheExists = users.filter(
      ({ userLogin, userPassword }) =>
        userLogin === formLogin &&
        userPassword === formPassword
    );
    if (
      userLoginData &&
      returnTheUserIfTheExists.length > 0
    ) {
      returnTheUserIfTheExists[0].logged = true;
      validationData.login = 'successful';
      validationData.loggedUser =
        returnTheUserIfTheExists;
      dispatch(
        editUser(
          validationData.loggedUser[0].id,
          validationData.loggedUser[0].logged
        )
      );
      history.push('/user_panel');
    } else if (
      userLoginData &&
      returnTheUserIfTheExists.length === 0
    ) {
      validationData.login = 'failed';
      validationData.loggedUser =
        returnTheUserIfTheExists;
      setErrorActive(true);
    } else return console.log(' puste wykonanie');
  };

  //   useEffect(() => {
  //     if (isLogged.length > 0) {
  //       history.push('/user_panel');
  //     }
  //   }, []);

  const loginPanel = (
    <Formik
      initialValues={{
        formLogin: '',
        formPassword: '',
      }}
      validate={values => {
        const errors = {};

        if (values.formLogin.length < 3) {
          errors.formLogin =
            'Wprowadz login (minimum 3 znaki)';
        } else if (
          values.formPassword.length < 4
        ) {
          errors.formPassword =
            'Wprowadz haslo (minimum 4 znaki)';
        }
        return errors;
      }}
      onSubmit={(
        values,
        { setSubmitting, resetForm }
      ) => {
        validation(values);
        resetForm();
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className="login">
            {errorActive ? (
              <div>
                Podano złą nazwę użytkownika lub
                hasło
              </div>
            ) : null}

            <div>
              <ErrorMessage
                name="newError"
                component="div"
              />
            </div>
            <div>
              <ErrorMessage
                name="formLogin"
                component="div"
              />
            </div>

            <span>Login</span>
            <Field
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
              placeholder="password"
              name="formPassword"
              type="password"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
  return <>{loginPanel}</>;
}

export default LoginPage;
