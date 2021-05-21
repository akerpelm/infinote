import React, { Component } from "react";
import { connect } from "react-redux";
import { BiBookAdd } from "react-icons/bi";
import {
  fetchNotebooks,
  updateNotebook,
} from "../../../actions/notebook_actions";
import convertToSnakeCase from "../../../util/snake_case_util";
import { withRouter } from "react-router";
import { updateNote } from "../../../actions/note_actions";
// import { convertToSnakeCase } from '../../../util/snake_case_util'

class MoveNoteModal extends Component {
  constructor(props) {
    super(props);

    this.state = props.notebook;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(notebook) {
    // console.log(this.props.currentNote.notebookId);
    this.props.currentNote.notebookId = notebook.id;
    //newnote = object.assign or spread with current note + new id (dont reassign props)
    // console.log(this.props.currentNote.notebookId);
    this.props
      .updateNote(convertToSnakeCase(this.props.currentNote))
      .then(this.toggleModal())
      .then(
        this.props.history.push(
          `/notebooks/${notebook.id}/notes/${this.props.currentNote.id}`
        )
      );
  }

  toggleModal = () => {
    document.querySelector(".modal").classList.toggle("modal-hidden");
  };

  componentDidMount() {
    this.props.fetchNotebooks();
  }

  render() {
    let notebooks =
      this.props.notebooks.length <= 1 ? (
        <h2 className="move-note-modal-h2">No other notebook exists!</h2>
      ) : (
        this.props.notebooks.map((notebook, i) => {
          if (notebook.id !== this.props.currentNoteNotebook.id) {
            return (
              <li
                className="move-note-modal-li"
                key={i}
                onClick={() => this.handleClick(notebook)}
              >
                {notebook.title}
              </li>
            );
          }
        })
      );

    return (
      <div>
        <div className="modal modal-hidden">
          <div className="modal-contents">
            <header className="move-modal-create-header">
              <h1 className="move-modal-create-title">
                Move note to...
                <div className="modal-close">
                  <span className="modal-close-span" onClick={this.toggleModal}>
                    X
                  </span>
                </div>
              </h1>
              <div className="move-note-modal-ul">
                <ul>{notebooks}</ul>
              </div>
              {/* <p className="modal-create-info"></p> */}
            </header>
            <form className="modal-create-form">
              <div className="modal-buttons">
                <input
                  className="modal-cancel"
                  type="submit"
                  onClick={this.toggleModal}
                  value="Cancel"
                />
                <input
                  className="modal-submit"
                  type="submit"
                  value="Continue"
                />
              </div>
            </form>
          </div>
        </div>
        <div>
          <span onClick={this.toggleModal} className="new-notebook-button">
            Move Note
          </span>
        </div>
      </div>
    );
  }
}
// }

const mapStateToProps = (state, ownProps) => {
  let currentNote = state.entities.notes[ownProps.match.params.noteId];
  let currentNoteNotebook = state.entities.notebooks[currentNote.notebookId]
    ? state.entities.notebooks[currentNote.notebookId]
    : { id: 0 };
  // let currentNoteNotebook = state.entities.notebooks[currentNote.notebookId]
  return {
    notebooks: Object.values(state.entities.notebooks),
    currentNote,
    currentNoteNotebook,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchNotebooks: () => dispatch(fetchNotebooks()),
  updateNote: (note) => dispatch(updateNote(note)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MoveNoteModal)
);
