import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './component/header/Header';
import HomePage from './pages/HomePage';
import Shop from './pages/shop/Shop';
import SignInAndSignUp from './pages/SignInAndSignUp';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/signIn' component={SignInAndSignUp} />
      </Switch>
    </>
  );
}

export default App;
