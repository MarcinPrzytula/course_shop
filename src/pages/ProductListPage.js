import React from 'react';
import '../styles/ProductListPage.scss';

// import { Link } from 'react-router-dom';
import Product from '../components/Product';

// import { addTask } from '../actions/appActions';
// import {
//   useDispatch,
//   useSelector,
// } from 'react-redux';

import { useSelector } from 'react-redux';

const ProductListPage = () => {
  const products = useSelector(
    store => store.products
  );

  const productsList = products.map(
    ({ authors, img, price, title, id }) => (
      <Product
        key={id}
        id={id}
        authors={authors}
        img={img}
        title={title}
        price={price}
      />
    )
  );

  return (
    <div className="productsList">
      {productsList}
    </div>
  );
};

export default ProductListPage;
