import { Formik, Field, Form, ErrorMessage } from 'formik';

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
        <Form>
          <div className="login">
            {errors.login && touched.login ? (
              <ErrorMessage name="login" component="div" />
            ) : null}
            <span>Login</span>
            <Field
              className="registrationPage__input"
              name="login"
              placeholder="login"
              value={values.login
                .replace(/\s/g, '')
                .replace(/</g, '')
                .replace(/>/g, '')
                .trim()}
            />
          </div>
          <div className="password">
            {errors.password && touched.password ? (
              <ErrorMessage name="password" component="div" />
            ) : null}
            <span>Password</span>
            <Field
              className="registrationPage__input"
              placeholder="password"
              name="password"
              type="password"
            />
          </div>
          <button type="submit" className="registrationPage__button">
            {buttonName}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default UserDataForm;
