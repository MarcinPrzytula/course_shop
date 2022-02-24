import React from 'react';

import '../styles/ShoppingCartPage.scss';

import {
  useSelector,
  useDispatch,
} from 'react-redux';

import { removeCourseFromShoppingCart } from '../store/actions/userActions';

import { useHistory } from 'react-router-dom';

const ShoppingCartPage = () => {
  const { users, courses } = useSelector(
    store => store
  );

  const history = useHistory();
  const dispatch = useDispatch();

  const render = () => {
    const loggedUser = users.find(
      user => user.logged === true
    );

    let coursesInShoppingCart = [];

    if (loggedUser) {
      coursesInShoppingCart = courses.filter(
        item =>
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
                <>
                  <div className="shoppingCart__product-container">
                    <div className="shoppingCart__product-title">
                      <span>{title}</span>
                    </div>
                    <div className="shoppingCart__product-img-container">
                      <img
                        className="shoppingCart__product-img"
                        src={img}
                        alt="product "
                      />
                    </div>
                    <div className="shoppingCart__product-price">
                      <span>Price: </span>
                      <span>{price}</span>
                    </div>
                    <div className="shoppingCart__product-author">
                      <span>Authors: </span>
                      <span>{authors}</span>
                    </div>

                    <button
                      className="shoppingCart__product-button"
                      onClick={() => {
                        dispatch(
                          removeCourseFromShoppingCart(
                            id
                          )
                        );
                      }}
                    >
                      <span>
                        Remove from cart
                      </span>
                    </button>
                  </div>
                </>
              )
            )}
          </div>
          <button
            className="shoppingCart__button"
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
