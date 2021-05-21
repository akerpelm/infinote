import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import convertToSnakeCase from '../../util/snake_case_util';
import { createNote } from '../../actions/note_actions'
export class EmptyNoteShow extends Component {
  constructor(props) {
    super(props);
    this.handleCreateNote = this.handleCreateNote.bind(this);
  }

  handleCreateNote(e) {
    e.preventDefault();
    let notebookId = this.props.match.params.notebookId
      ? this.props.match.params.notebookId
      : 0;
    let newNote = {
      title: "",
      content: "",
      authorId: this.props.currentUser.id,
      notebookId: notebookId,
    };
    this.props
      .createNote(convertToSnakeCase(newNote))
      .then((response) =>
        this.props.history.push(
          `/notebooks/${notebookId}/notes/${response.note.id}`
        )
      );
  }
  render() {
    return (
      <div className="empty-note-show-wrapper">
        <div className="empty-note-show">
          <img src="images/create_note.png" alt="create_note" />
          <h1>
            <span className="create-bolded" onClick={this.handleCreateNote}>
              Create
            </span>{" "}
            a new note or select an existing note
          </h1>
          <h2>
            Click the{" "}
            <span className="create-bolded" onClick={this.handleCreateNote}>+ New Note</span> button in the sidebar to get started
          </h2>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id],
});

const mapDispatchToProps = dispatch => ({
  createNote: (note) => dispatch(createNote(note))  
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EmptyNoteShow))

