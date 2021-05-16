import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from '../../actions/session_actions'
import SideNav from './side_nav'



const mapStateToProps = (state) => ({
    // debugger
    // user: state.entities.users[1]
    currentUser: state.entities.users[state.session.id]

})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(SideNav)
