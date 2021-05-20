import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchNotebooks } from '../../actions/notebook_actions'
import { fetchNotes, updateNote } from '../../actions/note_actions'
import MoveNoteModal from '../notebooks/modals/move_note_modal'

class NoteSelectNotebook extends Component {
    constructor(props) {
        super(props)
    
    }
    
    render() {
        // debugger
        return (
            <div className="move-note-div">
                    <MoveNoteModal 
                    currentNoteNotebook={this.props.currentNoteNotebook}/>

            </div>
        )
    }
}



const mapStateToProps = (state, ownProps) => {
    const currentNote = state.entities.notes[ownProps.match.params.noteId]
    const currentNoteNotebook = state.entities.notebooks[currentNote.notebookId]
    return {
    currentNote, 
    currentNoteNotebook,
    notebooks: state.entities.notebooks
    }
}

const mapDispatchToProps = dispatch => ({

    fetchNotes: () => dispatch(fetchNotes()),
    fetchNotebooks: () => dispatch(fetchNotebooks()),
    updateNote: note => dispatch(updateNote(note)),

    
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NoteSelectNotebook)
)