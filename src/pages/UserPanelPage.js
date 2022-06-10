import React, { useEffect } from 'react';
import Product from '../components/Product';

import '../styles/UserPanelPage.scss';

import { useSelector, useDispatch } from 'react-redux';
import { fetchUserData } from '../store/actions/userActions';
import { fetchCoursesData } from '../store/actions/courseActions';
const UserPanelPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserData());
    dispatch(fetchCoursesData());
  }, [dispatch]);

  const { user, courses } = useSelector(store => store);
  let loggedUserCourses = null;

  let mainPage = 'Log in to view your courses';

  let render = null;

  if (user) {
    loggedUserCourses = courses.filter(course =>
      user.purchasedCourses.find(
        purchasedCourseId => purchasedCourseId === course._id
      )
    );

    render = loggedUserCourses.map(
      ({ authors, price, title, _id, category, rating }) => {
        return (
          <div key={_id} className="userPanel__product">
            <Product
              key={_id}
              _id={_id}
              authors={authors}
              title={title}
              price={price}
              category={category}
              rating={rating}
            />
          </div>
        );
      }
    );

    mainPage =
      loggedUserCourses.length > 0 ? render : `You don't have any courses`;
  }

  return (
    <>
      <div className="userPanel__productList">{mainPage}</div>
    </>
  );
};

export default UserPanelPage;
