import React from 'react';

import '../styles/ShoppingCartPage.scss';

import {
  useSelector,
  useDispatch,
} from 'react-redux';

import allCoursesList from '../store/allCoursesList.js';

import UserProduct from '../components/UserProduct';
import { useHistory } from 'react-router-dom';

const ShoppingCartPage = () => {
  const { users, courses } = useSelector(
    store => store
  );
  const history = useHistory();

  const coursesToBuy = allCoursesList.filter(
    item =>
      courses.find(item2 => item2.id === item.id)
  );
  console.log(coursesToBuy);
  console.log(courses);
  const renderCoursesToBuy = coursesToBuy.map(
    ({ authors, img, price, title, id }) => (
      <UserProduct
        key={id}
        id={id}
        authors={authors}
        img={img}
        title={title}
        price={price}
      />
    )
  );
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
