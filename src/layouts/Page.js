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

  const pages = list.map(item => (
    <Route
      key={item.name}
      path={item.path ? item.path : null}
      exact={item.exact ? item.exact : null}
      component={item.name}
    />
  ));

  return (
    <>
      <Switch>
        {pages}
        {/* <Route
          path="/"
          exact
          component={HomePage}
        />
        <Route
          path="/products"
          component={ProductListPage}
        />
        <Route
          path="/login"
          component={LoginPage}
        />
        <Route
          path="/registration"
          component={RegistrationPage}
        />
        <Route
          path="/user_panel"
          component={UserPanelPage}
        />
        <Route
          path="/shopping_cart"
          component={ShoppingCartPage}
        />
        <Route
          path="/transaction_form"
          component={TransactionFormPage}
        />
        <Route component={ErrorPage} /> */}
      </Switch>
    </>
  );
};

export default Page;
