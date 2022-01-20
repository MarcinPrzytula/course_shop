import React from 'react';

import '../styles/ShoppingCartPage.scss';

import {
  useSelector,
  useDispatch,
} from 'react-redux';

import allCoursesList from '../store/allCoursesList.js';

import ShoppingCartProduct from '../components/ShoppingCartProduct';
import { useHistory } from 'react-router-dom';

const ShoppingCartPage = () => {
  const users = useSelector(store => store.users);
  const history = useHistory();

  const loggedUser = users.find(
    user => user.logged === true
  );
  let renderCoursesToBuy = null;

  if (loggedUser) {
    const coursesInShoppingCart =
      allCoursesList.filter(item =>
        loggedUser.shoppingCart.find(
          item2 => item2 === item.id
        )
      );

    renderCoursesToBuy =
      coursesInShoppingCart.map(
        ({ authors, img, price, title, id }) => (
          <ShoppingCartProduct
            key={id}
            id={id}
            authors={authors}
            img={img}
            title={title}
            price={price}
          />
        )
      );
  }
  return (
    <>
      <div className="shoppingCart_productList">
        {renderCoursesToBuy}
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
};

export default ShoppingCartPage;
