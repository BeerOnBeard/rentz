import React, { Component } from 'react';
import PrimaryButton from '../primary-button';
import './login.css';

class Login extends Component {
  go() {
    // TODO: can't have a hard-coded path in here
    window.location.href = 'http://localhost:3100/auth/google';
  }

  render() {
    return (
      <div className="login">
        <div className="login__title">Rentz</div>
        <img className="login__image" alt="Rentz" src="cards.svg" />
        <PrimaryButton
          className="login__link"
          onClick={_ => this.go()}
          text="Log in with Google" />
      </div>
    );
  }
}

export default Login;
