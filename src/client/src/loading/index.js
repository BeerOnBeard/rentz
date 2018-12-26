import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AUTHENTICATION_FAILED, USER_RECEIVED } from '../redux/events';

function authenticationFailed() {
  return { type: AUTHENTICATION_FAILED };
}

function userReceived(user) {
  return {
    type: USER_RECEIVED,
    data: user
  };
}

class Loading extends Component {
  constructor(props) {
    super(props);
    setTimeout(() => {
      fetch('/user')
        .then(res => {
          if (res.ok) {
            return res.json();
          }

          throw Error('Could not get user information');
        })
        .then(user => props.userReceived(user))
        .catch(_ => props.authenticationFailed());
    }, 500);
    
  }

  render() {
    // TODO: Make a cool loading screen
    return <div>Loading...</div>
  }
}

export default connect(
  null,
  { authenticationFailed, userReceived }
)(Loading);
