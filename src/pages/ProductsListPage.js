import React, { useState } from 'react';
import '../styles/ProductsListPage.scss';

import ProductInProductsList from '../components/ProductInProductsList';

import { useSelector } from 'react-redux';

const ProductsListPage = () => {
  const courses = useSelector(
    store => store.courses
  );

  const [productsList, setProductList] = useState(
    courses.map(
      ({
        authors,
        img,
        price,
        title,
        id,
        rating,
        category,
      }) => (
        <ProductInProductsList
          key={id}
          id={id}
          authors={authors}
          img={img}
          title={title}
          price={price}
          rating={rating}
          category={category}
        />
      )
    )
  );

  const searchCourse = value => {
    const filterCourses = courses.filter(item =>
      item.title
        .toLowerCase()
        .includes(value.toLowerCase())
    );
    setProductList(
      filterCourses.map(
        ({
          authors,
          img,
          price,
          title,
          id,
          rating,
          category,
        }) => (
          <ProductInProductsList
            key={id}
            id={id}
            authors={authors}
            img={img}
            title={title}
            price={price}
            rating={rating}
            category={category}
          />
        )
      )
    );
  };
  const selectCategory = value => {
    let filterCourses = courses.filter(
      item => item.category === value
    );

    if (value === 'all') {
      filterCourses = courses;
    }
    setProductList(
      filterCourses.map(
        ({
          authors,
          img,
          price,
          title,
          id,
          rating,
          category,
        }) => (
          <ProductInProductsList
            key={id}
            id={id}
            authors={authors}
            img={img}
            title={title}
            price={price}
            rating={rating}
            category={category}
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
          <li>
            <span
              onClick={() =>
                selectCategory('all')
              }
            >
              All category
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
