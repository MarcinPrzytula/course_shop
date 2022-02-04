import React from 'react';
import ReactPlayer from 'react-player';

import { useSelector } from 'react-redux';
import allCoursesList from '../store/allCoursesList';

import '../styles/Product.scss';

const ProductPage = () => {
  const users = useSelector(store => store.users);

  const loggedUser = users.find(
    user => user.logged === true
  );

  const selectedCourse = allCoursesList.find(
    course =>
      course.id === loggedUser.selectedCourse
  );

  return (
    <div className="product">produkt id</div>
  );
};

export default ProductPage;
