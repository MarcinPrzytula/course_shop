import { Formik, Field, ErrorMessage } from 'formik';

import '../styles/RegistrationPage.scss';

import { useHistory } from 'react-router-dom';
import { addUser } from '../store/actions/userActions';
import { useSelector, useDispatch } from 'react-redux';

import axios from 'axios';

function RegistrationPage() {
  const history = useHistory();
  const { user, courses } = useSelector(store => store);

  const dispatch = useDispatch();

  const registrationSuccessful = values => {
    dispatch(addUser(values));
  };

  return (
    <>
      <div className="registrationPage__user-info">
        <span>Register and start learning!</span>
      </div>
      <Formik
        initialValues={{
          login: '',
          password: '',
        }}
        validate={values => {
          const errors = {};

          if (values.login.length < 3) {
            errors.login = 'Enter login (minimum 3 characters)';
          } else if (values.password.length < 4) {
            errors.password = 'Enter password (minimum 4 characters)';
          }
          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          registrationSuccessful(values);
          resetForm();
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="login">
              <ErrorMessage name="login" component="div" />
              <span>Login</span>
              <Field
                className="registrationPage__input"
                name="login"
                placeholder="login"
              />
            </div>
            <div className="password">
              <ErrorMessage name="password" component="div" />
              <span>Password</span>
              <Field
                className="registrationPage__input"
                placeholder="password"
                name="password"
                type="password"
              />
            </div>
            <button type="submit" className="registrationPage__button">
              Submit
            </button>
          </form>
        )}
      </Formik>
    </>
  );
}

export default RegistrationPage;
