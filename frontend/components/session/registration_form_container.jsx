import React from 'react'
import { connect } from 'react-redux'
import SessionForm from './session_form'
import { removeErrors, signup } from '../../actions/session_actions'
import { createNotebook } from '../../actions/notebook_actions'



const mapStateToProps = (state) => ({
    errors: state.errors.session,
    formType: 'Register',


})

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(signup(user)),
    removeErrors: () => dispatch(removeErrors()),
    createNotebook: () => dispatch(createNotebook())

})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)
