import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { fetchUserData, loginUser } from '../store/actions/userActions';

import { useHistory } from 'react-router-dom';

import UserDataForm from '../components/UserDataForm';

import '../styles/LoginPage.scss';

const LoginPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  const history = useHistory();

  const logInSuccessful = (login, password) => {
    const res = dispatch(loginUser(login, password));

    res.then(res => {
      if (res.data !== 'Invalid username or password') {
        history.push('/');
      } else {
        return alert('Invalid username or password');
      }
    });
  };

  return (
    <div className="loginPage">
      <div className="loginPage__user-info">
        <span>Log in to your account!</span>
      </div>
      <UserDataForm
        handler={(login, password) => {
          logInSuccessful(login, password);
        }}
        buttonName={'Log in'}
      />
    </div>
  );
};

export default LoginPage;
