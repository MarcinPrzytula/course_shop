import React from 'react';

import '../styles/HomePage.css';

import {
  useSelector,
  useDispatch,
} from 'react-redux';

import alLCoursesList from '../store/allCoursesList.js';

const ShoppingCartPage = () => {
  const { users, courses } = useSelector(
    store => store
  );

  alLCoursesList.filter(course =>
    courses.includes(course.id)
  );
  console.log(alLCoursesList);
  return (
    <>
      <div>shopping cart page</div>;
    </>
  );
};

export default ShoppingCartPage;
