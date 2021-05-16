import React, { Component } from 'react'
import NotesIndex from '../notes/notes_index'
import ExpandedSideNavContainer from '../side_nav/expanded_side_nav_container'
import NoteShow from '../notes/note_show'

export class NotebookShow extends Component {
    constructor(props) {
        super(props)
        this.state = props.notebook
        // debugger

    }
    componentDidMount() {
        this.props.fetchNotebook(this.props.match.params.notebookId)
    }
    render() {
        let title =  this.props.notebook ? this.props.notebook.title : "Notes" 
        // debugger
        return (
  
            <div className="notebook-show">
                <ExpandedSideNavContainer currentUser={this.props.currentUser} />
                {/* renders right nav */}
                <NotesIndex title={title} notes={this.props.notes} />
                {/* renders all notes */}
                <NoteShow title={title} currentNote={this.props.currentNote}/>
            </div>

        )
    }
}

export default NotebookShow
