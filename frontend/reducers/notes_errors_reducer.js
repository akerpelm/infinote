import {
  RECEIVE_ERRORS,
  REMOVE_ERRORS,
  RECEIVE_ALL_NOTES,
  RECEIVE_NOTE,
} from "../actions/note_actions";

const NoteErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_ALL_NOTES:
      nextState = [];
      return nextState;
    case RECEIVE_NOTE:
      nextState = [];
      return nextState;
    // case RECEIVE_ERRORS:
    //   nextState = action.errors;
    //   return nextState;
    case REMOVE_ERRORS:
      nextState = [];
      return nextState;
    default:
      return state;
  }
};
export default NoteErrorsReducer;
