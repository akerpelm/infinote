import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
//React Icons
import { RiBookletLine } from "react-icons/ri";
//Util
import { fetchNotebooks } from "../../../actions/notebook_actions";
import { updateNote } from "../../../actions/note_actions";
import convertToSnakeCase from "../../../util/snake_case_util";
import { closeModal } from "../../../actions/modal_actions";

class NoteMove extends Component {
  constructor(props) {
    super(props);

    this.state = props.notebook;
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchNotebooks();
  }

  handleClick(notebook) {
    const { currentNote, updateNote, history, closeModal } = this.props;
    currentNote.notebookId = notebook.id;
    updateNote(convertToSnakeCase(currentNote))
      .then(history.push(`/notebooks/${notebook.id}/notes/${currentNote.id}`))
      .then(closeModal());
  }

  render() {
    const { notebooks, currentNoteNotebook, closeModal } = this.props;
    let moveNotebooks =
      notebooks.length < 1 ? (
        <h2 className="modal-multi-info">No other notebook exists!</h2>
      ) : (
        notebooks.map((notebook, i) => {
          if (notebook.id !== currentNoteNotebook.id) {
            return (
              <li
                className="modal-move-li"
                key={i}
                onClick={() => this.handleClick(notebook)}
              >
                <RiBookletLine />
                {notebook.title}
              </li>
            );
          }
        })
      );

    return (
      <div>
        <div className="modal">
          <div className="modal-contents">
            <header className="modal-header">
              <h1 className="modal-title">Move note to...</h1>
              <div className="modal-close">
                <span className="modal-close-" onClick={closeModal}>
                  X
                </span>
              </div>
            </header>
            <div className="modal-multi-info">
              <ul>{moveNotebooks}</ul>
            </div>
            <div className="modal-form">
              <form className="form">
                <div className="modal-buttons">
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
      </div>
      //
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let currentNote =
    state.entities.notes[
      parseInt(ownProps.location.pathname.slice(19))
    ] instanceof Object
      ? state.entities.notes[parseInt(ownProps.location.pathname.slice(19))]
      : state.entities.notes[parseInt(ownProps.location.pathname.slice(20))];

  let currentNoteNotebook = state.entities.notebooks[currentNote.notebookId]
    ? state.entities.notebooks[currentNote.notebookId]
    : { id: 0 };

  return {
    notebooks: Object.values(state.entities.notebooks),
    currentNote,
    currentNoteNotebook,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchNotebooks: () => dispatch(fetchNotebooks()),
  updateNote: (note) => dispatch(updateNote(note)),
  closeModal: () => dispatch(closeModal()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NoteMove)
);
