import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GAME_CREATED } from 'game/events';
import './lounge.css';
import Menu from '../menu'

function gameCreated(id) {
  return {
    type: GAME_CREATED,
    data: { id }
  };
}

class Lounge extends Component {
  createGame() {
    // TODO: Add error handling
    fetch('/games', { method: 'post'})
      .then(response => response.json())
      .then(game => this.props.gameCreated(game.id));
  }

  render() {
    return (
      <div className="lounge">
        <Menu/>
        <div className="lounge__create-game" onClick={_ => this.createGame()}>Create Game</div>
      </div>
    );
  }
}

export default connect(
  null,
  { gameCreated }
)(Lounge);
