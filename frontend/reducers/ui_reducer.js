import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';

const UiReducer = combineReducers({
    modal: modalReducer
})

export default UiReducer;