import React from "react";
import { closeModal } from "../../../actions/modal_actions";
import { connect } from "react-redux";
import NotebookCreate from "../notebooks/notebook_create";
import TagCreateContainer from "../tags/tag_create_container";
import NotebookEditContainer from "../notebooks/notebook_edit_container";
import NotebookDelete from "../notebooks/notebook_delete";
import NoteDelete from "../notes/note_delete";
import NoteMove from "../notes/note_move";
import TagDelete from "../tags/tag_delete";

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case "create-note":
      component = <NotebookCreate />;
      break;
    case "delete-note":
      component = <NoteDelete />;
      break;
    case "delete-notebook":
      component = <NotebookDelete />;
      break;
    case "create-tag":
      component = <TagCreateContainer />;
      break;
    case "update-notebook":
      component = <NotebookEditContainer />;
      break;
    case "move-note":
      component = <NoteMove />;
      break;
    case "tag-delete":
      component = <TagDelete />;
      break;
    case "copy-text":
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={(e) => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    modal: state.ui.modal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
