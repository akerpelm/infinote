import { combineReducers } from 'redux';
import SessionErrorsReducer from './session_errors_reducer'
import NotebookErrorsReducer from './notebook_errors_reducer'

const ErrorsReducer = combineReducers({
    session: SessionErrorsReducer,
    notebook: NotebookErrorsReducer 
})

export default ErrorsReducer