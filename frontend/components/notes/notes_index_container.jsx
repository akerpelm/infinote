// import React, { Component } from 'react'
// import { connect } from 'react-redux'

// const mapStateToProps = (state, ownProps) => {
//     let dbNotes = Object.values(state.entities.notes)

//     let findNoteById = (notebook, noteId) => {
//     return notebook.find( note => {
//         // console.log(note.id, 'note.id', noteId, 'noteId')
//         return note.id == noteId
//     })
//     }

//     return {
//     notebook: state.entities.notebooks[ownProps.match.params.notebookId],
//     notes: dbNotes ? dbNotes : undefined,
//     currentNote: findNoteById(dbNotes, ownProps.match.params.noteId) ? findNoteById(dbNotes, ownProps.match.params.noteId) : undefined,
//     errors: state.errors.notes,
//     currentUser: state.entities.users[state.session.id]

//     }
       
// }

// const mapDispatchToProps = dispatch => ({
//     fetchNotes: () => dispatch(fetchNotes()),
//     fetchNote: (noteId) => dispatch(fetchNote(noteId)),
    
// })

// export default connect(mapStateToProps, mapDispatchToProps)(NotesIndex)
