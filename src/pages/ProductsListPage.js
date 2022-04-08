import React, { useState, useEffect } from 'react';
import '../styles/ProductsListPage.scss';

import Product from '../components/Product';

import { useSelector, useDispatch } from 'react-redux';
import { fetchUserData } from '../store/actions/userActions';
import axios from 'axios';
const ProductsListPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  //   const x = () => {
  //     axios({
  //       method: 'GET',
  //       withCredentials: true,
  //       url: 'http://localhost:3001/api/logout',
  //     }).then(res => {
  //       //   setData(res.data);
  //       console.log(res.data);
  //     });
  //   };
  //   x();

  const getUser = () => {
    axios({
      method: 'GET',
      withCredentials: true,
      url: 'http://localhost:3001/api/user',
    }).then(res => {
      //   setData(res.data);
      console.log(res.data);
    });
  };

  getUser();
  const courses = useSelector(store => store.courses);
  const [toggleCategoryList, setToggleCategoryList] =
    useState('');

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
        <Product
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
      item.title.toLowerCase().includes(value.toLowerCase())
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
          <Product
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
          <Product
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
      <div className="productsList">{productsList}</div>
    </>
  );
};

export default ProductsListPage;
