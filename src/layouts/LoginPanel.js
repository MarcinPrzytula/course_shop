import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/LoginPanel.scss';

import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import axios from 'axios';

const list = [
  { name: 'Log in', path: '/login' },
  {
    name: 'Registration',
    path: '/registration',
  },
];

const menu = list.map(item => (
  <li className="panel__item-wraper" key={item.name}>
    <NavLink
      className="panel__item"
      to={item.path}
      exact={item.exact ? item.exact : false}
    >
      {item.name}
    </NavLink>
  </li>
));
const URL = process.env.REACT_APP_API
  ? `${process.env.REACT_APP_API.trim()}api/logout`
  : `http://localhost:3001/api/logout`;
const LoginPanel = () => {
  const user = useSelector(store => store.user);
  const history = useHistory();
  return (
    <nav className="panel">
      {user ? (
        <button
          className="panel__button"
          onClick={() => {
            axios({
              method: 'GET',
              withCredentials: true,
              url: URL,
            });
            history.push('/login');
          }}
        >
          Log out
        </button>
      ) : (
        <ul className="panel__list">{menu}</ul>
      )}
    </nav>
  );
};

export default LoginPanel;
