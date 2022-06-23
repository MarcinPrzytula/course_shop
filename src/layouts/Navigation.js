import React from 'react';

import { useSelector } from 'react-redux';

import { useLocation, NavLink } from 'react-router-dom';
import '../styles/Navigation.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
  const location = useLocation();
  const { user } = useSelector(store => store);
  const list = [
    {
      name: 'All courses',
      path: '/',
    },
    {
      name: 'Your courses',
      path: '/user_panel',
    },
    {
      name: ``,
      path: '/shopping_cart',
      isShoppingCart: true,
    },
  ];

  const getNavLinkClass = path => {
    return location.pathname === path
      ? 'navigation__item-wraper navigation__item-wraper--active'
      : 'navigation__item-wraper';
  };

  const shoppingCartIcon = () => {
    if (user) {
      if (user.shoppingCart.length > 0) {
        return (
          <div
            className="navigation__cart navigation__cart--active  fa-stack"
            data-count={user.shoppingCart.length}
          >
            <FontAwesomeIcon icon={faCartShopping} />
          </div>
        );
      } else {
        return (
          <div className="navigation__cart ">
            <FontAwesomeIcon icon={faCartShopping} />
          </div>
        );
      }
    } else {
      return (
        <div className="navigation__cart ">
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
      );
    }
  };

  const menu = list.map(item => (
    <li className={getNavLinkClass(item.path)} key={item.name}>
      <NavLink
        className="navigation__item "
        to={item.path}
        exact={item.exact ? item.exact : false}
      >
        {item.isShoppingCart ? shoppingCartIcon() : item.name}
      </NavLink>
    </li>
  ));

  return (
    <>
      <nav className="navigation">
        <ul className="navigation__list">{menu}</ul>
      </nav>
      <div></div>
    </>
  );
};

export default Navigation;
