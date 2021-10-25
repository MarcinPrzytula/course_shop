import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';

const list = [
  { name: 'Main page', path: '/', exact: true },
  { name: 'Products list', path: '/products' },
  { name: 'Log in', path: '/login' },
  { name: 'Registration', path: '/registration' },
  { name: 'User Panel', path: '/user_panel' },
];

const menu = list.map(item => (
  <li key={item.name}>
    <NavLink
      to={item.path}
      exact={item.exact ? item.exact : false}
    >
      {item.name}
    </NavLink>
  </li>
));

const Navigation = () => {
  return (
    <nav className="main">
      <ul>{menu}</ul>
    </nav>
  );
};

export default Navigation;
