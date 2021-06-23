import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
//React Icons
import { closeModal } from "../../../actions/modal_actions";
import { deleteNote } from "../../../actions/note_actions";
import { updateTag } from "../../../actions/tag_actions";
//Util
import convertToSnakeCase from "../../../util/snake_case_util";

class TagDelete extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(tag) {
    const { updateTag, noteId, tags, closeModal } = this.props;
    const index = tag.noteIds.indexOf(noteId);
    if (index > -1) {
      tag.noteIds.splice(index, 1);
    }
    updateTag(convertToSnakeCase(tag)).then(
      tags.length === 0 ? closeModal() : ""
    );
  }

  render() {
    const { closeModal, modalInfo, tags, noteId } = this.props;
    let filtered = tags.length ? (
      tags.map((tag, i) => {
        return (
          <li
            className="modal-move-li"
            key={i}
            onClick={() => this.handleClick(tag)}
          >
            {tag.name}
          </li>
        );
      })
    ) : (
      <li className="modal-li-alt">No tags are associated with this note.</li>
    );
    return (
      <div>
        <div className="modal">
          <div className="modal-contents">
            <header className="modal-header">
              <h1 className="modal-title"></h1>
              <div className="modal-close" onClick={closeModal}>
                X
              </div>
            </header>
            <div className="modal-info">{modalInfo}</div>
            <div className="modal-multi-info">
              <ul>{filtered}</ul>
            </div>
            <div className="modal-form">
              <form className="form" onSubmit={this.handleSubmit}>
                <label className="modal-input-label">
                  <br />
                </label>
                <div className="modal-buttons">
                  <input
                    className="modal-cancel"
                    type="submit"
                    onClick={closeModal}
                    value="Close"
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
  const noteId = parseInt(
    ownProps.history.location.pathname.split("notes/")[1]
  );

  const filteredTags = Object.values(state.entities.tags).filter((tag) =>
    tag.noteIds.includes(noteId)
  );

  return {
    tags: filteredTags,
    noteId: noteId,
    modalInfo: "Which tag would you like to remove?",
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: (note) => dispatch(deleteNote(note)),
    closeModal: () => dispatch(closeModal()),
    updateTag: (tag) => dispatch(updateTag(tag)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TagDelete)
);
