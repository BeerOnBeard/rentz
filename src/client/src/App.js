import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import Login from './login';
import Loading from './loading';

class App extends Component {
  render() {
    if (this.props.mustLogIn) {
      return <Login />
    }

    if (!this.props.user) {
      return <Loading />
    }

    return <div>{ this.props.user ? this.props.user.name : 'Nothing' }</div>
  }
}

export default connect(
  state => { return { mustLogIn: state.mustLogIn, user: state.user } }
)(App);
