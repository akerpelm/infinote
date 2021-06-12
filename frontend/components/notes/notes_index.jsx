import React from "react";
import { withRouter } from "react-router";
import { FaEllipsisH } from "react-icons/fa";
import { Link } from "react-router-dom";
import MoveNoteModal from "../notebooks/modals/move_note_modal";
import moment from "moment";
moment().format();
import parse from "html-react-parser";
import { DropdownMenu } from "../notebooks/notebook_dropdown";

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
    const { notes, title } = this.props;
    let uncategorized = ["Notes", "Uncategorized Notes"];
    let dropdown = uncategorized.includes(title) ? (
      ""
    ) : (
      <DropdownMenu
        notebook={this.props.notebook}
        deleteNotebook={this.props.deleteNotebook}
        openModal={this.props.openModal}
        history={this.props.history}
      ></DropdownMenu>
    );
    return (
      <div className="note-list">
        <div className="note-list-header">
          <div className="note-list-header-title">
            <h1>{title}</h1>
          </div>
          <div className="dropdown-li">{dropdown}</div>
          <div className="note-list-header-sub">
            <div className="note-count">
              {notes.length === 1
                ? `${notes.length}  note`
                : `${notes.length} notes`}
            </div>
          </div>
        </div>
        <div className="note-list-wrapper">
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
                        <div className="note-card-desc">
                          {parse(note.content)}
                        </div>
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
      </div>
    );
  }
}

export default withRouter(NotesIndex);
