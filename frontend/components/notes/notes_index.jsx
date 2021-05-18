import React from "react";
import { withRouter } from "react-router";
import { FaEllipsisH } from "react-icons/fa";

class NotesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(noteId) {
    return (e) => {
      this.props.history.push(
        `/notebooks/${this.props.match.params.notebookId}/notes/${noteId}`
      );
    };
  }

  toggleActive = () => {
    document.querySelector(".action-dropdown-ul").classList.toggle("active");
  };

  render() {
    let title = this.state ? this.state.title : undefined;
    return (
      <div className="note-list">
        <div className="note-list-header">
          <div className="note-list-header-title">
            <h1>{this.props.title}</h1>
          </div>
          <div className="note-list-header-sub">
            <div className="note-count">
              {this.props.notes.length === 1
                ? `${this.props.notes.length}  note`
                : `${this.props.notes.length} notes`}
            </div>

          </div>
        </div>

        {this.props.notes.map((note) => {
          return (
            <div onClick={this.handleClick(note.id)} key={note.id}>
              <div className="note-list-body">
                <div className="note-card">
                  <div className="note-card-head">
                    <div className="note-card-title">{note.title}</div>
                    <div className="note-card-desc">{note.content}</div>
                  </div>
                  <div className="note-card-date">Updated...</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default withRouter(NotesIndex);
