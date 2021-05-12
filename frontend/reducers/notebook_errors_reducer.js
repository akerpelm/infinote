import { RECEIVE_ERRORS, REMOVE_ERRORS, RECEIVE_ALL_NOTEBOOKS, RECEIVE_NOTEBOOK } from '../actions/notebook_actions'

const NotebookErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALL_NOTEBOOKS:
            nextState = [];
            return nextState;
        case RECEIVE_NOTEBOOK:
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

export default NotebookErrorsReducer;