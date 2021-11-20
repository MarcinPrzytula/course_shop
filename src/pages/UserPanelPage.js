import React from 'react';

import '../styles/HomePage.css';

import { useSelector } from 'react-redux';

const UserPanelPage = () => {
  const users = useSelector(store => store.users);

  const loggedUser = users.filter(
    user => user.logged === true
  );

  if (loggedUser.length > 0) {
    console.log(loggedUser[0].userLogin);
  }

  const mainPage =
    ' Zaloguj się aby wyświetlić swoje kursy';

  return (
    <>
      {/* {loggedUser.userLogin} */}
      <div className="userPanel">{mainPage}</div>
    </>
  );
};

export default UserPanelPage;
