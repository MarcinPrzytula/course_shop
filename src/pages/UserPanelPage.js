import React from 'react';
import ProductInUserPanel from '../components/ProductInUserPanel';

import '../styles/UserPanelPage.scss';

import { useSelector } from 'react-redux';

const UserPanelPage = () => {
  const { users, courses } = useSelector(
    store => store
  );

  const loggedUser = users.find(
    user => user.logged === true
  );

  let loggedUserCourses = null;

  let mainPage = 'Log in to view your courses';

  if (loggedUser) {
    loggedUserCourses = courses.filter(course =>
      loggedUser.purchasedCourses.find(
        purchasedCourseId =>
          purchasedCourseId === course.id
      )
    );

    const render = loggedUserCourses.map(
      ({
        authors,
        img,
        vid,
        price,
        title,
        id,
      }) => (
        <ProductInUserPanel
          key={id}
          id={id}
          authors={authors}
          img={img}
          vid={vid}
          title={title}
          price={price}
        />
      )
    );

    mainPage =
      loggedUserCourses.length > 0
        ? render
        : `You are logged in as ${loggedUser.login}  but you don't have any courses`;
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
