import React, { Component } from "react";
import NotesIndex from "../notes/notes_index";
import ExpandedSideNavContainer from "../side_nav/expanded_side_nav_container";
import NoteShow from "../notes/note_show";
import NoteShowContainer from "../notes/note_show_container";

export class NotebookShow extends Component {
  constructor(props) {
    super(props);
    // debugger
  }
  componentDidMount() {
    this.props.fetchNotebook(this.props.match.params.notebookId);
    this.props.fetchNotes();
  }

  render() {
    let title = this.props.notebook ? this.props.notebook.title : "Notes";
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
        />
        {/* selector so this.props.notes are only notes for this notbeook */}
        <NoteShowContainer />
      </div>
    );
  }
}

export default NotebookShow;
