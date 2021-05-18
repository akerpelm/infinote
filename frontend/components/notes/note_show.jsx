import React from "react";
import {withRouter} from 'react-router'

export class NoteShow extends React.Component {
  constructor(props) {
    super(props);
    // console.log('hi')
    // debugger
    this.state = this.props.currentNote
    // this.handleChange = this.handleChange.bind(this);
}

    // handleChange(field) {
    // //   debugger
    //      return e => this.setState({
    //          [field] : e.target.value
    //      })
    // }
    componentDidMount() {
        this.props.fetchNotes(this.props.match.params.noteId);
    }
    
    // componentWillUnmount() {
    //     debugger
    // }
    
    render() {
        const { currentNote } = this.props;
        let currentNoteTitle = currentNote ? currentNote.title : "Title";
        // let currentNoteId = currentNote ? currentNote.id : undefined;
        let currentNoteContent = currentNote ? currentNote.content : "Start typing";
        // debugger
        console.log(this.state)

    return (
      <div className="note">
        <div className="note-header">
          <div className="note-header-date">{this.props.title}</div>
          <div className="note-header-action-btn">
          </div>
        </div>
        <div className="note-body">
          <div className="note-body-head">
            <input placeholder={currentNoteTitle} />
          </div>
          <div className="note-body-content">
            <textarea placeholder={currentNoteContent} />
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(NoteShow);

// }

// export default NoteShowContainer

// import React, { Component } from 'react'

//     render() {
//         return (
//             <div>

//             </div>
//         )
//     }
