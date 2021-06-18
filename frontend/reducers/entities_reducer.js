import { combineReducers } from "redux";
import NotebooksReducer from "./notebook_reducer";
import NotesReducer from "./notes_reducer";
import TagsReducer from "./tags_reducer";
import UsersReducer from "./users_reducer";

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  notes: NotesReducer,
  notebooks: NotebooksReducer,
  tags: TagsReducer,
});

export default EntitiesReducer;
