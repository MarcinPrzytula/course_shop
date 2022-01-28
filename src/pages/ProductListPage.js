import React from 'react';
import '../styles/ProductListPage.scss';

import Product from '../components/Product';

import allCoursesList from '../store/allCoursesList';

const ProductListPage = () => {
  const productsList = allCoursesList.map(
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