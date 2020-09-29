import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './component/header/Header';
import { auth, createUserProfileDocument } from './firebase/FirebaseUtils';
import HomePage from './pages/HomePage';
import Shop from './pages/shop/Shop';
import SignInAndSignUp from './pages/SignInAndSignUp';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
          console.log(this.state);
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    const { currentUser } = this.state;
    return (
      <>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={Shop} />
          <Route exact path='/signIn' component={SignInAndSignUp} />
        </Switch>
      </>
    );
  }
}
export default App;
