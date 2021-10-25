import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Page from './Page';
import Navigation from '../layouts/Navigation';

import '../styles/App.css';

function App() {
  return (
    <Router>
      <Navigation />
      <Page />
    </Router>
  );
}

export default App;
