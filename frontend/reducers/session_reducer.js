import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions'

const _nullSession = {
    id: null
}

const SessionReducer = (state = _nullSession, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            // return { id: action.currenUser.id}
            nextState[action.currentUser.id] = action.currentUser;
            return nextState;
        case LOGOUT_CURRENT_USER: 
            return _nullSession;
        default: 
            return state;
    }
}
export default SessionReducer;