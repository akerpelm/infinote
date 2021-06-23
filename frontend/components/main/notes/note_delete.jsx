import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
//React Icons
import { closeModal } from "../../../actions/modal_actions";
import { deleteNote } from "../../../actions/note_actions";
import { updateTag } from "../../../actions/tag_actions";
//Util
import convertToSnakeCase from "../../../util/snake_case_util";

class NoteDelete extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    let { action, noteId, history, notebookId, closeModal } = this.props;

    if (!noteId) {
      noteId = parseInt(history.location.pathname.split("/notes/")[1]);
    }
    e.preventDefault();

    let tagId = parseInt(
      history.location.pathname.split("/notes")[0].split("tags/")[1]
    );

    if (notebookId || notebookId === 0) {
      action(noteId)
        .then(history.push(`/notebooks/${notebookId}`))
        .then(() => closeModal());
    } else {
      action(noteId)
        .then(history.push(`/tags/${tagId}`))
        .then(() => closeModal());
    }
  }

  render() {
    const { closeModal, modalInfo } = this.props;
    return (
      <div>
        <div className="modal">
          <div className="modal-contents">
            <header className="modal-header">
              <h1 className="modal-title">
                Are you sure you want to delete this note?
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
  const noteId = isNaN(parseInt(ownProps.history.location.pathname.slice(19)))
    ? parseInt(ownProps.history.location.pathname.slice(20))
    : parseInt(ownProps.history.location.pathname.slice(19));

  const filteredTags = Object.values(state.entities.tags).filter((tag) =>
    tag.noteIds.includes(noteId)
  );

  const notebookId = parseInt(ownProps.history.location.pathname.slice(11, 15));

  return {
    tags: filteredTags,
    noteId: noteId,
    notebookId: notebookId,
    modalInfo:
      "Warning: The note will be gone forever. This action cannot be undone, even by infiNote",
  };
};

const mapDispatchToProps = (dispatch) => ({
  action: (note) => dispatch(deleteNote(note)),
  closeModal: () => dispatch(closeModal()),
  updateTag: (tag) => dispatch(updateTag(tag)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NoteDelete)
);
