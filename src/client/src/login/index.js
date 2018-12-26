import React, { Component } from 'react';
import './login.css';

class Login extends Component {
  render() {
    // TODO: can't have a hard-coded path in here
    return (
      <div className="login">
        <div className="login__title">Rentz</div>
        <img className="login__image" alt="Rentz" src="cards.svg" />
        <a className="login__link" href="http://localhost:3100/auth/google">Log in with Google</a>
      </div>
    );
  }
}

export default Login;
