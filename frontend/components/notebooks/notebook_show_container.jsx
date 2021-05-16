import { connect } from 'react-redux'
import { fetchNotebook, updateNotebook, removeErrors} from '../../actions/notebook_actions'
import { deleteNotebook } from '../../util/notebooks_api_util'
import NotebookShow from './notebook_show'
import { logout } from '../../actions/session_actions'

let tempNotes = [{ id: 1, title: "Test 1", content: "SUUUP", authorId: 1 }, { id: 2, title: "Test 2", content: "laskfdjals", authorId: 1 }]

let findNoteById = (notebook, noteId) => {
  return notebook.find( note => {
    return note.id == noteId
  })
}

const mapStateToProps = (state, ownProps) => {
    return {
    notebook: state.entities.notebooks[ownProps.match.params.notebookId],
    notes: tempNotes,
    currentNote: findNoteById(tempNotes, ownProps.match.params.noteId) ? findNoteById(tempNotes, ownProps.match.params.noteId) : undefined,
    errors: state.errors.session,
    currentUser: state.entities.users[state.session.id]
// gather notes
    }
  
}

const mapDispatchToProps = dispatch => ({
  fetchNotebook: (notebookId) => dispatch(fetchNotebook(notebookId)),
  action: notebook => dispatch(updateNotebook(notebook)),
  removeErrors: () => dispatch(removeErrors()),
  deleteNotebook: (notebookId) => dispatch(deleteNotebook(notebookId)),
  logout: () => dispatch(logout()),
  removeErrors: () => dispatch(removeErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(NotebookShow)
