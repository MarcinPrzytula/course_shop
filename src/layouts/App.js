import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Page from './Page';
import Navigation from '../layouts/Navigation';
import LoginPanel from './LoginPanel';

import '../styles/App.css';

function App() {
  console.log(process.env);
  return (
    <Router>
      <div className="app_wrapper">
        <div className="menu_wrapper">
          <Navigation />
          <LoginPanel />
        </div>
        <Page />
      </div>
    </Router>
  );
}

export default App;
