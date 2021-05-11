import React from 'react'
import { Link } from 'react-router-dom'
import DemoLogin from '../session/demo_login'

const UserActions = () => {
    return (
        <div className='user-actions'>
            <Link to='/register' className="register-button">Sign up for free</Link>
             <br />
            <Link to='/login' className="login-link">Already have an account? Log in</Link>
             <br />
            <DemoLogin/>
        </div>
    )
}

export default UserActions
