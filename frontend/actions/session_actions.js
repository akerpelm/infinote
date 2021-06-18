import * as SessionApiUtil from "../util/session_api_util";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const REMOVE_ERRORS = "REMOVE_ERRORS";

const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});

const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const removeErrors = () => ({
  type: REMOVE_ERRORS,
});

export const login = (user) => (dispatch) =>
  SessionApiUtil.postSession(user).then(
    (currentUser) => dispatch(receiveCurrentUser(currentUser)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );

export const logout = () => (dispatch) =>
  SessionApiUtil.deleteSession().then(
    () => dispatch(logoutCurrentUser()),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );

export const signup = (user) => (dispatch) =>
  SessionApiUtil.postUser(user).then(
    (currentUser) => dispatch(receiveCurrentUser(currentUser)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );
