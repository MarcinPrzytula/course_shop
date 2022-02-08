import React, { useState } from 'react';
import '../styles/ProductsListPage.scss';

import ProductInProductsList from '../components/ProductInProductsList';

import allCoursesList from '../store/allCoursesList';
import { useSelector } from 'react-redux';

const ProductsListPage = () => {
  const courses = useSelector(
    store => store.courses
  );
  const [productsList, setProductList] = useState(
    courses.map(
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
    )
  );

  //   let productsList = allCoursesList.map(
  //     ({ authors, img, price, title, id }) => (
  //       <ProductInProductsList
  //         key={id}
  //         id={id}
  //         authors={authors}
  //         img={img}
  //         title={title}
  //         price={price}
  //       />
  //     )
  //   );

  const searchCourse = value => {
    const X = courses.filter(item =>
      item.title
        .toLowerCase()
        .includes(value.toLowerCase())
    );
    setProductList(
      X.map(
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
      )
    );
  };
  const selectCategory = value => {
    const X = courses.filter(
      item => item.category === value
    );
    setProductList(
      X.map(
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
      )
    );
  };
  return (
    <>
      <div>
        <input
          type="text"
          id="myInput"
          onChange={e =>
            searchCourse(e.target.value)
          }
          placeholder="Search for names.."
        />

        <ul id="myUL">
          <li>
            <span
              onClick={() =>
                selectCategory('maths')
              }
            >
              Maths
            </span>
          </li>
          <li>
            <span
              onClick={() =>
                selectCategory('programming')
              }
            >
              Programming
            </span>
          </li>{' '}
          <li>
            <span
              onClick={() =>
                selectCategory('languages')
              }
            >
              Languages
            </span>
          </li>
        </ul>
      </div>
      <div className="productsList">
        {productsList}
      </div>
    </>
  );
};

export default ProductsListPage;
