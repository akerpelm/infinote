import { SHOW_MODAL, HIDE_MODAL } from '../actions/modal_actions'


const initialState = {
    modalType: null,
    modalProps: {
        open: false
    }
}

const ModalReducer = (state = initialState, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch(action.type) {
        case SHOW_MODAL: 
            debugger
            nextState.modalProps = action.modalProps;
            nextState.modalType = action.modalType;
            nextState.type = action.type;
            return nextState
        case HIDE_MODAL:
            return initialState;
        default: 
            return state;
    }
}

export default ModalReducer