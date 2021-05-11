import React, { Component } from 'react';
import { connect } from 'react-redux'
import { login } from '../../actions/session_actions'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

class DemoLogin extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email: "demo_user@infinote.com",
             password: "infinote"
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault
        this.props.login(this.state).then(() => this.props.history.push("/notes"))
    }
    
    render() {
        return (
            <>
            Try free with a <Link to='/notes' onClick={this.handleSubmit}>demo user</Link>
            {/* <button type='submit' onClick={this.handleSubmit}>Demo User</button> */}
            </>
        )
    }
}


// const mapStateToProps = (state) => ({
    
// })

const mapDispatchToProps = dispatch => ({
    login: user => dispatch(login(user))
})

export default withRouter(connect(null, mapDispatchToProps)(DemoLogin))


// export default DemoLogin
