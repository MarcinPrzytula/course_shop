import React from 'react';
import { Route, Switch } from 'react-router-dom';

import list from '../store/pageList';

const Page = () => {
  const pages = list.map(
    ({ path, exact, name }, key) => (
      <Route
        key={key}
        path={path}
        exact={exact}
        component={name}
      />
    )
  );

  return (
    <>
      <div className="page">
        <Switch>{pages}</Switch>
      </div>
    </>
  );
};

export default Page;
