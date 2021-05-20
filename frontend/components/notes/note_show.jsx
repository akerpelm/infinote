import React from "react";
import { withRouter } from "react-router";
import convertToSnakeCase from "../../util/snake_case_util";
import { FaTrash } from "react-icons/fa";
import { BiBookAlt } from "react-icons/bi";
import NoteSelectNotebook from "./note_select_notebook_container";


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
    // .then(() =>
    // );
  }

  // componentWillUnmount() {
  // this.props.history.push(`/notebooks/${this.props.notebook.id}/notes/${this.props.currentNote.id}`)
  // }

  // shouldComponentUpdate to set state
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

  handleDelete(e) {
    e.preventDefault();
    debugger
    let path = this.props.history.location.pathname.includes("/0/notes") ? '0/' : this.props.notebook.id 
    this.props
      .deleteNote(this.props.currentNote.id)
      .then(this.props.history.push(`/notebooks/${path}`));
  }

  render() {
    const { currentNote } = this.props;
    return (
      <div className="note">
        <div className="note-header">
          <div className="note-header-title">
            <i>
              <BiBookAlt />
            </i>
            {this.props.title}
          </div>
          <div className="note-header-action-btn">
            <i className="action-btn" onClick={this.handleDelete}>
              <FaTrash />
            </i>
            <div className="note-header-delete" onClick={this.handleDelete}>
              Delete note?
            </div>
          </div>
            <div className="move-note-wrapper">
              <NoteSelectNotebook />
            </div> 
            {/* move this up one div ^ */}
        </div>
        {/* <div className="test-quill"> */}
        {/* <ReactQuill modules={App.modules} formats={App.formats} onChange={this.handleBody} value={} /> */}
        {/* </div> */}
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
  }
}

export default withRouter(NoteShow);
