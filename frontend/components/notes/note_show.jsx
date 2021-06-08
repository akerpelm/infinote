import React from "react";
import { withRouter } from "react-router";
import convertToSnakeCase from "../../util/snake_case_util";
import { BiBookAlt } from "react-icons/bi";
import DeleteModalContainer from "../notebooks/modals/delete_modal_container";
import MoveNoteModal from "../notebooks/modals/move_note_modal";
import EditModalContainer from "../notebooks/modals/edit_modal_container";
import ReactQuill from "react-quill";

export class NoteShow extends React.Component {
  constructor(props) {
    super(props);
    // let testThis = this;

    this.state = props.currentNote;
    // debugger

    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleBodyChange = this.handleBodyChange(this);
  }
  handleUpdate(e) {
    e.preventDefault();
    this.props.updateNote(
      convertToSnakeCase({
        id: this.state.id,
        title: this.state.title,
        content: this.state.content,
        notebookId: this.props.currentNote.notebookId,
      })
    );
  }

  componentDidUpdate(prevProps) {
    if (prevProps.noteId !== this.props.noteId) {
      this.setState(this.props.currentNote);
    }
  }

  handleBodyChange(val) {
    this.setState({ content: val });
    // e.preventDefault();
    // return (e) => {
    this.setState({});
  }
  //   debugger;
  //   return (e) => {
  //     debugger;
  //     this.setState({
  //       content: html,
  //     });
  //   };
  // }

  handleChange(field, arg) {
    return (e) => {
      this.setState({
        [field]: e.target.value,
      });
    };
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
                  <button className="delete-modal-btn">
                    <DeleteModalContainer />
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="note-body" onBlur={this.handleUpdate}>
            <div className="test"></div>
            <div className="note-body-head">
              <input
                className="note-body-head"
                value={this.state.title}
                placeholder={this.state.title || "Title"}
                onChange={this.handleChange("title")}
              />
            </div>

            <div className="note-body-content">
              {/* <textarea
                value={this.state.content}
                placeholder={this.state.content || "Start writing..."}
                onChange={this.handleChange("content")}
              /> */}
              <ReactQuill
                theme="snow"
                value={this.state.content}
                placeholder={this.state.content || "Start writing..."}
                onChange={(content, delta, source, editor) => {
                  // this.setState({})
                  this.setState({
                    content: content,
                  });
                }}
              />
            </div>
          </div>
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
                className="note-body-head"
                value={this.state.title}
                placeholder={this.state.title || "Title"}
                onChange={this.handleChange("title")}
              />
            </div>
            <div className="note-body-content">
              {/* <textarea
                value={this.state.content}
                placeholder={this.state.content || "Start writing..."}
                onChange={this.handleChange("content")}
              /> */}
              <ReactQuill
                theme="snow"
                value={this.state.content}
                placeholder={this.state.content || "Start writing..."}
                onChange={(content, delta, source, editor) => {
                  this.setState({
                    content: content,
                  });
                }}
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
