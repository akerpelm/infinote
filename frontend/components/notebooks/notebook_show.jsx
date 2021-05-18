import React, { Component } from "react";
import NotesIndex from "../notes/notes_index";
import ExpandedSideNavContainer from "../side_nav/expanded_side_nav_container";
import NoteShow from "../notes/note_show";
import NoteShowContainer from "../notes/note_show_container";

export class NotebookShow extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchNotebook(this.props.match.params.notebookId);
    this.props.fetchNotes();
  }

  render() {
    let title = this.props.notebook ? this.props.notebook.title : "Notes";
    if (!title) return null;
    let notes = this.props.notes ? this.props.notes : undefined;

    return (
      <div className="notebook-show">
        <ExpandedSideNavContainer currentUser={this.props.currentUser} />
        <NotesIndex title={title} notes={this.props.notes} />
        {/* selector so this.props.notes are only notes for this notbeook */}
        {/* <NoteShow
          // noteshowcontainer, use route to fetch note from state
          title={title}
          fetchNote={this.props.fetchNote}
          currentNote={this.props.currentNote}
          currentUser={this.props.currentUser}
          updateNote={this.props.updateNote}
        /> */}
        <NoteShowContainer fetchNote={this.props.fetchNote}/>
        {/* renders individual note */}
      </div>
    );
  }
}

export default NotebookShow;
