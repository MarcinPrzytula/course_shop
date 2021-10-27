import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/LoginPanel.scss';

const list = [
  { name: 'Log in', path: '/login' },
  { name: 'Registration', path: '/registration' },
];

const menu = list.map(item => (
  <li
    className="panel__item-wraper"
    key={item.name}
  >
    <NavLink
      className="panel__item"
      to={item.path}
      exact={item.exact ? item.exact : false}
    >
      {item.name}
    </NavLink>
  </li>
));

const LoginPanel = () => {
  return (
    <nav className="panel">
      <ul className="panel__list">{menu}</ul>
    </nav>
  );
};

export default LoginPanel;
