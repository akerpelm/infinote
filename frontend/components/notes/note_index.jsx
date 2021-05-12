import React, { Component } from 'react'
import { Redirect } from 'react-router';

export class NoteIndex extends Component {
    constructor(props) {
        console.log(props.currentUser)
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        e.preventDefault();
        this.props.logout()
    }

    // componentDidMount() {
        // }
        
        render() {
            // debugger
            return (
                <div>
                <p>Welcome {this.props.currentUser.email}</p>
                <p>Notes</p>
                {/* componentDidMount */}
                <button type="submit" onClick={this.handleClick}>Logout</button>
                
            </div>
        )
    }
}

export default NoteIndex
