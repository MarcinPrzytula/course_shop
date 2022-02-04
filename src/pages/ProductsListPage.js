import React from 'react';
import '../styles/ProductListPage.scss';

import ProductInProductsList from '../components/ProductInProductsList';

import allCoursesList from '../store/allCoursesList';

const ProductsListPage = () => {
  const productsList = allCoursesList.map(
    ({ authors, img, price, title, id }) => (
      <ProductInProductsList
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

export default ProductsListPage;
