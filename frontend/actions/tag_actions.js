import * as TagsApiUtil from "../util/tags_api_util";

export const RECEIVE_ALL_TAGS = "RECEIVE_ALL_TAGS";
export const RECEIVE_TAG = "RECEIVE_TAG";
export const REMOVE_TAG = "REMOVE_TAG";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const REMOVE_ERRORS = "REMOVE_ERRORS";

const receiveAllTags = (tags) => ({
  type: RECEIVE_ALL_TAGS,
  tags,
});

const receiveTag = (tag) => ({
  type: RECEIVE_TAG,
  tag,
});

const removeTag = (tag) => ({
  type: REMOVE_TAG,
  tag,
});

const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors,
});

export const removeTagErrors = () => ({
  type: REMOVE_ERRORS,
});

export const fetchTags = () => (dispatch) =>
  TagsApiUtil.fetchTags().then(
    (tags) => dispatch(receiveAllTags(tags)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );

export const fetchTag = (tagId) => (dispatch) =>
  TagsApiUtil.fetchTag(tagId).then(
    (tag) => dispatch(receiveTag(tag)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );

export const createTag = (tag) => (dispatch) =>
  TagsApiUtil.createTag(tag).then(
    (tag) => dispatch(receiveTag(tag)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );

export const updateTag = (tag) => (dispatch) =>
  TagsApiUtil.updateTag(tag).then(
    (tag) => dispatch(receiveTag(tag)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );

export const deleteTag = (tag) => (dispatch) =>
  TagsApiUtil.deleteTag(tag).then(
    (tag) => dispatch(removeTag(tag)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );
