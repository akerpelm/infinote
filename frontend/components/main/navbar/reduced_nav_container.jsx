import React, { Component } from "react";
import { connect } from "react-redux";
import { logout } from "../../../actions/session_actions";
import { createNote, fetchNotes } from "../../../actions/note_actions";
import { fetchNotebooks } from "../../../actions/notebook_actions";
import ReducedNav from "./reduced_nav";

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id],
  notebooks: state.entities.notebooks,
  notes: state.entities.notes,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  createNote: (note) => dispatch(createNote(note)),
  fetchNotebooks: () => dispatch(fetchNotebooks),
  fetchNotes: () => dispatch(fetchNotes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReducedNav);
