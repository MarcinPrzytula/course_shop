import HomePage from '../pages/HomePage';
import ProductsListPage from '../pages/ProductsListPage';
import ProductPage from '../pages/ProductPage';
import LoginPage from '../pages/LoginPage';
import RegistrationPage from '../pages/RegistrationPage.js';
import UserPanelPage from '../pages/UserPanelPage';
import ShoppingCartPage from '../pages/ShoppingCartPage';
import TransactionFormPage from '../pages/TransactionFormPage';
import ErrorPage from '../pages/ErrorPage';

const list = [
  {
    name: HomePage,
    path: '/',
    exact: true,
  },
  {
    name: ProductsListPage,
    path: '/products',
  },
  {
    name: ProductPage,
    path: '/product',
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
