import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    return <div>{ this.props.user ? this.props.user.name : 'Nothing' }</div>
  }
}

export default connect(state => { return { user: state.user } })(App);
