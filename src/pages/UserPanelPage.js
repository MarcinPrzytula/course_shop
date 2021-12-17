import React from 'react';
import UserProduct from '../components/UserProduct';

import '../styles/UserPanelPage.scss';

import { useSelector } from 'react-redux';

const UserPanelPage = () => {
  const users = useSelector(store => store.users);

  const loggedUser = users.filter(
    user => user.logged === true
  );

  let loggedUserCourses = '';

  if (loggedUser.length > 0) {
    loggedUserCourses = loggedUser[0].courses.map(
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
  }

  let mainPage =
    'Zaloguj się aby wyświetlić swoje kursy';
  if (loggedUser.length > 0) {
    mainPage =
      loggedUserCourses.length > 0
        ? loggedUserCourses
        : `Zalogowałeś się jako --->  ${
            loggedUser.length > 0
              ? loggedUser[0].userLogin
              : null
          }  <--- ale nie masz żadnych kursów`;
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
