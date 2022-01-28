import React from 'react';
import Styles from './styles';
import { Form, Field } from 'react-final-form';
import Card from './Card';
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from './cardUtils';

import { useHistory } from 'react-router-dom';
import { buyCourse } from '../../store/actions/userActions';
import allCoursesList from '../../store/allCoursesList';

const submit = () => {
  console.log('x');
};
const PaymentForm = () => (
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
                format={formatCreditCardNumber}
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
                disabled={submitting || pristine}
              >
                Reset
              </button>
            </div>
          </form>
        );
      }}
    />
  </Styles>
);

export default PaymentForm;
