import React, { Component } from 'react';
import CustomButton from '../formInput/CustomButton';
import FormInput from '../formInput/FormInput';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    this.setState({ email: '', password: '' });
  };

  onChangeHandler = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const { email, password } = this.state;
    return (
      <div className='sign__in'>
        <h2>I already have a account</h2>
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
          <CustomButton type='submit'>Sign In</CustomButton>
        </form>
      </div>
    );
  }
}
