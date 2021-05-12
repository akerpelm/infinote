import React, { Component } from 'react'
import UserActions from './user_actions'
import SplashInfo from './splash_info'
import SplashHeader from './splash_header'
// import { Link } from 'react-router-dom'
import Information from './information'

export class SplashContainer extends Component {
    render() {
        return (
            <div>
                {<img src='images/infinote_logo_1.png' alt="infinote_logo_1" className='infinote-logo_1' />}
                <header>
                    <SplashHeader />
                </header>
                    <SplashInfo className='splash-info' />
                    <UserActions className='user-actions' />
                <br />
                <Information />
            </div>
        )
    }
}

export default SplashContainer
