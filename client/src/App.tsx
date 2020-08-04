import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';

import GlobalStyles from './styles/GlobalStyles';

import './styles/ReactToastify.css';

function App() {
  return (
    <>
      <Router>
        <ToastContainer />
          <Routes />
        <GlobalStyles />
      </Router>
    </>
  );
}

export default App;
