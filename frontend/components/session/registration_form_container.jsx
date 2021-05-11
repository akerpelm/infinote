import React from 'react'
import { connect } from 'react-redux'
import SessionForm from './session_form'
import { removeErrors, signup } from '../../actions/session_actions'



const mapStateToProps = (state) => ({
    errors: state.errors.session,
    formType: 'Register'

})

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(signup(user)),
    removeErrors: () => dispatch(removeErrors())

})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)
