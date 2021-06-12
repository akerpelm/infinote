import React, { Component } from "react";
import NotesIndex from "../notes/notes_index";
import ExpandedSideNavContainer from "../side_nav/expanded_side_nav_container";
import NoteShow from "../notes/note_show";
import NoteShowContainer from "../notes/note_show_container";
import EmptyNoteShow from "../notes/empty_note_show";

export class NotebookShow extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.match.path.includes("notebook")
      ? this.props.fetchNotebook(this.props.match.params.notebookId)
      : undefined;
  }

  render() {
    // debugger;
    let title = this.props.title;
    if (!title) return null;
    let notes = this.props.notes ? this.props.notes : undefined;

    if (!this.props.allNotes) return null;
    return (
      <div className="notebook-show">
        <ExpandedSideNavContainer currentUser={this.props.currentUser} />
        <NotesIndex
          fetchNotes={this.props.fetchNotes}
          title={title}
          notes={this.props.notes}
          allNotes={this.props.allNotes}
          notebook={this.props.notebook}
          deleteNotebook={this.props.deleteNotebook}
          openModal={this.props.openModal}
          updateNotebook={this.props.updateNotebook}
        />
        {this.props.location.pathname.includes("/notes/") ? (
          <NoteShowContainer />
        ) : (
          <EmptyNoteShow />
        )}
      </div>
    );
  }
}

export default NotebookShow;
