import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import ProductListPage from '../pages/ProductListPage';
import LoginPage from '../pages/LoginPage';
import RegistrationPage from '../pages/RegistrationPage.js';
import UserPanelPage from '../pages/UserPanelPage';
import ShoppingCartPage from '../pages/ShoppingCartPage';
import TransactionFormPage from '../pages/TransactionFormPage';
import ErrorPage from '../pages/ErrorPage';

const Page = () => {
  const list = [
    { name: HomePage, path: '/', exact: true },
    {
      name: ProductListPage,
      path: '/products',
    },
    { name: LoginPage, path: '/login' },
    {
      name: RegistrationPage,
      path: '/registration',
    },
    {
      name: UserPanelPage,
      path: '/user_panel',
    },
    {
      name: ShoppingCartPage,
      path: '/shopping_cart',
    },
    {
      name: TransactionFormPage,
      path: '/transaction_form',
    },
    { name: ErrorPage },
  ];

  const pages = list.map(
    ({ path, exact, name }, key) => (
      <Route
        key={key}
        path={path}
        exact={exact}
        component={name}
      />
    )
  );

  return (
    <>
      <div className="page">
        <Switch>{pages}</Switch>
      </div>
    </>
  );
};

export default Page;
