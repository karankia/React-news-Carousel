import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewsCarousel from './components/layout/NewsCarousel';
import { Provider } from 'react-redux';


import store from './store';

import './App.css';

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Route exact path='/' component={NewsCarousel} />
      </Fragment>
    </Router>
  </Provider>
);

export default App;
