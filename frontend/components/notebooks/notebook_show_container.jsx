import { connect } from 'react-redux'
import { fetchNotebook } from '../../actions/notebook_actions'
import NotebookShow from './notebook_show'


const mapStateToProps = (state, ownProps) => ({
  // debugger
    notebook: state.entities.notebooks[ownProps.match.params.notebookId],
    //gather notes here
})

const mapDispatchToProps = dispatch => ({
  fetchNotebook: (notebookId) => dispatch(fetchNotebook(notebookId))  
})

export default connect(mapStateToProps, mapDispatchToProps)(NotebookShow)
