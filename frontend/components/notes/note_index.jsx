import React, { Component } from 'react'
import { Redirect } from 'react-router';

export class NoteIndex extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        e.preventDefault();
        this.props.logout()
    }
    
    render() {
        return (
            <div>
                <p>Notes</p>

                <button type="submit" onClick={this.handleClick}>Logout</button>
                
            </div>
        )
    }
}

export default NoteIndex
