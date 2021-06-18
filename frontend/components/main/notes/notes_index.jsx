import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import moment from "moment";
moment().format();
import parse from "html-react-parser";
import { DropdownMenu } from "../notes/notes_index_dropdown";

class NotesIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    const { notes, title, notebook, deleteNotebook, openModal, history } =
      this.props;
    let uncategorized = ["Notes", "Uncategorized Notes"];
    let dropdown = uncategorized.includes(title) ? (
      ""
    ) : (
      <DropdownMenu
        notebook={notebook}
        deleteNotebook={deleteNotebook}
        openModal={openModal}
        history={history}
      ></DropdownMenu>
    );
    return (
      <div className="note-list">
        <div className="note-list-header">
          <div className="note-list-header-title">
            <h1>{title}</h1>
            <div className="dropdown-li">{dropdown}</div>
          </div>
          <div className="note-list-header-sub">
            <div className="note-count">
              {notes.length === 1
                ? `${notes.length} note`
                : `${notes.length} notes`}
            </div>
          </div>
        </div>
        <div className="note-list-wrapper">
          {notes.map((note) => {
            return (
              <div className="note-list-element" key={note.id}>
                <Link
                  key={note.id}
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
