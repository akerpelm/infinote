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
        // debugger
        e.preventDefault();
        const user = Object.assign({}, this.state)
        this.props.processForm(user);
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
        // let redirectFlag = this.props.formType === 'Register' ? `Already have an account? ${<Link to='/signin'>Sign In</Link>}` :
        //     Don't have an account? 
            let redirectLogin = <Link to='/login'>Sign in</Link>
            let redirectSignup = <Link to='/register'>Create account</Link>

        return (
            <div>
                <header>
                    <Link to='/'>Home</Link>
                </header>
                <h3>{this.props.formType}</h3>
                <form onSubmit={this.handleSubmit}>
                    {this.renderErrors()}
                    <input type="email" value={this.state.email} onChange={this.handleChange('email')} placeholder="Email" />
                    <br />
                    <input type="password" value={this.state.password} onChange={this.handleChange('password')} placeholder="Password" />
                    <br />
                    <input type="submit" value={this.props.formType} />
                    <br />
                </form>
                <br />
                {this.props.formType === "Register" ? redirectLogin : redirectSignup}
                
            </div>
        )
    }
}

export default SessionForm
