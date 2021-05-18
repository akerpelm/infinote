import React, { Component } from "react";
import NotesIndex from "../notes/notes_index";
import ExpandedSideNavContainer from "../side_nav/expanded_side_nav_container";
import NoteShow from "../notes/note_show";

class TestIndex extends Component {
  constructor(props) {
    super(props);
    debugger;
  }

  componentDidMount() {
    // debugger
    this.props.fetchNotes();
  }
  render() {
          let title = this.props.notebook ? this.props.notebook.title : "Notes";
          if (!title) return null;
    return (
      <div className="notebook-show">
        <ExpandedSideNavContainer currentUser={this.props.currentUser} />
        {/* renders right nav */}
        <NotesIndex title={title} notes={this.props.notes} />
        {/* <EditModalContainer notebook={this.props.notebook}/> */}

        {/* renders all notes */}
        <NoteShow title={title}  currentNote={this.props.currentNote} />
        {/* renders individual note */}
      </div>
    );
  }
}

export default TestIndex;
