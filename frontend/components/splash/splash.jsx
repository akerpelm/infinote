import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import DemoLogin from '../session/demo_login'

export class Splash extends Component {
    render() {
        return (
            <div>
                <Link to='/register'>Sign up for free</Link>
                <br />
                <Link to='/login'>Already have an account? Log in</Link>
                <br />
                <DemoLogin />

                
            </div>
        )
    }
}

export default Splash
