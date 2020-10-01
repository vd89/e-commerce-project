import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import './App.scss';
import Header from './component/header/Header';
import { auth, createUserProfileDocument } from './firebase/FirebaseUtils';
import CheckOut from './pages/CheckOut';
import HomePage from './pages/HomePage';
import Shop from './pages/shop/Shop';
import SignInAndSignUp from './pages/SignInAndSignUp';
import { setCurrentUser } from './redux/user/userAction';
import { selectCurrentUser } from './redux/user/userSelectors';

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    const { currentUser } = this.props;
    return (
      <>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={Shop} />
          <Route exact path='/signIn' render={() => (currentUser ? <Redirect to='/' /> : <SignInAndSignUp />)} />
          <Route exact path='/checkout' component={CheckOut} />
        </Switch>
      </>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
