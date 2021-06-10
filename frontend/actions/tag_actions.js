import * as TagsApiUtil from "../util/tags_api_util";

export const RECEIVE_ALL_TAGS = "RECEIVE_ALL_TAGS";
export const RECEIVE_TAG = "RECEIVE_TAG";
export const REMOVE_TAG = "REMOVE_TAG";
export const RECEIVE_TAG_ERRORS = "RECEIVE_TAG_ERRORS";
export const REMOVE_TAG_ERRORS = "REMOVE_ERRORS";

export const RECEIVE_TAGGED_NOTE = "RECEIVE_TAGGED_NOTE";
export const REMOVE_TAGGED_NOTE = "REMOVE_TAGGED_NOTE";
export const RECEIVE_TAGGED_NOTE_ERRORS = "RECEIVE_TAGGED_NOTE_ERRORS";
export const REMOVE_TAGGED_NOTE_ERRORS = "REMOVE_TAGGED_NOTE_ERRORS";

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

const receiveTagErrors = (errors) => ({
  type: RECEIVE_TAG_ERRORS,
  errors,
});

export const removeTagErrors = () => ({
  type: REMOVE_TAG_ERRORS,
});

const receiveTaggedNote = (taggedNote) => ({
  type: RECEIVE_TAGGED_NOTE,
  taggedNote,
});

const removeTaggedNote = (taggedNote) => ({
  type: REMOVE_TAGGED_NOTE,
  taggedNote,
});

const receiveTaggedNoteErrors = (errors) => ({
  type: RECEIVE_TAGGED_NOTE_ERRORS,
  errors,
});

export const removeTaggedNoteErrors = (errors) => ({
  type: REMOVE_TAGGED_NOTE_ERRORS,
  errors,
});

export const fetchTags = () => (dispatch) =>
  TagsApiUtil.fetchTags().then(
    (tags) => dispatch(receiveAllTags(tags)),
    (err) => dispatch(receiveTagErrors(err.responseJSON))
  );

export const fetchTag = (tagId) => (dispatch) =>
  TagsApiUtil.fetchTag(tagId).then(
    (tag) => dispatch(receiveTag(tag)),
    (err) => dispatch(receiveTagErrors(err.responseJSON))
  );

export const createTag = (tag) => (dispatch) =>
  TagsApiUtil.createTag(tag).then(
    (tag) => dispatch(receiveTag(tag)),
    (err) => dispatch(receiveTagErrors(err.responseJSON))
  );
export const updateTag = (tag) => (dispatch) =>
  TagsApiUtil.updateTag(tag).then(
    (tag) => dispatch(receiveTag(tag)),
    (err) => dispatch(receiveTagErrors(err.responseJSON))
  );

export const deleteTag = (tag) => (dispatch) =>
  TagsApiUtil.deleteTag(tag).then(
    (tag) => displatch(removeTag(tag)),
    (err) => dispatch(receiveTagErrors(err))
  );

export const createTaggedNote = (taggedNote) => (dispatch) =>
  TagsApiUtil.createTaggedNote(taggedNote).then(
    (taggedNote) => dispatch(receiveTaggedNote(taggedNote)),
    (err) => dispatch(receiveTaggedNoteErrors(err))
  );

export const deleteTaggedNote = (taggedNote) => (dispatch) =>
  TagsApiUtil.deleteTaggedNote(taggedNote).then(
    (taggedNote) => dispatch(removeTaggedNote(taggedNote)),
    (err) => dispatch(receiveTaggedNoteErrors(err))
  );
