import { RECEIVE_ERRORS , RECEIVE_CURRENT_USER, REMOVE_ERRORS, } from '../actions/session_actions'

const SessionErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            nextState = [];
            return nextState;
        case RECEIVE_ERRORS:
            nextState = action.errors;
            return nextState;
        case REMOVE_ERRORS: 
            nextState = [];
            return nextState
        default:
            return state;
    }
}

export default SessionErrorsReducer;