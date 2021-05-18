import { connect } from "react-redux";
import {
  fetchNotebook,
  updateNotebook,
  removeNotebookErrors,
} from "../../actions/notebook_actions";
import { deleteNotebook } from "../../util/notebooks_api_util";
import { logout } from "../../actions/session_actions";
import { fetchNotes } from "../../actions/note_actions";
import TestIndex from './test_index'

const mapStateToProps = (state, ownProps) => {
  debugger;
  // Object.keys(getState().entities.notes).map( id => getState().entities.notes)
  let dbNotes = Object.values(state.entities.notes);

  let findNoteById = (notebook, noteId) => {
    return notebook.find((note) => {
      return note.id == noteId;
    });
  };

  return {
    notebook: state.entities.notebooks[ownProps.match.params.notebookId],
    notes: dbNotes ? dbNotes : undefined,
    currentNote: findNoteById(dbNotes, ownProps.match.params.noteId)
      ? findNoteById(dbNotes, ownProps.match.params.noteId)
      : undefined,
    errors: state.errors.session,
    currentUser: state.entities.users[state.session.id],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNotes: () => dispatch(fetchNotes()),
    fetchNotebook: (notebookId) => dispatch(fetchNotebook(notebookId)),
    updateNotebook: (notebook) => dispatch(updateNotebook(notebook)),
    removeNotebookErrors: () => dispatch(removeNotebookErrors()),
    deleteNotebook: (notebookId) => dispatch(deleteNotebook(notebookId)),
    logout: () => dispatch(logout()),
    removeNotebookErrors: () => dispatch(removeNotebookErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TestIndex);
