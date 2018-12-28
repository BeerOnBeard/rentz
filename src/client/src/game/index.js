import React, { Component } from 'react';
import { connect } from 'react-redux';

class Game extends Component {
  render() {
    return (
      <div>
        <div>Game ID: {this.props.game.id}</div>
        <div>Virtual Players:</div>
        <ul>
        {
          Object.keys(this.props.game.virtualPlayers).map(key => <li key={key}>{this.props.game.virtualPlayers[key]}</li>)
        }
        </ul>
      </div>
    );
  }
}

export default connect(
  state => { return { game: state.game } }
)(Game);
