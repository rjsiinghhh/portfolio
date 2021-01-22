import React from 'react';

import {
BrowserRouter as Router,
  Route
} from 'react-router-dom';

import MainNavigation from './components/Navigation/MainNavigation';
import HomePage from './components/page/HomePage'

const App = () => {
  return(
    <Router>
      <MainNavigation />
      <main>
        <Route path='/' exacty>
          <HomePage />
        </Route>
      </main>
    </Router>
  )
}

export default App;