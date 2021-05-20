import React from "react";
import { withRouter } from "react-router";
import { FaEllipsisH } from "react-icons/fa";
import { Link } from "react-router-dom";
import MoveNoteModal from '../notebooks/modals/move_note_modal'
import moment from 'moment'
moment().format();

class NotesIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  toggleActive = () => {
    document.querySelector(".action-dropdown-ul").classList.toggle("active");
  };

  componentDidMount() {
    this.props.fetchNotes();

  }

  render() {
    const { notes, title } = this.props
    // const updateTime = 
    // debugger
    
    return (
      <div className="note-list">
        <div className="note-list-header">
          <div className="note-list-header-title">
            <h1>{title}</h1>
          </div>
          <div className="note-list-header-sub">
            <div className="note-count">
              {notes.length === 1
                ? `${notes.length}  note`
                : `${notes.length} notes`}
            </div>
            {/* <MoveNoteModal/> */}
          </div>
        </div>

        {notes.map((note) => {
          return (
            <div className="note-list-element" key={note.id}>
              <Link
                style={{ textDecoration: "none" }}
                to={`/notebooks/${note.notebookId}/notes/${note.id}`}
              >
                <div className="note-list-body">
                  <div className="note-card">
                    <div className="note-card-head">
                      <div className="note-card-title">{note.title}</div>
                      <div className="note-card-desc">{note.content}</div>
                    </div>
                    <div className="note-card-date">
                      {moment().to(note.updatedAt)}
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
