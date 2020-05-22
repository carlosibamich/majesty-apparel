import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import { SignInSignUp } from './sign-in-sign-up.styles';

const SignInSignUpPage = () => {
  return (
    <SignInSignUp>
      <SignIn />
      <SignUp />
    </SignInSignUp>
  )
};

export default SignInSignUpPage;
//export to App.js