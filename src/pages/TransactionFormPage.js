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
  const { users, courses } = useSelector(
    store => store
  );
  const history = useHistory();
  const dispatch = useDispatch();

  const loggedUser = users.find(
    user => user.logged === true
  );

  const coursesToBuy = allCoursesList.filter(
    item =>
      courses.find(item2 => item2.id === item.id)
  );

  console.log(loggedUser);
  console.log(courses);
  return (
    <>
      <div>
        <span>
          You want to purchase a total of{' '}
          {courses.length} courses
        </span>
      </div>
      <button
        onClick={
          loggedUser
            ? () => {
                dispatch(
                  buyCourse(
                    loggedUser.id,
                    coursesToBuy
                  )
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
