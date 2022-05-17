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

  const courses = useSelector(store => store.courses);
  console.log(courses);

  const [toggleCategoryList, setToggleCategoryList] =
    useState('');
  const [selectedCategory, setSelectedCategory] =
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
  console.log(productsList);
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
    setSelectedCategory(value);

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
    const categories = [
      'maths',
      'programming',
      'languages',
      'all',
    ];

    const categoriesList = categories.map(item => {
      return (
        <li key={item}>
          <span
            className={
              selectedCategory === item
                ? 'productsList__categoryContainer active'
                : null
            }
            onClick={() => selectCategory(item)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </span>
        </li>
      );
    });

    return (
      <div className="productsList__categoryContainer">
        <ul>{categoriesList}</ul>
      </div>
    );
  };
  const renderProductsList = () => {
    if (firstRenderProducts.length > 0) {
      if (productsList.length > 0) {
        return productsList;
      } else {
        return firstRenderProducts;
      }
    } else {
      return (
        <div className="productsList__loader_container">
          <span>
            PLEASE WAIT STARTING THE SERVER AND LOADING
            RESOURCES FROM THE DATABASE{' '}
          </span>
          <div class="productsList__loader"></div>
        </div>
      );
    }
  };
  return (
    <>
      <div>
        <input
          type="text"
          className="productsList__searchInput"
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
        {renderProductsList()}
      </div>
    </>
  );
};

export default ProductsListPage;
