import React, { Component } from 'react';
import { auth, createUserProfileDocument } from '../../../firebase/FirebaseUtils';
import CustomButton from '../../formInput/Button/CustomButton';
import FormInput from '../../formInput/Form/FormInput';
import { SignUpContainer, SignUpTitle } from './SignUpStyles';

export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }
  onChangeHandler = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  onSubmitHandler = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.error(error.message);
    }
  };
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <SignUpContainer>
        <SignUpTitle>I do not have a account</SignUpTitle>
        <span>Sign Up with your email and password</span>
        <form onSubmit={this.onSubmitHandler}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            label='Display Name'
            required
            onChange={this.onChangeHandler}
          />
          <FormInput type='email' name='email' value={email} label='Email' required onChange={this.onChangeHandler} />
          <FormInput
            type='password'
            name='password'
            value={password}
            label='Password'
            required
            onChange={this.onChangeHandler}
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            label='Confirm Password'
            required
            onChange={this.onChangeHandler}
          />
          <CustomButton type='submit'>Sign Up</CustomButton>
        </form>
      </SignUpContainer>
    );
  }
}
