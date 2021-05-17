import { connect } from 'react-redux'
import {createNotebook, fetchNotebooks, removeNotebookErrors} from '../../actions/notebook_actions'
import { logout } from '../../actions/session_actions'
import NotebookIndex from './notebook_index'


const mapStateToProps = (state) => ({
        notebooks: Object.values(state.entities.notebooks),
        user: state.entities.users[state.session.id],
        notebook: {
        title: '',
        authorId: state.session.id,
        },
        formType: "create",
        errors: state.errors.session,
    

})


const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    fetchNotebooks: () => dispatch(fetchNotebooks()),
    action: notebook => dispatch(createNotebook(notebook)),
    removeNotebookErrors: () => dispatch(removeNotebookErrors())

})

export default connect(mapStateToProps, mapDispatchToProps)(NotebookIndex)

