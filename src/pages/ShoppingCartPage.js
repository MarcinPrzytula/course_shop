import React from 'react';

import '../styles/ShoppingCartPage.scss';

import { useSelector } from 'react-redux';

import allCoursesList from '../store/allCoursesList.js';

import ShoppingCartProduct from '../components/ShoppingCartProduct';
import { useHistory } from 'react-router-dom';

const ShoppingCartPage = () => {
  const users = useSelector(store => store.users);
  const history = useHistory();

  const render = () => {
    const loggedUser = users.find(
      user => user.logged === true
    );

    let coursesInShoppingCart = [];

    if (loggedUser) {
      coursesInShoppingCart =
        allCoursesList.filter(item =>
          loggedUser.shoppingCart.find(
            item2 => item2 === item.id
          )
        );
    }

    if (
      coursesInShoppingCart.length > 0 &&
      loggedUser
    ) {
      return (
        <>
          <div className="shoppingCart_productList">
            {coursesInShoppingCart.map(
              ({
                authors,
                img,
                price,
                title,
                id,
              }) => (
                <ShoppingCartProduct
                  key={id}
                  id={id}
                  authors={authors}
                  img={img}
                  title={title}
                  price={price}
                />
              )
            )}
          </div>
          <button
            onClick={() => {
              history.push('/transaction_form');
            }}
          >
            Summary and payment
          </button>
        </>
      );
    } else if (
      coursesInShoppingCart.length === 0 &&
      loggedUser
    ) {
      return " You haven't added any product to your cart yet";
    } else
      return 'Log in if you want to have access to the product basket';
  };

  return render();
};

export default ShoppingCartPage;