import React, { Component } from 'react'
import NotesIndex from '../notes/notes_index'
import ExpandedSideNavContainer from '../side_nav/expanded_side_nav_container'
import NoteShow from '../notes/note_show'
import EditModalContainer from "../notebooks/modals/edit_modal_container";
import TestContainer from '../notes/test_container';


export class NotebookShow extends Component {
  constructor(props) {
    super(props);

    this.state = props.notebook;
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.props.fetchNotebook(this.props.match.params.notebookId);
  }
  // handleChange(field) {
  //   return (e) =>
  //     this.setState({
  //       [field]: e.target.value,
  //     });
  // }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   this.props.updateNotebook(this.state);
  // }
  render() {
    let title = this.props.notebook ? this.props.notebook.title : "Notes";
    if (!title) return null;
    return (
      <div className="notebook-show">
        <ExpandedSideNavContainer currentUser={this.props.currentUser} />
        {/* renders right nav */}
        <TestContainer />
        <NotesIndex title={title} notes={this.props.notes} />
        {/* <EditModalContainer notebook={this.props.notebook}/> */}

        {/* renders all notes */}
        <NoteShow title={title} currentNote={this.props.currentNote} />
        {/* renders individual note */}
      </div>
    );
  }
}

export default NotebookShow
