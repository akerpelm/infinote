import { connect } from 'react-redux'
import NoteIndex from './note_index'
import { logout, removeErrors } from '../../actions/session_actions'

const mapStateToProps = (state) => {
  // debugger
    return {
      // currentUserId: state.session.id,
      currentUser: state.entities.users[state.session.id]
    }

}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  removeErrors: () => dispatch(removeErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(NoteIndex)
