import React from 'react';
import UserProduct from '../components/UserProduct';

import '../styles/UserPanelPage.scss';

import { useSelector } from 'react-redux';
import allCoursesList from '../store/allCoursesList';

const UserPanelPage = () => {
  const users = useSelector(store => store.users);

  const loggedUser = users.find(
    user => user.logged === true
  );

  let loggedUserCourses = null;

  let mainPage =
    'Zaloguj się aby wyświetlić swoje kursy';

  if (loggedUser) {
    loggedUserCourses = allCoursesList.filter(
      course =>
        loggedUser.purchasedCourses.find(
          purchasedCourseId =>
            purchasedCourseId === course.id
        )
    );

    const render = loggedUserCourses.map(
      ({ authors, img, price, title, id }) => (
        <UserProduct
          key={id}
          id={id}
          authors={authors}
          img={img}
          title={title}
          price={price}
        />
      )
    );

    mainPage =
      loggedUserCourses.length > 0
        ? render
        : `Zalogowałeś się jako --->  ${loggedUser.login}  <--- ale nie masz żadnych kursów`;
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
