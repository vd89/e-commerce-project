import React from 'react';
import SignIn from '../component/signInAndsignUp/SignIn';
import SignUp from '../component/signInAndsignUp/SignUp';

const SignInAndSignUp = () => {
  return (
    <div className='signIn__singUp'>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUp;
