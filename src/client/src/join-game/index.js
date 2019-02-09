import React, { Component } from 'react';
import PrimaryButton from '../primary-button';
import './joinGame.css';

class JoinGame extends Component {
  constructor(props) {
    super(props);
    this.state = { gameId: '' };
  }
  
  updateGameId(event) {
    this.setState({
      gameId: event.target.value
    });
  }

  render() {
    return (
      <div className="join-game">
        <input type="text" autoFocus
          className="join-game__input"
          value={this.state.gameId}
          onChange={event => this.updateGameId(event)}  />
        <PrimaryButton text="Join" />
      </div>
    );
  }
}

export default JoinGame;
