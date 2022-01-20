import React from 'react';

import '../styles/HomePage.css';

import {
  useSelector,
  useDispatch,
} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { buyCourse } from '../store/actions/userActions';
import allCoursesList from '../store/allCoursesList';

const TransactionFormPage = () => {
  const users = useSelector(store => store.users);
  const history = useHistory();
  const dispatch = useDispatch();

  const loggedUser = users.find(
    user => user.logged === true
  );
  let coursesToBuy = null;
  let coursesToBuyId = null;

  if (loggedUser) {
    coursesToBuy = allCoursesList.filter(course =>
      loggedUser.shoppingCart.find(
        shoppingCartCourseId =>
          shoppingCartCourseId === course.id
      )
    );
    coursesToBuyId = coursesToBuy.map(
      item => item.id
    );
  }

  return (
    <>
      <div>
        <span>
          You want to purchase a total of{' '}
          {loggedUser
            ? loggedUser.shoppingCart.length
            : 0}{' '}
          courses
        </span>
      </div>
      <button
        onClick={
          loggedUser
            ? () => {
                dispatch(
                  buyCourse(coursesToBuyId)
                );
                history.push('/user_panel');
              }
            : null
        }
      >
        {' '}
        Purchase and pay
      </button>
    </>
  );
};

export default TransactionFormPage;
