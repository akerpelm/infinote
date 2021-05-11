import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
        this.props.processForm(user).then(() => this.props.History);
    }

    handleChange(field) {
        return e => this.setState({
            [field] : e.target.value
        })
    }
    renderErrors() {
        return(
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>{error}</li>
                ))}
            </ul>
        )
    }
    render() {
        let redirectLogin = (
            <>Already have an account?
                <br />
                <Link to='/login'>Sign in</Link>
            </>
            );
        let redirectSignup = (
            <>Don't have an account?
                <br />
                <Link to='/register'>Create account</Link>
            </>
            );

        return (
            <>
                <div className='session-form'>
                    <header>
                        {<img src='images/infinote_logo_1.png' alt="infinote_logo_1" className='infinote-logo' />}
                    </header>
                    <form onSubmit={this.handleSubmit}>
                        {this.renderErrors()}
                        <input className="email-input" type="email" value={this.state.email} onChange={this.handleChange('email')} placeholder="Email address" />
                        <br />
                        <input className="password-input" type="password" value={this.state.password} onChange={this.handleChange('password')} placeholder="Password" />
                        <br />
                        <button className="submit-button" type="submit" value={this.props.formType}>{this.props.formType}</button>
                        <br />
                    </form>
                    <br />
                    {this.props.formType === "Register" ? redirectLogin : redirectSignup}
                </div>
            </>
        )
    }
}

export default SessionForm
