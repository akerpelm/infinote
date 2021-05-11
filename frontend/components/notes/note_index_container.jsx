import React, { Component } from 'react'
import { connect } from 'react-redux'
import NoteIndex from './note_index'
import { logout } from '../../actions/session_actions'
// const mapStateToProps = (state) => ({

// })

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())  
})

export default connect(null, mapDispatchToProps)(NoteIndex)
