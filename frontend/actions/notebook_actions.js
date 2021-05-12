import * as NotebookApiUtil from '../util/notebooks_api_util'

export const RECEIVE_ALL_NOTEBOOKS = "RECEIVE_ALL_NOTEBOOKS"
export const RECEIVE_NOTEBOOK = "RECEIVE_NOTEBOOK"
export const REMOVE_NOTEBOOK = "REMOVE_NOTEBOOK"
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"
export const REMOVE_ERRORS = "REMOVE_ERRORS"

const receiveAllNotebooks = notebooks => ({
    type: RECEIVE_ALL_NOTEBOOKS,
    notebooks
});

const receiveNotebook = notebook => ({
    type: RECEIVE_NOTEBOOK,
    notebook
});

const removeNotebook = notebookId => ({
    type: REMOVE_NOTEBOOK,
    notebookId
});

const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
});

export const removeErrors = () => ({
    type: REMOVE_ERRORS
});

export const fetchNotebooks = () => dispatch => NotebookApiUtil.getNotebooks().then(notebooks => dispatch(receiveAllNotebooks(notebooks)), err => (dispatch(receiveErrors(err.responseJSON))));

export const fetchNotebook = (notebookId) => dispatch => NotebookApiUtil.getNotebook(notebookId).then(notebook => dispatch(receiveNotebook(notebook)), err => (dispatch(receiveErrors(err.responseJSON))));

export const createNotebook = (notebook) => dispatch => NotebookApiUtil.createNotebook(notebook).then(notebook => dispatch(receiveNotebook(notebook)), err => (dispatch(receiveErrors(err.responseJSON))));

export const updateNotebook = (notebook) => dispatch => NotebookApiUtil.updateNotebook(notebook).then(notebook => dispatch(receiveNotebook(notebook)), err => (dispatch(receiveErrors(err.responseJSON))));

export const deleteNotebook = (notebookId) => dispatch => NotebookApiUtil.deleteNotebook(notebookId).then( notebook => dispatch(removeNotebook(notebook.id)), err => (dispatch(receiveErrors(err.responseJSON))));