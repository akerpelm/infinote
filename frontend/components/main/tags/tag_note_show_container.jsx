import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { TagNoteShow } from "./tag_note_show";
//Util
import {
  deleteNote,
  fetchNote,
  updateNote,
} from "../../../actions/note_actions";
import { openModal } from "../../../actions/modal_actions";
import {
  createTag,
  fetchTags,
  removeTagErrors,
  updateTag,
} from "../../../actions/tag_actions";
import { fetchNotebook } from "../../../actions/notebook_actions";
class TagNoteShowContainer extends React.Component {
  componentDidMount() {
    this.props.fetchNote(this.props.match.params.noteId);
    this.props.fetchTags();
  }

  render() {
    const {
      currentNote,
      notebook,
      title,
      currentUser,
      deleteNote,
      updateNote,
      noteId,
      fetchTags,
      createTag,
      tags,
      fetchNotebook,
      match,
      allTags,
      updateTag,
      errors,
      removeTagErrors,
      openModal,
    } = this.props;
    if (!currentNote) return null;
    return (
      <TagNoteShow
        currentNote={currentNote}
        title={title}
        notebook={notebook}
        currentUser={currentUser}
        updateNote={updateNote}
        deleteNote={deleteNote}
        noteId={noteId}
        fetchTags={fetchTags}
        createTag={createTag}
        tags={tags}
        fetchNotebook={fetchNotebook}
        match={match}
        allTags={allTags}
        updateTag={updateTag}
        errors={errors}
        removeTagErrors={removeTagErrors}
        openModal={openModal}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const dbNotes = Object.values(state.entities.notes);

  const findNoteById = (notebook, noteId) => {
    return notebook.find((note) => {
      return note.id == noteId;
    });
  };

  const currentNote = findNoteById(dbNotes, ownProps.match.params.noteId)
    ? findNoteById(dbNotes, ownProps.match.params.noteId)
    : undefined;
  const filteredTags = Object.values(state.entities.tags);
  const notebook = currentNote
    ? state.entities.notebooks[currentNote.notebookId]
    : undefined;
  return {
    tags: filteredTags,
    currentNote: currentNote,
    notebook: notebook,
    currentUser: state.entities.users[state.session.id],
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
    fetchNotebook: (notebookId) => dispatch(fetchNotebook(notebookId)),
    updateTag: (tag) => dispatch(updateTag(tag)),
    removeTagErrors: () => dispatch(removeTagErrors()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TagNoteShowContainer)
);
