import React, { Component } from 'react';
import { auth, signInWithGoogle } from '../../../firebase/FirebaseUtils';
import CustomButton from '../../formInput/Button/CustomButton';
import FormInput from '../../formInput/Form/FormInput';
import { ButtonsBarContainer, SignInContainer, SignInTitle } from './SignInStyles';

export default class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  onSubmitHandler = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.error(error.message);
    }
  };

  onChangeHandler = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const { email, password } = this.state;
    return (
      <SignInContainer>
        <SignInTitle>I already have a account</SignInTitle>
        <span>Sign In with your email and password</span>
        <form onSubmit={this.onSubmitHandler}>
          <FormInput
            type='email'
            name='email'
            label='Email'
            value={email}
            required
            onChangeHandler={this.onChangeHandler}
          />
          <FormInput
            type='password'
            name='password'
            label='Password'
            value={password}
            required
            onChangeHandler={this.onChangeHandler}
          />
          <ButtonsBarContainer>
            <CustomButton type='submit'>Sign In</CustomButton>{' '}
            <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
              Sign In with Google
            </CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    );
  }
}
