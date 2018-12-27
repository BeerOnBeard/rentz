import React, { Component } from 'react';
import { connect } from 'react-redux';

class Game extends Component {
  render() {
    return <div>{this.props.game.id}</div>
  }
}

export default connect(
  state => { return { game: state.game } }
)(Game);
