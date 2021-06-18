import {
  RECEIVE_ALL_TAGS,
  RECEIVE_ERRORS,
  RECEIVE_TAG,
  REMOVE_ERRORS,
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
    case RECEIVE_ERRORS:
      action.errors ? (nextState = action.errors) : nextState;
      return nextState;
    case REMOVE_ERRORS:
      nextState = [];
      return nextState;
    default:
      return state;
  }
};

export default TagErrorsReducer;
