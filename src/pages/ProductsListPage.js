import React, { useState, useEffect } from 'react';
import '../styles/ProductsListPage.scss';

import Product from '../components/Product';

import { useSelector, useDispatch } from 'react-redux';
import { fetchUserData } from '../store/actions/userActions';
import { fetchCoursesData } from '../store/actions/courseActions';

const ProductsListPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserData());
    dispatch(fetchCoursesData());
  }, [dispatch]);

  let courses = null;
  courses = useSelector(store => store.courses);

  const [toggleCategoryList, setToggleCategoryList] =
    useState('');

  const firstRenderProducts = courses.map(
    ({ authors, price, title, _id, rating, category }) => (
      <Product
        key={_id}
        _id={_id}
        authors={authors}
        title={title}
        price={price}
        rating={rating}
        category={category}
      />
    )
  );

  const [productsList, setProductList] = useState(
    courses.map(
      ({
        authors,
        price,
        title,
        _id,
        rating,
        category,
      }) => (
        <Product
          key={_id}
          _id={_id}
          authors={authors}
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
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    setProductList(
      filterCourses.map(
        ({
          authors,
          img,
          price,
          title,
          _id,
          rating,
          category,
        }) => (
          <Product
            key={_id}
            _id={_id}
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
          _id,
          rating,
          category,
        }) => (
          <Product
            key={_id}
            _id={_id}
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

  const renderCategoryList = () => {
    return (
      <div className="productList__categoryContainer">
        <ul id="myUL">
          <li>
            <span onClick={() => selectCategory('maths')}>
              Maths
            </span>
          </li>
          <li>
            <span
              onClick={() => selectCategory('programming')}
            >
              Programming
            </span>
          </li>{' '}
          <li>
            <span
              onClick={() => selectCategory('languages')}
            >
              Languages
            </span>
          </li>
          <li>
            <span onClick={() => selectCategory('all')}>
              All category
            </span>
          </li>
        </ul>
      </div>
    );
  };
  return (
    <>
      <div>
        <input
          type="text"
          id="myInput"
          onChange={e => searchCourse(e.target.value)}
          placeholder="Search for names.."
        />
      </div>
      <button
        className="productsList__button"
        onClick={() =>
          setToggleCategoryList(!toggleCategoryList)
        }
      >
        {toggleCategoryList
          ? 'Close category list'
          : 'Open category list'}
      </button>
      {toggleCategoryList ? renderCategoryList() : null}
      <div className="productsList">
        {productsList.length > 0
          ? productsList
          : firstRenderProducts}
      </div>
      :
    </>
  );
};

export default ProductsListPage;
