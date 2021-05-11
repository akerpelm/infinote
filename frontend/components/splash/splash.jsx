import React, { Component } from 'react'
import UserActions from './user_actions'
import SplashInfo from './splash_info'
// import { Link } from 'react-router-dom'

export class Splash extends Component {
    render() {
        return (
            <div>
                <SplashInfo className='splash-info' />
                <UserActions className='user-actions' />
            </div>
        )
    }
}

export default Splash
