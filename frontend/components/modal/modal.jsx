import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import TagCreateContainer from "../tags/tag_create_container";
import NotebookEditContainer from "../notebooks/notebook_edit_container";
// import TagUpdateContainer from "../tags/tag_update_container";

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case "create-tag":
      component = <TagCreateContainer />;
      break;
    case "update-notebook":
      component = <NotebookEditContainer />;
      break;

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
