export const SHOW_MODAL = "SHOW_MODAL"
export const HIDE_MODAL = "HIDE_MODAL"

export const showModal = ({modalProps, modalType}) => dispatch => {
    dispatch({
        type: SHOW_MODAL,
        modalProps,
        modalType

    })
    id
}

export const hideMOdal = () => dispatch => {
    dispatch({
        type: HIDE_MODAL

    })
}

