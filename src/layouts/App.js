import React from "react";
import { HashRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";
import store from "../store/store.js";

import Page from "./Page";
import Navigation from "../layouts/Navigation";
import LoginPanel from "./LoginPanel";

import "../styles/App.scss";

const App = () => {
  return (
    <Provider store={store}>
      {/* <Router basename={process.env.PUBLIC_URL}> */}
      <Router basename={"/course_shop"}>
        <div className="app_wrapper">
          <div className="menu_wrapper">
            <Navigation />
            <LoginPanel />
          </div>
          <Page />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
