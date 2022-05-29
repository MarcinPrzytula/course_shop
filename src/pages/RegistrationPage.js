import { Formik, Field, ErrorMessage } from 'formik';

import '../styles/RegistrationPage.scss';

import { useHistory } from 'react-router-dom';

import axios from 'axios';

function RegistrationPage() {
  const history = useHistory();

  const registrationSuccessful = values => {
    const URL = process.env.REACT_APP_API
      ? `${process.env.REACT_APP_API.trim()}api/register`
      : `http://localhost:3001/api/register`;

    axios({
      method: 'post',
      data: {
        username: values.login,
        password: values.password,
      },
      withCredentials: true,
      url: URL,
    }).then(res => {
      if (res.data !== 'User Already Exsists') {
        console.log(res.data);

        alert(
          `Congratulations! An account has been created, your login is: ${values.login}, remember your password and never give it to anyone!`
        );
        history.push('/login');
      } else {
        console.log(res.data);
        alert('User Already Exsists');
      }
    });
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
