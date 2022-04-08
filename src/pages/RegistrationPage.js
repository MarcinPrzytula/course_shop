import { useSelector } from 'react-redux';

import { Formik, Field, ErrorMessage } from 'formik';

import '../styles/RegistrationPage.scss';

import axios from 'axios';

function RegistrationPage() {
  const user = useSelector(store => store.users);

  const registrationSuccessful = values => {
    axios({
      method: 'post',
      data: {
        username: values.login,
        password: values.password,
      },
      withCredentials: true,
      url: 'http://localhost:3001/api/register',
    }).then(res => {
      console.log(typeof res.data);
      if (res.data === 'User Already Exsists') return;
    });

    alert(
      `Congratulations! An account has been created, your login is: ${values.login}, remember your password and never give it to anyone!`
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

        if (values.login.length < 3) {
          errors.login =
            'Enter login (minimum 3 characters)';
        } else if (values.password.length < 4) {
          errors.password =
            'Enter password (minimum 4 characters)';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
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
          <button
            type="submit"
            className="registrationPage__button"
          >
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
}

export default RegistrationPage;
