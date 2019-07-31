import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CREATING_GAME, JOINING_GAME } from '../redux/events';
import PrimaryButton from '../primary-button';
import './lounge.css';
import Menu from '../menu'

function creatingGame() {
  return { type: CREATING_GAME };
}

function joiningGame() {
  return { type: JOINING_GAME };
}

class Lounge extends Component {
  render() {
    return (
      <>
      <Menu />
      <div className="lounge">
        <PrimaryButton
          className="lounge__create-game"
          onClick={_ => this.props.creatingGame()}
          text="Create Game" />
        <PrimaryButton
          className="lounge__join-game"
          onClick={_ => this.props.joiningGame()}
          text="Join Game" />
      </div>
      </>
    );
  }
}

export default connect(
  null,
  { creatingGame, joiningGame }
)(Lounge);
