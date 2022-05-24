import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faCartPlus,
  faPlayCircle,
} from '@fortawesome/free-solid-svg-icons';

const StatusButton = ({ config }) => {
  const infoRef = useRef(null);

  const { info, optionalClickEvent, classes, icon } = config;

  return (
    <>
      <div ref={infoRef} className="product__status-course">
        {info}
      </div>
      <button
        onClick={optionalClickEvent}
        className={classes}
        onMouseOver={() => {
          infoRef.current.classList.add('product__status-course--active');
        }}
        onMouseOut={() => {
          infoRef.current.classList.remove('product__status-course--active');
        }}
      >
        <FontAwesomeIcon
          icon={
            icon === 'faCartPlus'
              ? faCartPlus
              : null || icon === 'faCheck'
              ? faCheck
              : null || icon === 'faPlayCircle'
              ? faPlayCircle
              : null
          }
        />
      </button>
    </>
  );
};

export default StatusButton;
