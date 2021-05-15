import { connect } from 'react-redux'
import { fetchNotebook, updateNotebook, removeErrors } from '../../actions/notebook_actions'
import NotebookShow from './notebook_show'


const mapStateToProps = (state, ownProps) => ({

    notebook: state.entities.notebooks[ownProps.match.params.notebookId],
    formType: "Rename",
    errors: state.errors.session,
    //gather notes here
})

const mapDispatchToProps = dispatch => ({
  fetchNotebook: (notebookId) => dispatch(fetchNotebook(notebookId)),
  action: notebook => dispatch(updateNotebook(notebook)),
  removeErrors: () => dispatch(removeErrors()),
})

export default connect(mapStateToProps, mapDispatchToProps)(NotebookShow)
