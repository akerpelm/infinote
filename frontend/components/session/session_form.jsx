import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SessionFormDemo from '../session/session_form_demo'


class SessionForm extends Component {
    constructor(props) {
        super(props)    
        this.state = {
             email: '',
             password: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillUnmount() {
        this.props.removeErrors()
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state)
        this.props.processForm(user).then(() =>  this.props.history.push("/notes"))
    }

    handleChange(field) {
        return e => this.setState({
            [field] : e.target.value
        })
    }
    renderErrors() {
        return(
            <ul className='session-form-error-ul'>
                {this.props.errors.map((error, i) => (
                    <li className='session-form-error-li' key={`error-${i}`}>{error}</li>
                ))}
            </ul>
        )
    }
    render() {
        let redirectLogin = (
            <>
                <p className='redirect-login'>Already have an account?</p>
                <Link  className='redirect-login' to='/login'>Sign in</Link>
            </>
            );
        let redirectSignup = (
            <>
                <p className='redirect-login'>Don't have an account?</p>
                <Link  className='redirect-login' to='/register'>Create account</Link>
            </>
            );

        return (
            <>
                <div className='session-form-div'>
                    <header className='session-form-header'>
                        {<img src='images/infinote_logo_2.png' alt="infinote_logo_2" className='infinote-logo' />}
                    </header>
                        <SessionFormDemo />
                        <br className='spacer' />

                    <form className= 'session-form' onSubmit={this.handleSubmit}>
                        {this.renderErrors()}
                        <input className="email-input" type="email" value={this.state.email} onChange={this.handleChange('email')} placeholder="Email" />
                        <br />
                        <input className="password-input" type="password" value={this.state.password} onChange={this.handleChange('password')} placeholder="Password" />
                        <br />
                        {/* <button className="submit-button" type="submit" value={this.props.formType}>{this.props.formType}</button> */}
                        <input type="submit" value={this.props.formType} className="submit-button" />
                    </form>
                    <br />
                    {this.props.formType === "Register" ? redirectLogin : redirectSignup}
                </div>
            </>
        )
    }
}

export default SessionForm
