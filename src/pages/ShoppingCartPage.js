import React from 'react';

import '../styles/ShoppingCartPage.scss';

import { useSelector, useDispatch } from 'react-redux';

import { removeCourseFromShoppingCart } from '../store/actions/userActions';

import { useHistory } from 'react-router-dom';
import img from '../assets/images/img1.PNG';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const ShoppingCartPage = () => {
  const { user, courses } = useSelector(store => store);

  const history = useHistory();
  const dispatch = useDispatch();

  const render = () => {
    let coursesInShoppingCart = [];

    if (user) {
      coursesInShoppingCart = courses.filter(item =>
        user.shoppingCart.find(item2 => item2 === item._id)
      );
    }

    if (coursesInShoppingCart.length > 0 && user) {
      return (
        <>
          <div className="shoppingCart__productsList">
            {coursesInShoppingCart.map(
              ({ authors, price, title, _id }) => (
                <div
                  key={_id}
                  className="shoppingCart__product-container"
                >
                  <div className="shoppingCart__product-img-container">
                    <img
                      className="shoppingCart__product-img"
                      src={img}
                      alt="product "
                    />
                  </div>

                  <div className="shoppingCart__product-info">
                    <span>Title: {title}</span>
                    <span> Price: {price}</span>
                    <span> Author: {authors}</span>
                  </div>

                  <button
                    className="shoppingCart__product-delete_button"
                    onClick={() => {
                      dispatch(
                        removeCourseFromShoppingCart(_id)
                      );
                    }}
                  >
                    <FontAwesomeIcon icon={faTrashCan} />
                  </button>
                </div>
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
    } else if (coursesInShoppingCart.length === 0 && user) {
      return " You haven't added any product to your cart yet";
    } else
      return 'Log in if you want to have access to the product basket';
  };

  return render();
};

export default ShoppingCartPage;
