import React, { Component } from 'react'
import { Redirect } from 'react-router';

export class NoteIndex extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        e.preventDefault();
        this.props.logout()
    }
    
    render() {
        return (
            <div>
                <button type="submit" onClick={this.handleClick}>Logout</button>
                
            </div>
        )
    }
}

export default NoteIndex
