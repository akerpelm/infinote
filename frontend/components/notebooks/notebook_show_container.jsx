import { connect } from "react-redux";
import {
  deleteNotebook,
  fetchNotebook,
  updateNotebook,
  removeNotebookErrors,
} from "../../actions/notebook_actions";
import NotebookShow from "./notebook_show";
import { logout } from "../../actions/session_actions";
import { fetchNote, fetchNotes, updateNote } from "../../actions/note_actions";

const mapStateToProps = (state, ownProps) => {
  let dbNotes = Object.values(state.entities.notes);

  let findNoteById = (notebook, noteId) => {
    return notebook.find((note) => {
      return note.id == noteId;
    });
  };

  let filtered = (notebookId) => {
    let filteredNotes = [];
    for (let note of Object.values(state.entities.notes)) {
      if (note.notebookId == notebookId) {
        filteredNotes.push(note);
      } else if (notebookId == undefined) {
        filteredNotes = Object.values(state.entities.notes);
      }
    }
    return filteredNotes;
  };


  // debugger
  return {
    // notes: dbNotes ? dbNotes : undefined,
    notes: filtered(ownProps.match.params.notebookId),
    notebook: state.entities.notebooks[ownProps.match.params.notebookId],
    allNotes: dbNotes,
    currentNote: findNoteById(dbNotes, ownProps.match.params.noteId)
      ? findNoteById(dbNotes, ownProps.match.params.noteId)
      : undefined,
    errors: state.errors.notebook,
    currentUser: state.entities.users[state.session.id],
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchNotes: () => dispatch(fetchNotes()),
  fetchNote: (noteId) => dispatch(fetchNote(noteId)),
  fetchNotebook: (notebookId) => dispatch(fetchNotebook(notebookId)),
  updateNotebook: (notebook) => dispatch(updateNotebook(notebook)),
  removeNotebookErrors: () => dispatch(removeNotebookErrors()),
  deleteNotebook: (notebookId) => dispatch(deleteNotebook(notebookId)),
  logout: () => dispatch(logout()),
  removeNotebookErrors: () => dispatch(removeNotebookErrors()),
  updateNote: (note) => dispatch(updateNote(note)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NotebookShow);
