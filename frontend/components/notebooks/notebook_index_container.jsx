import { connect } from 'react-redux'
import {fetchNotebooks} from '../../actions/notebook_actions'
import { logout } from '../../actions/session_actions'
import NotebookIndex from './notebook_index'


const mapStateToProps = (state) => ({
        notebooks: Object.values(state.entities.notebooks),
        user: state.entities.users[state.session.id]
})


const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    fetchNotebooks: () => dispatch(fetchNotebooks())
})

export default connect(mapStateToProps, mapDispatchToProps)(NotebookIndex)

