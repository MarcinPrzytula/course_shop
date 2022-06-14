import React, { useRef, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { FETCH_USER_DATA } from '../store/actions/userActions';

import axios from 'axios';

import '../styles/LoginPanel.scss';

const LoginPanel = () => {
  const user = useSelector(store => store.user);
  const ref = useRef();
  const history = useHistory();
  const dispatch = useDispatch();

  const [isOpenModal, setIsOpenModal] = useState(false);

  const URL = process.env.REACT_APP_API
    ? `${process.env.REACT_APP_API.trim()}api/logout`
    : `http://localhost:3001/api/logout`;

  const list = [
    { name: 'Log in', path: '/login' },
    {
      name: 'Registration',
      path: '/registration',
    },
  ];

  const menu = list.map(item => (
    <button key={item.name} className="not-logged-in__button">
      <NavLink
        className="not-logged-in__item"
        to={item.path}
        exact={item.exact ? item.exact : false}
      >
        {item.name}
      </NavLink>
    </button>
  ));

  return (
    <div className="login-panel">
      {user ? (
        <div
          onMouseLeave={
            isOpenModal
              ? () => {
                  setIsOpenModal(false);
                  ref.current.classList.remove('logged-panel--visible');
                }
              : null
          }
          ref={ref}
          className="logged-panel"
        >
          <button
            className="logged-panel__menu-button"
            onTouchEnd={() => {
              ref.current.classList.toggle('logged-panel--visible');
              console.log('touch');
            }}
            onMouseEnter={
              !isOpenModal
                ? () => {
                    setIsOpenModal(true);
                    console.log('mysz');
                    ref.current.classList.add('logged-panel--visible');
                  }
                : null
            }
          >
            {user.login.charAt(0).toUpperCase()}
          </button>
          <div className="logged-panel__menu">
            <div className="logged-panel__who-logged-in">{user.login}</div>
            <button
              className="logged-panel__log-out-button"
              onClick={() => {
                axios({
                  method: 'GET',
                  withCredentials: true,
                  url: URL,
                }).then(() => {
                  dispatch({
                    type: FETCH_USER_DATA,
                    payload: null,
                  });
                });

                history.push('/login');
              }}
            >
              Log out
            </button>
          </div>{' '}
        </div>
      ) : (
        <div className="not-logged-in">{menu}</div>
      )}
    </div>
  );
};

export default LoginPanel;
