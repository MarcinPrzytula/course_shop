import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.scss';

const list = [
  { name: 'Main page', path: '/', exact: true },
  { name: 'Products list', path: '/products' },
  { name: 'User Panel', path: '/user_panel' },
  {
    name: 'Shopping Cart',
    path: '/shopping_cart',
  },
];

const menu = list.map(item => (
  <li
    className="navigation__item-wraper"
    key={item.name}
  >
    <NavLink
      className="navigation__item"
      to={item.path}
      exact={item.exact ? item.exact : false}
    >
      {item.name}
    </NavLink>
  </li>
));

const Navigation = () => {
  const hamburgerActive = () => {
    const navigation = document.querySelector(
      '.navigation__list'
    );

    navigation.classList.toggle(
      'navigation__activeBurger'
    );
  };

  return (
    <>
      <nav className="navigation">
        <button
          className="navigation__burger"
          onClick={hamburgerActive}
        >
          <span className="fa fa-bars"></span>
        </button>
        <ul className="navigation__list">
          {menu}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
