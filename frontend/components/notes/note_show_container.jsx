import React, { Component } from "react";
import { connect } from "react-redux";
import NoteShow from "./note_show";
import { withRouter } from "react-router-dom";
import { fetchNote, updateNote } from "../../actions/note_actions";

class NoteShowContainer extends React.Component {

  componentDidMount() {
    this.props.fetchNote(this.props.match.params.noteId);
  }
  
  
  render() {
    const { currentNote, notebook, notes, title, currentUser,  updateNote } = this.props
    if (!currentNote) return null;
    return (
      <NoteShow
      currentNote={currentNote}
      notebook={notebook}
      notes={notes}
      title={title}
      currentUser={currentUser}
      updateNote={updateNote}
      />
    )

  }
}

const mapStateToProps = (state, ownProps) => {
  let dbNotes = Object.values(state.entities.notes);

  let findNoteById = (notebook, noteId) => {
    return notebook.find((note) => {
      return note.id == noteId;
    });
  };

  return {
    currentNote: findNoteById(dbNotes, ownProps.match.params.noteId)
      ? findNoteById(dbNotes, ownProps.match.params.noteId)
      : undefined,

    notebook: state.entities.notebooks[ownProps.match.params.notebookId],
    notes: state.entities.notes,

    title: state.entities.notebooks[ownProps.match.params.notebookId]
      ? state.entities.notebooks[ownProps.match.params.notebookId].title
      : "Notes",

    currentUser: state.entities.users[state.session.id],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  fetchNote: (noteId) => dispatch(fetchNote(noteId)),
  updateNote: (note) => dispatch(updateNote(note)),
}
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NoteShowContainer)
);
