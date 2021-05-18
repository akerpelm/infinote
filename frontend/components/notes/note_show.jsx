import React from "react";
import { withRouter } from "react-router";
import convertToSnakeCase from "../../util/snake_case_util";

export class NoteShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.currentNote;

    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleUpdate(e) {
    debugger
    e.preventDefault();
    this.props
      .updateNote(convertToSnakeCase(this.state))
      .then(() =>
        this.props.history.push(`/notebooks/${this.props.notebook.id}`)
      );
  }

  handleChange(field) {
    // debugger
    return (e) =>
      this.setState({
        [field]: e.target.value,
      });
  }


  render() {
    const { currentNote } = this.props;
    let currentNoteTitle = currentNote ? currentNote.title : "Title";
    let currentNoteContent = currentNote ? currentNote.content : "Start typing";

    return (
      <div className="note" onBlur={this.handleUpdate}>
        {/* <form onChange={this.handleUpdate}> */}
        <div className="note-header">
          <div className="note-header-date">{this.props.title}</div>
          <div className="note-header-action-btn"></div>
        </div>
        <div className="note-body">
          <div className="note-body-head">
            <input
              value={this.state.title}
              onChange={this.handleChange("title")}
            />
          </div>
          <div className="note-body-content">
            <textarea
              value={this.state.content}
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
