import { connect } from "react-redux";
import { createTag, fetchTags } from "../../actions/tag_actions";
import { closeModal } from "../../actions/modal_actions";
import NotebookForm from "./notebook_form";
import { withRouter } from "react-router";
import { updateNotebook } from "../../actions/notebook_actions";

const mapStateToProps = (state, ownProps) => {
  const notebookId = ownProps.location.pathname.slice(11, 13).includes("/")
    ? ownProps.location.pathname.slice(11, 12)
    : ownProps.location.pathname.slice(11, 13);
  return {
    formType: "Rename notebook",
    button: "Update",
    currentUser: state.entities.users[state.session.id],
    notebook: state.entities.notebooks[notebookId],
    errors: state.errors.notebook,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
    updateNotebook: (notebook) => dispatch(updateNotebook(notebook)),
    fetchNotebook: (notebookId) => dispatch(fetchNotebook(notebookId)),
    // // fetchTags: () => dispatch(fetchTags()),
    // createTag: (tag) => dispatch(createTag(tag)),
  };
};

export default withRouter(
  withRouter(connect(mapStateToProps, mapDispatchToProps)(NotebookForm))
);
