import * as NoteApiUtil from '../util/notes_api_util'

export const RECEIVE_ALL_NOTES = "RECEIVE_ALL_NOTES"
export const RECEIVE_NOTE = "RECEIVE_NOTE"
export const REMOVE_NOTE = "REMOVE_NOTE"
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"
export const REMOVE_ERRORS = "REMOVE_ERRORS"

const receiveAllNotes = (notes) => ({
    type: RECEIVE_ALL_NOTES,
    notes
})

const receiveNote = (note) => ({
    type: RECEIVE_NOTE,
    note
})

const removeNote = (noteId) => ({
    RECEIVE_ALL_NOTES,
    noteId
})

const receiveErrors = (errors) => ({
    RECEIVE_ERRORS,
    errors
})

export const removeNoteErrors = () => ({
    type: REMOVE_ERRORS
})

export const fetchNotes = () => dispatch => NoteApiUtil.fetchNotes().then(notes => dispatch(receiveAllNotes(notes)), err => (dispatch(receiveErrors(err.responseJSON))));

export const fetchNote = (noteId) => dispatch => NoteApiUtil.fetchNote(noteId).then( note => dispatch(receiveNote(note)), err => (dispatch(receiveErrors(err.responseJSON))));

export const createNote = (note) => dispatch => NoteApiUtil.createNote(note).then( note => dispatch(fetchNote(note)), err => (dispatch(receiveErrors(err))));

export const updateNote = (note) => dispatch => NoteApiUtil.updateNote(note).then (note => dispatch(receiveNote(note)), err => (dispatch(receiveErrors(err))));

export const deleteNote = (noteId) => dispatch => NoteApiUtil.deleteNote(noteId).then( note => dispatch(removeNote(note)), err => (dispatch(receiveErrors(err))));