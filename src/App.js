import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ShopPage from './pages/shop/shop.component';
import HomePage from './pages/homepage/homepage.component';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component'
import Header from './components/header/header.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import './App.css';


const App = ({ checkUserSession, currentUser }) => {
  //unsubscribeFromAuth = null;

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);
  
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/' />) : (<SignInSignUpPage />)} />
      </Switch>
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
