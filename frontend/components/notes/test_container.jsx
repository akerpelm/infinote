import { connect } from 'react-redux'
import TestIndex from './test_index'
import { fetchNotes } from '../../actions/note_actions'


const mapStateToProps = (state) => {
    debugger
   return { notes: Object.values(state.entities.notes)}
    
}

const mapDispatchToProps = dispatch => {
    return {
        fetchNotes: () => dispatch(fetchNotes())
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(TestIndex)
