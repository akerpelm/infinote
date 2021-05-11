import React from 'react'
import { connect } from 'react-redux'
import SessionForm from './session_form'
import { login, removeErrors } from '../../actions/session_actions'



const mapStateToProps = (state) => {
    // debugger
    return {
        errors: state.errors.session,
        formType: 'Sign In'

    }
    
}

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(login(user)),
    removeErrors: () => dispatch(removeErrors())
    
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)
