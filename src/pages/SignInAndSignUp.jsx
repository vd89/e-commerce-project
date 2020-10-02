import React from 'react';
import SignIn from '../component/signInAndsignUp/signIn/SignIn';
import SignUp from '../component/signInAndsignUp/signUp/SignUp';
import styled from 'styled-components';

const SignInAndSignUpContainer = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
`;
const SignInAndSignUp = () => {
  return (
    <SignInAndSignUpContainer>
      <SignIn />
      <SignUp />
    </SignInAndSignUpContainer>
  );
};

export default SignInAndSignUp;
