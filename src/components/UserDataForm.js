import { Formik, Field, Form, ErrorMessage } from 'formik';
import '../styles/UserDataForm.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

const UserDataForm = ({ handler, buttonName }) => {
  return (
    <Formik
      initialValues={{
        login: '',
        password: '',
      }}
      validate={({ login, password }) => {
        const errors = {};
        const blacklist = ['<', '>', '!'];

        if (login.length < 3) {
          errors.login = 'Enter login (minimum 3 characters)';
        } else if (blacklist.some(item => login.includes(item))) {
          errors.login = 'Without <, >, !';
        } else if (password.length < 4) {
          errors.password = 'Enter password (minimum 4 characters)';
        }
        return errors;
      }}
      onSubmit={({ login, password }, { resetForm }) => {
        handler(login.toLowerCase(), password);
        resetForm();
      }}
    >
      {({ errors, touched, values }) => (
        <Form className="userDataForm">
          <div className="userDataForm__login">
            <div className="userDataForm__error">
              {errors.login && touched.login ? (
                <ErrorMessage name="login" component="div" />
              ) : null}
            </div>

            <Field
              className="userDataForm__input"
              name="login"
              value={values.login
                .replace(/\s/g, '')
                .replace(/</g, '')
                .replace(/>/g, '')
                .trim()}
              placeholder="Login"
            />
          </div>

          <div className="userDataForm__password">
            <div className="userDataForm__error">
              {' '}
              {errors.password && touched.password ? (
                <ErrorMessage name="password" component="div" />
              ) : null}
            </div>
            <div className="userDataForm__password-input-container">
              <Field
                className="userDataForm__input"
                placeholder="Password"
                name="password"
                type="password"
              />
              <FontAwesomeIcon
                className="userDataForm__password userDataForm__password--lock-icon"
                icon={faLock}
              />
            </div>
          </div>

          <button type="submit" className="userDataForm__button">
            {buttonName}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default UserDataForm;
