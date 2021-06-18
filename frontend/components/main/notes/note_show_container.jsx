import React, { Component } from "react";
import { connect } from "react-redux";
import NoteShow from "./note_show";
import { withRouter } from "react-router-dom";
import {
  deleteNote,
  fetchNote,
  updateNote,
} from "../../../actions/note_actions";
import { openModal } from "../../../actions/modal_actions";
import { createTag, fetchTags, updateTag } from "../../../actions/tag_actions";

class NoteShowContainer extends React.Component {
  componentDidMount() {
    this.props
      .fetchNote(this.props.match.params.noteId)
      .then(() => this.props.fetchTags());
  }

  render() {
    const {
      currentNote,
      notebook,
      notes,
      title,
      currentUser,
      deleteNote,
      updateNote,
      noteId,
      openModal,
      createTag,
      tags,
      allTags,
      updateTag,
      errors,
      removeTagErrors,
    } = this.props;

    if (!currentNote) return null;
    return (
      <NoteShow
        currentNote={currentNote}
        notebook={notebook}
        notes={notes}
        title={title}
        currentUser={currentUser}
        updateNote={updateNote}
        deleteNote={deleteNote}
        noteId={noteId}
        openModal={openModal}
        createTag={createTag}
        tags={tags}
        allTags={allTags}
        updateTag={updateTag}
        errors={errors}
        removeTagErrors={removeTagErrors}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let dbNotes = Object.values(state.entities.notes);

  let findNoteById = (notebook, noteId) => {
    return notebook.find((note) => {
      return note.id == noteId;
    });
  };

  let currentNote = findNoteById(dbNotes, ownProps.match.params.noteId)
    ? findNoteById(dbNotes, ownProps.match.params.noteId)
    : undefined;

  let filteredTags = currentNote
    ? undefined
    : Object.values(state.entities.tags).filter((tag) =>
        tag.noteIds.includes(currentNote.id)
      );

  return {
    tags: filteredTags,
    currentNote: currentNote,
    notebook: state.entities.notebooks[ownProps.match.params.notebookId],
    title: state.entities.notebooks[ownProps.match.params.notebookId]
      ? state.entities.notebooks[ownProps.match.params.notebookId].title
      : [ownProps.match.params.notebookId] == 0
      ? "Uncategorized Notes"
      : "Notes",

    currentUser: state.entities.users[state.session.id],
    noteId: ownProps.match.params.noteId,
    tags: state.entities.tags,
    allTags: Object.values(state.entities.tags),
    errors: state.errors.tag,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNote: (noteId) => dispatch(fetchNote(noteId)),
    updateNote: (note) => dispatch(updateNote(note)),
    deleteNote: (noteId) => dispatch(deleteNote(noteId)),
    openModal: (modal) => dispatch(openModal(modal)),
    createTag: (tag) => dispatch(createTag(tag)),
    fetchTags: () => dispatch(fetchTags()),
    updateTag: (tag) => dispatch(updateTag(tag)),
    removeTagErrors: () => dispatch(removeTagErrors()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NoteShowContainer)
);
