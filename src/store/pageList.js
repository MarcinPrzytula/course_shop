// import HomePage from '../pages/HomePage';
import ProductsListPage from '../pages/ProductsListPage';
import SelectedProductPage from '../pages/SelectedProductPage';
import LoginPage from '../pages/LoginPage';
import RegistrationPage from '../pages/RegistrationPage.js';
import UserPanelPage from '../pages/UserPanelPage';
import ShoppingCartPage from '../pages/ShoppingCartPage';
import TransactionFormPage from '../pages/TransactionFormPage';
import ErrorPage from '../pages/ErrorPage';

const list = [
  {
    name: ProductsListPage,
    path: '/',
    exact: true,
  },
  //   {
  //     name: ProductsListPage,
  //     path: '/products',
  //   },
  {
    name: SelectedProductPage,
    path: '/selected_product',
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

export default list;
