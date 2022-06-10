import React, { useRef } from 'react';
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
    <button key={item.name} className="not-logged-in-panel__button">
      <NavLink
        className="not-logged-in-panel__item"
        to={item.path}
        exact={item.exact ? item.exact : false}
      >
        {item.name}
      </NavLink>
    </button>
  ));

  return (
    <>
      {user ? (
        <div className="logged-panel">
          <button
            className="logged-panel__menu-button"
            onMouseOver={() => {
              ref.current.classList.add('logged-panel__menu--active');
            }}
            // onMouseOut={() => {
            //   ref.current.classList.remove('logged-panel__menu--active');
            // }}
          >
            {user.login.charAt(0).toUpperCase()}
          </button>
          <div
            ref={ref}
            onMouseOver={() => {
              ref.current.classList.add('logged-panel__menu--active');
            }}
            onMouseOut={() => {
              ref.current.classList.remove('logged-panel__menu--active');
            }}
            className="logged-panel__menu"
          >
            <div className="logged-panel__who-logged-in">{user.login}</div>
            <button
              className="logged-panel__button"
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
        <div className="not-logged-in-panel">{menu}</div>
      )}
    </>
  );
};

export default LoginPanel;
