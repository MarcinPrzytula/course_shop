import React from 'react';

import '../styles/Product.scss';

import {
  useSelector,
  useDispatch,
} from 'react-redux';
import { addCourseToTheUser } from '../actions/userActions';

const UserProduct = ({
  title,
  img,
  price,
  authors,
  id,
}) => {
  const users = useSelector(store => store.users);
  const dispatch = useDispatch();

  const loggedUser = users.filter(
    user => user.logged === true
  );
  //   console.log(loggedUser);
  return (
    <div className="product">
      <div className="product__title">
        <span>{title}</span>
      </div>
      <div className="product__img">
        <img src={img} alt="product " />
      </div>
      <div className="product__price">
        <span>Price: </span>
        <span>{price}</span>
      </div>
      <div className="product__author">
        <span>Authors: </span>
        <span>{authors}</span>
      </div>
      {/* <button
        onClick={
          loggedUser.length > 0
            ? () => {
                dispatch(
                  addCourseToTheUser(
                    loggedUser[0].id,
                    {
                      title,
                      img,
                      price,
                      authors,
                      id,
                    }
                  )
                );
              }
            : () => {
                alert('log in to buy the course');
              }
        }
      >
        {loggedUser.length > 0 ? 'Buy' : 'Log in'}
      </button> */}
    </div>
  );
};

export default UserProduct;
