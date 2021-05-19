import React from "react";
import { withRouter } from "react-router";
import { FaEllipsisH } from "react-icons/fa";
import { Link } from "react-router-dom";

class NotesIndex extends React.Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
  }

  toggleActive = () => {
    document.querySelector(".action-dropdown-ul").classList.toggle("active");
  };

  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
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
            // <div onClick={this.handleClick(note.id)} key={note.id}>
            <div className="note-list-element" key={note.id}>
              <Link
                style={{ textDecoration: "none" }}
                to={`/notebooks/${this.props.match.params.notebookId}/notes/${note.id}`}
              >
                <div className="note-list-body">
                  <div className="note-card">
                    <div className="note-card-head">
                      <div className="note-card-title">{note.title}</div>
                      <div className="note-card-desc">{note.content}</div>
                    </div>
                    <div className="note-card-date">
                      Updated {note.updated_at}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default withRouter(NotesIndex);
