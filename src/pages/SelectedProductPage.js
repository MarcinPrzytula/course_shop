import React from 'react';

import { useSelector } from 'react-redux';
import ReactPlayer from 'react-player';

import '../styles/Product.scss';

const SelectedProductPage = () => {
  const { users, courses } = useSelector(
    store => store
  );

  const loggedUser = users.find(
    user => user.logged === true
  );

  const selectedCourse = courses.find(
    course =>
      course.id === loggedUser.selectedCourse
  );
  const { title, vid, authors } = selectedCourse;
  return (
    <div className="container">
      <span>
        You are currently viewing the {title}{' '}
        course by {authors}{' '}
      </span>

      <div className="product__vid">
        <ReactPlayer
          className="react-player fixed-bottom"
          url={vid}
          width="100%"
          height="100%"
          controls={true}
        />
      </div>
      <div className="product__author"></div>
    </div>
  );
};

export default SelectedProductPage;
