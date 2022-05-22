import { useState, useEffect, useRef } from 'react';

import { useSelector } from 'react-redux';

import { useLocation, NavLink } from 'react-router-dom';
import '../styles/Navigation.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
  const ref = useRef();
  const [isModalOpen, setModalOpen] = useState(false);

  const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
      const listener = event => {
        if (
          !ref.current ||
          ref.current.contains(event.target)
        ) {
          return;
        }
        handler(event);
      };

      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);
      return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener(
          'touchstart',
          listener
        );
      };
    }, [ref, handler]);
  };

  useOnClickOutside(ref, () => setModalOpen(false));
  const location = useLocation();
  const { user } = useSelector(store => store);
  const list = [
    {
      name: 'Products list',
      path: '/',
    },
    {
      name: 'User Panel',
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
      ? 'navigation__item-wraper active'
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
            <FontAwesomeIcon
              icon={faCartShopping}
              //   className="fa-stack"
            />
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
    <li
      className={getNavLinkClass(item.path)}
      key={item.name}
    >
      <NavLink
        onClick={() => setModalOpen(false)}
        className="navigation__item "
        to={item.path}
        exact={item.exact ? item.exact : false}
      >
        {item.isShoppingCart
          ? shoppingCartIcon()
          : item.name}
      </NavLink>
    </li>
  ));

  return (
    <>
      <nav ref={ref} className="navigation telOnly">
        {isModalOpen ? (
          <>
            <button
              className="navigation__burger"
              onClick={() => setModalOpen(!isModalOpen)}
            >
              <span className="fa fa-bars"></span>
            </button>
            <ul className="navigation__list">{menu}</ul>
          </>
        ) : (
          <button
            className="navigation__burger"
            onClick={() => setModalOpen(!isModalOpen)}
          >
            <span className="fa fa-bars"></span>
          </button>
        )}
      </nav>

      <nav className="navigation desktopOnly">
        <ul className="navigation__list">{menu}</ul>
      </nav>
      <div></div>
    </>
  );
};

export default Navigation;
