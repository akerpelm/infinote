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
    this.props.currentNote.notebookId = notebook.id;    
    this.props.updateNote(convertToSnakeCase(this.props.currentNote))
      .then(
        this.props.history.push(
          `/notebooks/${notebook.id}/notes/${this.props.currentNote.id}`
        )
      ).then(this.toggleModal());
  }
  // componentWillUnmount() {
  //   this.props.removeNotebookErrors();
  // }
  toggleModal = () => {
    document.querySelector(".modal").classList.toggle("modal-hidden");
  };

  componentDidMount() {
    this.props.fetchNotebooks();
  }

  render() {
    return (
      <div>
        <div className="modal modal-hidden">
          <div className="modal-contents">
            <header className="modal-create-header">
              <h1 className="modal-create-title">
                Move note to...
                <div className="modal-close">
                  <span className="modal-close-span" onClick={this.toggleModal}>
                    X
                  </span>
                </div>
              </h1>
              <div className="move-note-modal-ul">
                <ul>
                  {this.props.notebooks.map((notebook, i) => {
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
                  })}
                </ul>
              </div>
              <p className="modal-create-info"></p>
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
          <button onClick={this.toggleModal} className="new-notebook-button">
            <i>
              <BiBookAdd className="notebook-icon" />
            </i>
            Move
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    notebooks: Object.values(state.entities.notebooks),
    currentNote: state.entities.notes[ownProps.match.params.noteId]
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchNotebooks: () => dispatch(fetchNotebooks()),
  updateNote: (note) => dispatch(updateNote(note)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MoveNoteModal)
);
