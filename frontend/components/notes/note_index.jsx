import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NoteIndex extends Component {
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
                <button type="submit" onClick={this.handleClick}>Logout</button>
                <p>Welcome {this.props.currentUser.username || this.props.currentUser.email}</p>
                <p>Current Date Here</p>

                <p>Notes</p>
                <span>Recent</span> <span>Suggested</span>
                <br />
                <Link to="/notebooks">Notebooks</Link>
                
            </div>
        )
    }
}

export default NoteIndex
