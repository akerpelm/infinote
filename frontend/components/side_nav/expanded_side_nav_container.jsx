import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchNotebooks } from '../../actions/notebook_actions';
import { createNote, fetchNotes } from '../../actions/note_actions';
import { logout } from '../../actions/session_actions'
import ExpandedSideNav from "./expanded_side_nav";




const mapStateToProps = (state) => ({
    // debugger
    // user: state.entities.users[1]
    currentUser: state.entities.users[state.session.id],
    notebooks: state.entities.notebooks,
    notes: state.entities.notes,

})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    createNote: (note) => dispatch(createNote(note)),
    fetchNotebooks: () => dispatch(fetchNotebooks),
    fetchNotes: () => dispatch(fetchNotes())
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpandedSideNav);
