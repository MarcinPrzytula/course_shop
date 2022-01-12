import React from 'react';

import '../styles/HomePage.css';
import { useSelector } from 'react-redux';

const TransactionFormPage = () => {
  const anyData = useSelector(
    store => store.anyData
  );
  console.log(anyData);
  return (
    <>
      <div>transaction page</div>;
    </>
  );
};

export default TransactionFormPage;
