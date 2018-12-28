import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GAME_STARTED } from '../redux/events';
import AddVirtualPlayers from './add-virtual-players'
import PrimaryButton from '../primary-button';
import './createGame.css';

function gameCreated(game) {
  return {
    type: GAME_STARTED,
    data: { game }
  };
}

class CreateGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      virtualPlayers: undefined
    };
  }

  publishNewGame() {
    // TODO: Add error handling
    fetch('/games', { method: 'post', headers: { 'Content-Type': 'application/json'}, body: JSON.stringify(this.state)})
      .then(response => response.json())
      .then(game => this.props.gameCreated(game));
  }

  updateVirtualPlayers(players) {
    this.setState({
      ...this.state,
      virtualPlayers: players
    });
  }

  render() {
    return (
      <div className="create-game">
        {
          this.state.virtualPlayers === undefined
            ? <AddVirtualPlayers complete={virtualPlayers => this.updateVirtualPlayers(virtualPlayers)} />
            : <PrimaryButton text="Start" className="create-game__start" onClick={_ => this.publishNewGame()} />
        }
        
      </div>
    );
  }
}

export default connect(
  null,
  { gameCreated }
)(CreateGame);
