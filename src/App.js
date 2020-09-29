import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/HomePage';

const HatsPage = () => (
  <div>
    <h1>This is the hats page </h1>
  </div>
);
function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop/hats' component={HatsPage} />
      </Switch>
    </>
  );
}

export default App;
