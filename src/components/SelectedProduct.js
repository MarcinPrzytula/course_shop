import React from 'react';
import ReactPlayer from 'react-player';

import '../styles/Product.scss';

const SelectedProduct = ({
  title,
  vid,
  authors,
}) => {
  return (
    <div className="x">
      <div className="x">
        <span>{title}</span>
      </div>
      <div className="product__vid">
        <ReactPlayer
          className="react-player fixed-bottom"
          url={vid}
          width="100%"
          height="100%"
          controls={true}
        />
      </div>
      <div className="product__price"></div>
      <div className="product__author">
        <span>Authors: </span>
        <span>{authors}</span>
      </div>
    </div>
  );
};

export default SelectedProduct;
