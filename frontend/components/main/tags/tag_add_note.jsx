import React, { Component } from "react";
//Util
import convertToSnakeCase from "../../../util/snake_case_util";

class TagAddNote extends Component {
  constructor(props) {
    super(props);
    this.state = props.tag;
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate() {
    const { noteId, updateTag } = this.props;
    let newIds = this.state.noteIds;
    this.state.noteIds.includes(noteId) ? "" : newIds.push(noteId);
    this.setState({
      noteIds: newIds,
    });
    updateTag(convertToSnakeCase(this.state));
  }

  render() {
    const { tag } = this.props;
    return (
      <div className="noteless-tag">
        <button onClick={() => this.handleUpdate()} value={`${tag.name}`}>
          {tag.name}
        </button>
      </div>
    );
  }
}

export default TagAddNote;
