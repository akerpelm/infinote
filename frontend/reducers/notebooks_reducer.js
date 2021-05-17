import { RECEIVE_ALL_NOTEBOOKS, REMOVE_NOTEBOOK} from '../actions/notebook_actions';
import { RECEIVE_NOTEBOOK } from '../actions/notebook_actions'

const NotebooksReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_ALL_NOTEBOOKS:
            nextState = action.notebooks;
            return nextState;
        case RECEIVE_NOTEBOOK:
            // debugger
            nextState[action.notebook.id] = action.notebook;
            return nextState;
        case REMOVE_NOTEBOOK: 
            delete nextState[action.notebookId];
            return nextState;
        default: 
            return state;
    }
}

export default NotebooksReducer