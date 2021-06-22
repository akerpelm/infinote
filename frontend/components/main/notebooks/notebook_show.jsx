import React, { Component } from "react";
import NotesIndex from "../notes/notes_index";
import ExpandedNavContainer from "../navbar/expanded_nav_container";
import NoteShowContainer from "../notes/note_show_container";
import EmptyNoteShow from "../notes/empty_note_show";

export class NotebookShow extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { match, fetchNotebook } = this.props;
    match.path.includes("notebook") && match.params.notebookId != 0
      ? fetchNotebook(match.params.notebookId)
      : undefined;
  }

  render() {
    const {
      fetchNotes,
      notes,
      allNotes,
      notebook,
      deleteNotebook,
      openModal,
      updateNotebook,
      location,
    } = this.props;
    let title = this.props.title;
    if (!title) return null;
    if (!this.props.allNotes) return null;
    return (
      <div className="notebook-show">
        <ExpandedNavContainer currentUser={this.props.currentUser} />
        <NotesIndex
          fetchNotes={fetchNotes}
          title={title}
          notes={notes}
          allNotes={allNotes}
          notebook={notebook}
          deleteNotebook={deleteNotebook}
          openModal={openModal}
          updateNotebook={updateNotebook}
        />
        {location.pathname.includes("/notes/") ? (
          <NoteShowContainer />
        ) : (
          <EmptyNoteShow />
        )}
      </div>
    );
  }
}

export default NotebookShow;
