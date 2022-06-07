import React, { useEffect } from 'react';
import Product from '../components/Product';

import '../styles/UserPanelPage.scss';

import { useSelector, useDispatch } from 'react-redux';
import { fetchUserData } from '../store/actions/userActions';

const UserPanelPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  const { user, courses } = useSelector(store => store);
  let loggedUserCourses = null;

  let mainPage = 'Log in to view your courses';

  if (user) {
    loggedUserCourses = courses.filter(course =>
      user.purchasedCourses.find(
        purchasedCourseId => purchasedCourseId === course._id
      )
    );

    const render = loggedUserCourses.map(
      ({ authors, price, title, _id, category, rating }) => (
        <Product
          key={_id}
          _id={_id}
          authors={authors}
          title={title}
          price={price}
          category={category}
          rating={rating}
        />
      )
    );

    mainPage =
      loggedUserCourses.length > 0 ? render : `You don't have any courses`;
  }

  return (
    <>
      <div className="userPanel_productList">{mainPage}</div>
    </>
  );
};

export default UserPanelPage;
