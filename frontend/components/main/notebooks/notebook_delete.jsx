import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
//React Icons
import { BiBookAdd } from "react-icons/bi";
//Util
import { closeModal } from "../../../actions/modal_actions";
import { deleteNotebook } from "../../../actions/notebook_actions";

class NotebookDelete extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const { notebookId, history, closeModal } = this.props;
    e.preventDefault();
    this.props
      .action(notebookId)
      .then(history.push("/notebooks"))
      .then(() => closeModal());
  }

  render() {
    const { closeModal, modalInfo } = this.props;
    return (
      <div>
        <div className="modal">
          <div className="modal-contents">
            <header className="modal-header">
              <h1 className="modal-title">
                Are you sure you want to delete this notebook?
              </h1>
              <div className="modal-close" onClick={closeModal}>
                X
              </div>
            </header>
            <div className="modal-info">{modalInfo}</div>
            <div className="modal-form">
              <form className="form" onSubmit={this.handleSubmit}>
                <label className="modal-input-label">
                  <br />
                  <div className="modal-spacer"></div>
                </label>
                <div className="modal-buttons">
                  <input
                    className="delete-modal-submit"
                    type="submit"
                    value="Continue"
                  />
                  <input
                    className="modal-cancel"
                    type="submit"
                    onClick={closeModal}
                    value="Cancel"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let notebookId = parseInt(ownProps.location.pathname.slice(11, 15));
  return {
    notebookId: notebookId,
    modalInfo:
      "Warning: The notebook and all notes within it will be gone forever. This action cannot be undone, even by infiNote!",
  };
};

const mapDispatchToProps = (dispatch) => ({
  action: (notebook) => dispatch(deleteNotebook(notebook)),
  closeModal: () => dispatch(closeModal()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NotebookDelete)
);
