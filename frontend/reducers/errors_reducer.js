import { combineReducers } from "redux";
import SessionErrorsReducer from "./session_errors_reducer";
import NotebookErrorsReducer from "./notebook_errors_reducer";
import NoteErrorsReducer from "./notes_errors_reducer";
import TagErrorsReducer from "./tag_errors_reducer";
// import TagErrorsReducer from "./tags_error_reducer";

const ErrorsReducer = combineReducers({
  session: SessionErrorsReducer,
  note: NoteErrorsReducer,
  notebook: NotebookErrorsReducer,
  tag: TagErrorsReducer,
});

export default ErrorsReducer;
