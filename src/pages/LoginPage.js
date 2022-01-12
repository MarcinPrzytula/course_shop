import React, {
  useState,
  //   useEffect,
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

import { editUser } from '../store/actions/userActions';

import { useHistory } from 'react-router-dom';

import '../styles/LoginPage.scss';

function LoginPage() {
  const users = useSelector(store => store.users);
  const dispatch = useDispatch();

  const history = useHistory();

  //   const isLogged = users.filter(
  //     ({ logged }) => logged === true
  //   );

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
      ({ userLogin, userPassword }) =>
        userLogin === formLogin &&
        userPassword === formPassword
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
        editUser(
          validationData.loggedUser.id,
          validationData.loggedUser.logged
        )
      );
      history.push('/user_panel');
    } else if (
      userLoginData &&
      returnTheUserIfTheExists === undefined
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

  const validateForm = values => {
    const errors = {};

    if (values.formLogin.length < 3) {
      errors.formLogin =
        'Wprowadz login (minimum 3 znaki)';
    } else if (values.formPassword.length < 4) {
      errors.formPassword =
        'Wprowadz haslo (minimum 4 znaki)';
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
