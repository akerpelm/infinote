import React, { Component } from 'react'
import UserActions from './user_actions'
import SplashInfo from './splash_info'
// import { Link } from 'react-router-dom'
import Information from './information'

export class SplashContainer extends Component {
    render() {
        return (
            <div>
                <SplashInfo className='splash-info' />
                <UserActions className='user-actions' />
                <br />
                <Information />
            </div>
        )
    }
}

export default SplashContainer
