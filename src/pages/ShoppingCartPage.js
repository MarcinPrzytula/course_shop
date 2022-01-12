import React from 'react';

import '../styles/HomePage.css';

import {
  useSelector,
  useDispatch,
} from 'react-redux';

import allCoursesList from '../store/allCoursesList.js';

const ShoppingCartPage = () => {
  const { users, courses } = useSelector(
    store => store
  );
  console.log(allCoursesList);
  console.log(courses);
  const y = allCoursesList.filter(item =>
    courses.find(item2 => item2.id == item.id)
  );
  console.log(y);
  return (
    <>
      <div>shopping cart page</div>;
    </>
  );
};

export default ShoppingCartPage;
