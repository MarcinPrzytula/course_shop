import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fetchUserData } from '../store/actions/userActions';
import { fetchCoursesData } from '../store/actions/courseActions';

import ReactPlayer from 'react-player';
import vid from '../assets/videos/vid1.mp4';
import '../styles/Product.scss';

const SelectedProductPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserData());
    dispatch(fetchCoursesData());
  }, [dispatch]);

  const { user, courses } = useSelector(store => store);
  const selectedCourse = courses.find(
    course => course._id === user.selectedCourse
  );

  return (
    <div className="container">
      {selectedCourse ? (
        <span>
          You are currently viewing the {selectedCourse.title} course by{' '}
          {selectedCourse.authors}{' '}
        </span>
      ) : null}

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
