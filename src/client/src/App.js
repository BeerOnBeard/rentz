import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import Login from './login';
import Loading from './loading';
import Lounge from './lounge';
import CreateGame from './create-game';
import JoinGame from './join-game';
import Game from './game';

class App extends Component {
  render() {
    if (this.props.mustLogIn) {
      return <Login />
    }

    if (!this.props.user) {
      return <Loading />
    }

    if (this.props.isCreatingGame) {
      return <CreateGame />
    }

    if (this.props.isJoiningGame) {
      return <JoinGame />
    }

    if (this.props.game) {
      return <Game />
    }
    
    return <Lounge />
  }
}

export default connect(
  state => {
    return {
      mustLogIn: state.mustLogIn,
      user: state.user,
      isCreatingGame: state.isCreatingGame,
      isJoiningGame: state.isJoiningGame,
      game: state.game
    }
  }
)(App);
