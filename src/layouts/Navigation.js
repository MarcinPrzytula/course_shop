import { useState, useEffect, useRef } from 'react';

import { useSelector } from 'react-redux';

import { useLocation, NavLink } from 'react-router-dom';
import '../styles/Navigation.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
  // Create a ref that we add to the element for which we want to detect outside clicks
  const ref = useRef();
  // State for our modal
  const [isModalOpen, setModalOpen] = useState(false);
  // Call hook passing in the ref and a function to call on outside click

  const location = useLocation();
  const { users } = useSelector(store => store);
  //   const loggedUser = users.find(
  //     user => user.logged === true
  //   );

  const loggedUser = users;
  const getNavLinkClass = path => {
    return location.pathname === path
      ? 'navigation__item-wraper active'
      : 'navigation__item-wraper';
  };
  const shoppingCartIcon =
    loggedUser?.shoppingCart.length > 0 ? (
      <div className="navigation__cart navigation__shoppingCtActive">
        <FontAwesomeIcon icon={faCartPlus} />
      </div>
    ) : (
      <div className="navigation__cart ">
        <FontAwesomeIcon icon={faCartPlus} />
      </div>
    );
  const list = [
    // {
    //   name: 'Main page',
    //   path: '/',
    //   exact: true,
    // },
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
      isShoppingCartt: true,
    },
  ];

  useOnClickOutside(ref, () => setModalOpen(false));
  // Hook
  function useOnClickOutside(ref, handler) {
    useEffect(
      () => {
        const listener = event => {
          // Do nothing if clicking ref's element or descendent elements
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
          document.removeEventListener(
            'mousedown',
            listener
          );
          document.removeEventListener(
            'touchstart',
            listener
          );
        };
      },
      // Add ref and handler to effect dependencies
      // It's worth noting that because passed in handler is a new ...
      // ... function on every render that will cause this effect ...
      // ... callback/cleanup to run every render. It's not a big deal ...
      // ... but to optimize you can wrap handler in useCallback before ...
      // ... passing it into this hook.
      [ref, handler]
    );
  }

  const menu = list.map(item => (
    <li
      className={getNavLinkClass(item.path)}
      key={item.name}
      onClick={() => setModalOpen(false)}
    >
      <NavLink
        className="navigation__item "
        to={item.path}
        exact={item.exact ? item.exact : false}
      >
        {item.isShoppingCartt
          ? shoppingCartIcon
          : item.name}
      </NavLink>
    </li>
  ));

  return (
    <>
      <nav ref={ref} className="navigation telOnly">
        {isModalOpen ? (
          <>
            <ul className="navigation__list">{menu}</ul>
          </>
        ) : (
          <button
            className="navigation__burger"
            onClick={() => setModalOpen(true)}
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
