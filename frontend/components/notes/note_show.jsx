import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import convertToSnakeCase from "../../util/snake_case_util";
import { FaTrash, FaEllipsisH } from "react-icons/fa";
import { BiBookAlt, BiBook } from "react-icons/bi";
import { AiFillCaretRight } from "react-icons/bi";
// import NoteSelectNotebook from "./note_select_notebook_container";
import MoveNoteModal from "../notebooks/modals/move_note_modal";
import EditModalContainer from "../notebooks/modals/edit_modal_container";
import DeleteModalContainer from "../notebooks/modals/delete_modal_container";

export class NoteShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.currentNote;

    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleUpdate(e) {
    e.preventDefault();
    this.props.updateNote(convertToSnakeCase(this.state));
  }

  componentDidUpdate(prevProps) {
    if (prevProps.noteId !== this.props.noteId) {
      this.setState(this.props.currentNote);
    }
  }

  handleChange(field) {
    // debugger
    return (e) =>
      this.setState({
        [field]: e.target.value,
      });
  }

  toggleActive = () => {
    document
      .querySelector(".note-show-action-dropdown-ul")
      .classList.toggle("active");
  };

  handleDelete(e) {
    e.preventDefault();
    let path = this.props.history.location.pathname.includes("/0/notes")
      ? "0/"
      : this.props.notebook.id;
    this.props
      .deleteNote(this.props.currentNote.id)
      .then(this.props.history.push(`/notebooks/${path}`));
  }

  render() {
    const { currentNote } = this.props;
    debugger;
    if (currentNote.notebookId !== 0) {
      return (
        <div className="note">
          <div className="note-header">
            <div className="note-header-title">
              <i>
                <BiBookAlt />
              </i>
              {this.props.title}
            </div>
            <div className="note-header-action-btn"></div>
            <div className="note-show-action-dropdown">
              <section
                className="note-show-action-dropdown-btn"
                onClick={this.toggleActive}
              >
                <FaEllipsisH className="ellipsis-i" />
                {/* <FaEllipsisH className="ellipsis-i" /> */}
                <ul className="note-show-action-dropdown-ul">
                  <li>
                    <span
                      onClick={this.toggleActive}
                      className="move-note-wrapper"
                    >
                      <MoveNoteModal />
                    </span>
                  </li>
                  <li>
                    <span onClick={this.toggleActive}>
                      {<EditModalContainer /> || "hi"}
                    </span>
                  </li>
                  <li>
                    <span>
                      <DeleteModalContainer />
                    </span>
                  </li>
                  <li onClick={this.handleDelete}>Move Note to Trash</li>
                </ul>
              </section>
            </div>
          </div>

          <div className="note-body" onBlur={this.handleUpdate}>
            <div className="note-body-head">
              <input
                value={this.state.title}
                placeholder={this.state.title || "Title"}
                onChange={this.handleChange("title")}
              />
            </div>
            <div className="note-body-content">
              <textarea
                value={this.state.content}
                placeholder={this.state.content || "Start writing..."}
                onChange={this.handleChange("content")}
                // onChange={this.handleUpdate}
                // on submit needed? stop from doing anything , e.preventDefault()
              />
            </div>
          </div>
          {/* </form>  */}
        </div>
      );
    } else {
      // this does not work
      return (
        <div className="note">
          <div className="note-header">
            <div className="note-header-title">
              <i>
                <BiBookAlt />
              </i>
              {this.props.title}
            </div>
            <div className="note-header-action-btn"></div>
            <div className="note-show-action-dropdown">
              <section
                className="note-show-action-dropdown-btn"
                onClick={this.toggleActive}
              >
                <FaEllipsisH className="ellipsis-i" />
                {/* <FaEllipsisH className="ellipsis-i" /> */}
                <ul className="note-show-action-dropdown-ul">
                  <li>
                    <span
                      onClick={this.toggleActive}
                      className="move-note-wrapper"
                    >
                      <MoveNoteModal />
                    </span>
                  </li>
                  <li onClick={this.handleDelete}>Move Note to Trash</li>
                </ul>
              </section>
            </div>
          </div>

          <div className="note-body" onBlur={this.handleUpdate}>
            <div className="note-body-head">
              <input
                value={this.state.title}
                placeholder={this.state.title || "Title"}
                onChange={this.handleChange("title")}
              />
            </div>
            <div className="note-body-content">
              <textarea
                value={this.state.content}
                placeholder={this.state.content || "Start writing..."}
                onChange={this.handleChange("content")}

              />
            </div>
          </div>
          {/* </form>  */}
        </div>
      );
    }
  }
}

export default withRouter(NoteShow);
