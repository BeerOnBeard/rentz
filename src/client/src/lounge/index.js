import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CREATING_GAME } from '../redux/events';
import PrimaryButton from '../primary-button';
import './lounge.css';

function creatingGame() {
  return { type: CREATING_GAME };
}

class Lounge extends Component {
  render() {
    return (
      <div className="lounge">
        <PrimaryButton
          className="lounge__create-game"
          onClick={_ => this.props.creatingGame()}
          text="Create Game" />
      </div>
    );
  }
}

export default connect(
  null,
  { creatingGame }
)(Lounge);
