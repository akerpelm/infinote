import { combineReducers} from 'redux'
import NotebooksReducer from './notebooks_reducer'
import UsersReducer from './users_reducer'

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    notebooks: NotebooksReducer
})

export default EntitiesReducer