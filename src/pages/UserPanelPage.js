import React from 'react';
import Product from '../components/Product';

import '../styles/UserPanelPage.scss';

import { useSelector } from 'react-redux';

const UserPanelPage = () => {
  const { user, courses } = useSelector(store => store);
  console.log(user);
  let loggedUserCourses = null;

  let mainPage = 'Log in to view your courses';

  if (user) {
    loggedUserCourses = courses.filter(course =>
      user.purchasedCourses.find(
        purchasedCourseId =>
          purchasedCourseId === course._id
      )
    );

    const render = loggedUserCourses.map(
      ({
        authors,
        price,
        title,
        _id,
        category,
        rating,
      }) => (
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
      loggedUserCourses.length > 0
        ? render
        : `You are logged in as ${user.login}  but you don't have any courses`;
  }

  return (
    <>
      <div className="userPanel_productList">
        {mainPage}
      </div>
    </>
  );
};

export default UserPanelPage;
