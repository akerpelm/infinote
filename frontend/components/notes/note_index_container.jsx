import React, { Component } from 'react'
import { connect } from 'react-redux'
import NoteIndex from './note_index'
import { logout, removeErrors } from '../../actions/session_actions'

const mapStateToProps = (state) => {
    return {
      currentUserId: state.session.id
    }

}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(NoteIndex)
