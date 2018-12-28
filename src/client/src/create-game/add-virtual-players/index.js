import generateGuid from 'uuid/v4';
import React, { Component } from 'react';
import PrimaryButton from '../../primary-button';
import './addVirtualPlayers.css'

class AddVirtualPlayers extends Component {
  constructor(props) {
    super(props);
    this.state = { players: { } };
  }

  addPlayer(event) {
    this.setState({
      players: {
        ...this.state.players,
        [generateGuid()]: event.target.value
      }
    });
    event.target.value = '';
  }

  removePlayer(id) {
    let newPlayers = { ...this.state.players };
    delete newPlayers[id];
    this.setState({
      players: newPlayers
    });

    this.newPlayerInput.focus();
  }

  updatePlayer(event) {
    let updatedName = event.target.value;
    if (updatedName === '') {
      this.removePlayer(event.target.id);
      return;
    }
    
    this.setState({
      players: {
        ...this.state.players,
        [event.target.id]: event.target.value
      }
    });
  }

  submit() {
    this.props.complete(this.state.players);
  }

  render() {
    return (
      <form className="virtual-players-form" onSubmit={event => event.preventDefault()}>
        <div className="virtual-players-form__description">What players will you represent? You will need to input their score after each round.</div>
        <div className="virtual-players-form__players">

          { Object.keys(this.state.players).map(id =>
            <div key={id} className="virtual-players-form__player">
              <input id={id} type="text" autoFocus
                value={this.state.players[id]}
                onChange={event => this.updatePlayer(event)} />
              <div onClick={_ => this.removePlayer(id)}>X</div>
            </div>
          ) }

          <input key="new" type="text" autoFocus
            ref={ref => this.newPlayerInput = ref}
            className="virtual-players-form__new"
            placeholder="Player Name"
            onChange={event => this.addPlayer(event)} />
        </div>
        <PrimaryButton text="Next" onClick={_ => this.submit()} />
      </form>
    );
  }
}

export default AddVirtualPlayers;
