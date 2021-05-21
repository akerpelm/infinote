import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import convertToSnakeCase from "../../util/snake_case_util";
import { FaTrash, FaEllipsisH } from "react-icons/fa";
import { BiBookAlt, BiBook } from "react-icons/bi";
import { AiFillCaretRight } from "react-icons/bi";
import DeleteModalContainer from "../notebooks/modals/delete_modal_container";
import MoveNoteModal from "../notebooks/modals/move_note_modal";
import EditModalContainer from "../notebooks/modals/edit_modal_container";

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
    this.props.updateNote(
      convertToSnakeCase({
        id: this.state.id,
        title: this.state.title,
        content: this.state.content,
        notebookId: this.props.currentNote.notebookId
      })
    );
    //deconstruct ? this.state.title, etc
  }

  componentDidUpdate(prevProps) {
    if (prevProps.noteId !== this.props.noteId) {
      this.setState(this.props.currentNote);
    }
  }

  handleChange(field) {
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
    //p
    const { currentNote } = this.props;
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
            <div>
              <ul className="note-show-actions">
                <li>
                  <button>
                    <MoveNoteModal />
                  </button>
                </li>
                <li>
                  <button onClick={this.handleDelete}>
                    Move Note to Trash
                  </button>
                </li>
                <li>
                  <button>
                    <EditModalContainer />
                  </button>
                </li>
                <li>
                  <button>
                    <DeleteModalContainer />
                  </button>
                </li>
              </ul>
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
            <div>
              <ul className="note-show-actions">
                <li>
                  <button>
                    <MoveNoteModal />
                  </button>
                </li>
                <li>
                  <button onClick={this.handleDelete}>
                    Move Note to Trash
                  </button>
                </li>
              </ul>
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

{
  /* <div className="note-show-action-dropdown">
  <section
    className="note-show-action-dropdown-btn"
    onClick={this.toggleActive}
  >
    <FaEllipsisH className="ellipsis-i" />
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
</div> */
}
