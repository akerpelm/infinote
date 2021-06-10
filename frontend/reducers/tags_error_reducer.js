import {
  RECEIVE_ALL_TAGS,
  RECEIVE_TAG,
  RECEIVE_TAG_ERRORS,
  REMOVE_TAG_ERRORS,
} from "../actions/tag_actions";

const TagErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_ALL_TAGS:
      nextState = [];
      return nextState;
    case RECEIVE_TAG:
      nextState = [];
      return nextState;
    // case RECEIVE_TAG_ERRORS:
    //   // debugger
    //   nextState = action.errors;
    //   return nextState;
    case REMOVE_TAG_ERRORS:
      nextState = [];
      return nextState;
    default:
      return state;
  }
};

export default TagErrorsReducer;
