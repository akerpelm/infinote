import React, { Component } from 'react'
import NotesIndex from '../notes/notes_index'
import ExpandedSideNavContainer from '../side_nav/expanded_side_nav_container'
import NoteShow from '../notes/note_show'
import EditModalContainer from "../notebooks/modals/edit_modal_container";
import TestContainer from '../notes/test_container';


export class NotebookShow extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    this.props.fetchNotebook(this.props.match.params.notebookId);
    this.props.fetchNotes()
  }
  
  render() {
    let title = this.props.notebook ? this.props.notebook.title : "Notes";
    if (!title) return null;
    let notes = this.props.notes ? this.props.notes : undefined
    return (
      <div className="notebook-show">
        <ExpandedSideNavContainer currentUser={this.props.currentUser} />
        {/* renders right nav */}
        <NotesIndex title={title} notes={this.props.notes} />
        {/* <EditModalContainer notebook={this.props.notebook}/> */}

        {/* renders all notes */}
        <NoteShow
          title={title}
          notes={notes}
          fetchNote={this.props.fetchNote}
          currentNote={this.props.currentNote}
        />
        {/* renders individual note */}
      </div>
    );
  }
}

export default NotebookShow
