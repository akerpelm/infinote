import { connect } from "react-redux";
import moment from "moment";
moment().format();
//Util
import {
  deleteNotebook,
  fetchNotebook,
  updateNotebook,
  removeNotebookErrors,
} from "../../../actions/notebook_actions";
import NotebookShow from "./notebook_show";
import { logout } from "../../../actions/session_actions";
import {
  fetchNote,
  fetchNotes,
  updateNote,
} from "../../../actions/note_actions";
import { openModal } from "../../../actions/modal_actions";
import * as NotebookUtil from "../../../util/component/notebook_util";

const mapStateToProps = (state, ownProps) => {
  const dbNotes = Object.values(state.entities.notes);

  const notes = NotebookUtil.filtered(
    ownProps.match.params.notebookId,
    state.entities.notes
  ).sort(NotebookUtil.compare);

  const title = state.entities.notebooks[ownProps.match.params.notebookId]
    ? state.entities.notebooks[ownProps.match.params.notebookId].title
    : [ownProps.match.params.notebookId] == 0 &&
      ownProps.history.location.pathname != "/notes"
    ? "Uncategorized Notes"
    : "Notes";

  const currentNote = NotebookUtil.findNoteById(
    dbNotes,
    ownProps.match.params.noteId
  )
    ? NotebookUtil.findNoteById(dbNotes, ownProps.match.params.noteId)
    : undefined;

  return {
    notes: notes,
    notebook: state.entities.notebooks[ownProps.match.params.notebookId],
    allNotes: dbNotes,
    currentNote: currentNote,
    errors: state.errors.notebook,
    currentUser: state.entities.users[state.session.id],
    title: title,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchNotes: () => dispatch(fetchNotes()),
  fetchNote: (noteId) => dispatch(fetchNote(noteId)),
  fetchNotebook: (notebookId) => dispatch(fetchNotebook(notebookId)),
  updateNotebook: (notebook) => dispatch(updateNotebook(notebook)),
  openModal: (modal) => dispatch(openModal(modal)),
  removeNotebookErrors: () => dispatch(removeNotebookErrors()),
  deleteNotebook: (notebookId) => dispatch(deleteNotebook(notebookId)),
  logout: () => dispatch(logout()),
  removeNotebookErrors: () => dispatch(removeNotebookErrors()),
  updateNote: (note) => dispatch(updateNote(note)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NotebookShow);
