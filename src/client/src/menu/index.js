import React, { Component } from 'react'
import './menu.css'

export class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }

        this.onClick = this.onClick.bind(this)
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

    render() {
        return (
            <div>
                <button className="hamburger" onClick={this.onClick}>&#9776; Menu</button>
                <div className={`menu ${this.state.isOpen ? 'open' : 'closed'}`}>
                    <ul>
                        <li>
                            <a href="/" onClick={() => this.select(1)}>Scores</a>
                        </li>
                        <li>
                            <a href="/" onClick={() => this.select(2)}>Log Out</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Menu
