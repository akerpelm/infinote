import React, { Component } from 'react'
import SplashUserActions from './user_actions'
import SplashInfo from './splash_info'
import SplashHeader from './splash_header'
// import { Link } from 'react-router-dom'
import Information from './information'

export class Splash extends Component {
    render() {
        return (
            <div>
                <header>
                    <SplashHeader />
                </header>
                    <SplashInfo className='splash-info' />
                    <SplashUserActions className='user-actions' />
                <br />
                <Information />
            </div>
        )
    }
}

export default Splash
