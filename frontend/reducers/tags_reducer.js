import {
  RECEIVE_ALL_TAGS,
  RECEIVE_TAG,
  REMOVE_TAG,
} from "../actions/tag_actions";

const TagsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_ALL_TAGS:
      action.tags ? (nextState = action.tags) : nextState;
      return nextState;
    case RECEIVE_TAG:
      nextState[action.tag.id] = action.tag;
      return nextState;
    case REMOVE_TAG:
      delete nextState[action.tag.id];
      return nextState;
    default:
      return state;
  }
};

export default TagsReducer;
