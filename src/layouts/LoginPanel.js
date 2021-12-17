import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/LoginPanel.scss';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import { editUser } from '../actions/userActions';
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
  const dispatch = useDispatch(editUser());
  const users = useSelector(store => store.users);

  const userLogged = users.filter(
    ({ logged }) => logged === true
  );

  return (
    <nav className="panel">
      {userLogged.length > 0 ? (
        <button
          onClick={() => {
            dispatch(
              editUser(userLogged[0].id, false)
            );
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
