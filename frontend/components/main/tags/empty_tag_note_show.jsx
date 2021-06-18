import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { createNote } from "../../../actions/note_actions";
//Util
import convertToSnakeCase from "../../../util/snake_case_util";

class EmptyTagNoteShow extends Component {
  constructor(props) {
    super(props);
    this.handleCreateNote = this.handleCreateNote.bind(this);
  }

  handleCreateNote(e) {
    const { currentUser, history, createNote } = this.props;

    e.preventDefault();
    let newNote = {
      title: "",
      content: "",
      authorId: currentUser.id,
      notebookId: 0,
    };

    createNote(convertToSnakeCase(newNote)).then((res) =>
      history.push(`/notebooks/0/notes/${res.note.id}`)
    );
  }
  render() {
    return (
      <div className="empty-note-show-wrapper">
        <div className="empty-note-show">
          <img
            src="images/create_note.png"
            alt="create_note"
            className="create-note-img"
          />
          <h1>
            <span className="create-bolded" onClick={this.handleCreateNote}>
              Create
            </span>{" "}
            a new note or select an existing note
          </h1>
          <h2>
            Click the{" "}
            <span className="create-bolded" onClick={this.handleCreateNote}>
              + New Note
            </span>{" "}
            button in the sidebar to get started
          </h2>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id],
});

const mapDispatchToProps = (dispatch) => ({
  createNote: (note) => dispatch(createNote(note)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EmptyTagNoteShow)
);
