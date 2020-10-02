import React from 'react';
import SignIn from '../component/signInAndsignUp/signIn/SignIn';
import SignUp from '../component/signInAndsignUp/signUp/SignUp';

const SignInAndSignUp = () => {
  return (
    <div className='signIn__singUp'>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUp;
