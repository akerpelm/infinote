import { connect } from "react-redux";
import { logout } from "../../../actions/session_actions";
import { closeModal, openModal } from "../../../actions/modal_actions";
import {
  createNotebook,
  deleteNotebook,
  fetchNotebooks,
  removeNotebookErrors,
} from "../../../actions/notebook_actions";
import NotebookIndex from "./notebook_index";

const mapStateToProps = (state) => ({
  notebooks: Object.values(state.entities.notebooks),
  user: state.entities.users[state.session.id],
  errors: state.errors.session,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchNotebooks: () => dispatch(fetchNotebooks()),
  action: (notebook) => dispatch(createNotebook(notebook)),
  deleteNotebook: (notebookId) => dispatch(deleteNotebook(notebookId)),
  removeNotebookErrors: () => dispatch(removeNotebookErrors()),
  closeModal: () => dispatch(closeModal()),
  openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NotebookIndex);
