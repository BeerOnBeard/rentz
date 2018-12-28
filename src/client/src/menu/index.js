import React, { Component } from 'react'
import { connect } from 'react-redux'
import { LOGGED_OUT } from '../redux/events'
import './menu.css'

function loggedOut() {
    return {
        type: LOGGED_OUT
    }
}
class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }
    }

    onClick() {
        this.setState((state) => {
            return {
                isOpen: !state.isOpen
            }
        });
    }

    select(item) {
        alert('selected item' + item)
    }

    logout() {
        fetch('/logout', {
            method: "POST"
        })
            .then(res => {
                if (res.ok) {
                    this.props.loggedOut()
                }
                else {
                    throw Error('Could not log out')
                }
            })
    }

    render() {
        return (
            <div>
                <button className="menu__hamburger" onClick={() => this.onClick()}>&#9776; Menu</button>
                <div className={`menu menu--${this.state.isOpen ? 'open' : 'closed'}`}>
                    <div className="menu__items">
                        <div className="menu__item" onClick={() => this.select(1)}>Scores</div>
                        <div className="menu__item" onClick={() => this.logout()}>Log Out</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, { loggedOut })(Menu)
