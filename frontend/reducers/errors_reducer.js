import { combineReducers } from 'redux';
import SessionErrorsReducer from './session_errors_reducer'
import NotebookErrorsReducer from './notebook_errors_reducer'
import NoteErrorsReducer  from './notes_error_reducer';

const ErrorsReducer = combineReducers({
    session: SessionErrorsReducer,
    notebook: NotebookErrorsReducer,
    note: NoteErrorsReducer
})

export default ErrorsReducer