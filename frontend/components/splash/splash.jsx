import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Splash extends Component {
    render() {
        return (
            <div>
                <Link to='/register'>Sign up for free</Link>
                <br />
                <Link to='/login'>Already have an account? Log in</Link>

                
            </div>
        )
    }
}

export default Splash
