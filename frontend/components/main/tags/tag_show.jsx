import React from "react";
import { Link } from "react-router-dom";
import ExpandedNavContainer from "../navbar/expanded_nav_container";
import TagNoteShowContainer from "./tag_note_show_container";
import EmptyTagNoteShow from "./empty_tag_note_show";
import parse from "html-react-parser";
import moment from "moment";
moment().format();

class TagShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchTag(this.props.tagId);
  }

  render() {
    const { tag, tagId, filteredNotes, location } = this.props;
    let title = tag ? tag.name : "";
    let compare = (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt);

    return (
      <div>
        <div className="tag-show-wrapper">
          <div className="nav">
            <ExpandedNavContainer />
          </div>
          <div className="note-list">
            <div className="note-list-header-tag">
              <div className="note-list-header-title">
                <h1>Notes</h1>
                <div className="note-list-header-sub">
                  <div className="note-count">
                    {filteredNotes.length === 1
                      ? `${filteredNotes.length} note`
                      : `${filteredNotes.length} notes`}
                  </div>
                </div>
              </div>
            </div>
            <div className="note-list-tag-header">
              <div className="note-list-tag-header-title">
                <button>
                  {title}{" "}
                  <Link to="/tags">
                    <span>x</span>
                  </Link>
                </button>
              </div>
            </div>
            <div className="tag-note-list-wrapper">
              {this.props.filteredNotes.map((note) => {
                return (
                  <div className="note-list-element" key={note.id}>
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`/tags/${tagId}/notes/${note.id}`}
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
          <div className="tag-notes-showpage">
            {location.pathname.includes("/notes/") ? (
              <TagNoteShowContainer />
            ) : (
              <EmptyTagNoteShow />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default TagShow;
