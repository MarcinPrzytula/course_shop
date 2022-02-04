import React from 'react';

import { useSelector } from 'react-redux';
import allCoursesList from '../store/allCoursesList';
import SelectedProduct from '../components/SelectedProduct';

import '../styles/Product.scss';

const SelectedProductPage = () => {
  const users = useSelector(store => store.users);

  const loggedUser = users.find(
    user => user.logged === true
  );

  const selectedCourse = allCoursesList.find(
    course =>
      course.id === loggedUser.selectedCourse
  );
  const { title, vid, authors } = selectedCourse;
  return (
    <SelectedProduct
      title={title}
      vid={vid}
      authors={authors}
    />
  );
};

export default SelectedProductPage;
