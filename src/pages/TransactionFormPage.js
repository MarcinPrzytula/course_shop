import React from 'react';

import '../styles/HomePage.css';

import {
  useSelector,
  useDispatch,
} from 'react-redux';

import { useHistory } from 'react-router-dom';
import { buyCourse } from '../store/actions/userActions';
import allCoursesList from '../store/allCoursesList';

import Styles from '../components/credit_card_form/styles';
import { Form, Field } from 'react-final-form';
import Card from '../components/credit_card_form/Card';
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from '../components/credit_card_form/cardUtils';

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
  const submit = () => {
    if (loggedUser) {
      dispatch(buyCourse(coursesToBuyId));
      history.push('/user_panel');
    } else {
      history.push('/login');
    }
  };

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
      <Styles>
        <Form
          onSubmit={submit}
          render={({
            handleSubmit,
            form,
            submitting,
            pristine,
            values,
            active,
          }) => {
            return (
              <form onSubmit={handleSubmit}>
                <Card
                  number={values.number || ''}
                  name={values.name || ''}
                  expiry={values.expiry || ''}
                  cvc={values.cvc || ''}
                  focused={active}
                />
                <div>
                  <Field
                    required
                    name="number"
                    component="input"
                    type="text"
                    pattern="[\d| ]{16,22}"
                    placeholder="Card Number"
                    format={
                      formatCreditCardNumber
                    }
                  />
                </div>
                <div>
                  <Field
                    required
                    name="name"
                    component="input"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <Field
                    required
                    name="expiry"
                    component="input"
                    type="text"
                    pattern="\d\d/\d\d"
                    placeholder="Valid Thru"
                    format={formatExpirationDate}
                  />
                  <Field
                    required
                    name="cvc"
                    component="input"
                    type="text"
                    pattern="\d{3,4}"
                    placeholder="CVC"
                    format={formatCVC}
                  />
                </div>
                <div className="buttons">
                  <button
                    type="submit"
                    disabled={submitting}
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={form.reset}
                    disabled={
                      submitting || pristine
                    }
                  >
                    Reset
                  </button>
                </div>
              </form>
            );
          }}
        />
      </Styles>
    </>
  );
};

export default TransactionFormPage;
