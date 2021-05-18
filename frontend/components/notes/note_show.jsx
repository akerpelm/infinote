import React from "react";
import { withRouter } from "react-router";
import convertToSnakeCase from "../../util/snake_case_util";

export class NoteShow extends React.Component {
  constructor(props) {
    super(props);
    // console.log('hi')

    this.state = {
      title: "",
      content: "",
      authorId: this.props.currentUser.id,
      notebookId: props.match.params.notebookId,
    };
    this.handleUpdate = this.handleUpdate.bind(this);

    this.handleChange = this.handleChange.bind(this);
  }
  handleUpdate(e) {
      e.preventDefault()
      this.props.updateNote(convertToSnakeCase(this.state));
  }

  handleChange(field) {
    return (e) =>
      this.setState({
        [field]: e.target.value,
      })
  }

  componentDidMount() {
    this.props.fetchNote(this.props.match.params.noteId);
  }

  render() {
    const { currentNote } = this.props;
    let currentNoteTitle = currentNote ? currentNote.title : "Title";
    // let currentNoteId = currentNote ? currentNote.id : undefined;
    let currentNoteContent = currentNote ? currentNote.content : "Start typing";
    // debugger

    return (
      <div className="note">
        <div className="note-header">
          <div className="note-header-date">{this.props.title}</div>
          <div className="note-header-action-btn"></div>
        </div>
        <div className="note-body">
          <div className="note-body-head">
            <input
              placeholder={currentNoteTitle}
              onChange={this.handleChange("title")}
            />
          </div>
          <div className="note-body-content">
            <textarea
              placeholder={currentNoteContent}
              onChange={this.handleChange("content")}
              onChange={this.handleUpdate}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(NoteShow);

// }

// export default NoteShowContainer

// import React, { Component } from 'react'

//     render() {
//         return (
//             <div>

//             </div>
//         )
//     }
